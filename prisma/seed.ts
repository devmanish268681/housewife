const {
  pistachioProducts,
  figProducts,
  peanutProducts,
  walnutProducts,
  raisinProducts,
  cashewNutsProducts,
  almondsProducts,
  foxNutsProducts,
  naturalSweetenersProducts,
  grainsPulsesProducts,
  spicesCondimentsProducts,
  sugarSaltProducts,
  cookingOilProducts,
  notebookProducts,
  writingInstrumentsProducts,
  accessoriesProducts,
  OfficeSuppliesProducts,
  faceCareProducts,
  eyeMakeupProducts,
  hairAndSkinProducts,
  imagePublicLinks,
} = require("./data");

const { PrismaClient, OrderStatus } = require("@prisma/client");
const axios = require("axios");
const { load } = require("cheerio");
const path = require("path");
const prisma = new PrismaClient();

type ImageUrlWithProductName = {
  originalLink: string;
  imageFile: string | null;
  productName: string | null;
}[];

type ProductSeedItem = {
  brandName: string;
  productName: string;
  description: string;
};

type ProductVariantSpec = {
  unit: string;
  unitSize: number;
  price: number;
  stock: number;
  priceMultiplier?: number;
  stockMultiplier?: number;
};

function imageFileToProductName(imageFile: string) {
  if (!imageFile) return null;

  const nameWithoutExtension = imageFile.replace(/\.[^/.]+$/, ""); // Remove .jpg, .png, etc.

  const words = nameWithoutExtension
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return words.join(" ");
}

async function getImageFileNameFromPage(pageUrl: string) {
  try {
    const { data: html } = await axios.get(pageUrl);
    const $ = load(html);

    const imageUrl = $("meta[property='og:image']").attr("content");

    if (!imageUrl) return null;

    // Extract just the filename
    const fileName = path.basename(imageUrl);
    return fileName;
  } catch (err: any) {
    console.error("Error fetching", pageUrl, err.message);
    return null;
  }
}
let imageUrlWithProductName: {
  originalLink: string;
  imageFile: string | null;
  productName: string | null;
}[] = [];

async function prepareImageData() {
  const imageUrlWithProductName: {
    originalLink: string;
    imageFile: string | null;
    productName: string | null;
  }[] = [];

  for (const link of imagePublicLinks) {
    const imageFile = await getImageFileNameFromPage(link);
    const productName = imageFileToProductName(imageFile);

    imageUrlWithProductName.push({
      originalLink: link,
      imageFile,
      productName,
    });
  }
  console.log("imageUrlWithProductName", imageUrlWithProductName);

  return imageUrlWithProductName;
}
async function seedProducts(
  productList: ProductSeedItem[],
  category: string,
  subCategory: string,
  imageUrlWithProductName: ImageUrlWithProductName,
  variantSpecs: ProductVariantSpec[]
) {
  let priceCounter = 1;
  let stockCounter = 1;

  const categoryData = await getOrCreateCategory(category);

  const subCategoryData = await getOrCreateSubCategory(
    subCategory,
    categoryData.id
  );

  for (const item of productList) {
    const uniqueBrandNames = [...new Set(productList.map((p) => p.brandName))];

    const brands = await getOrCreateBrands(uniqueBrandNames);
    const brand = brands.find((b) => b.name === item.brandName);

    const productImageUrl = imageUrlWithProductName.filter(
      (data) => data.productName === item.productName
    )[0];

    if (!brand) throw new Error(`Brand not found: ${item.brandName}`);

    const product = await prisma.product.create({
      data: {
        name: item.productName,
        description:
          item.description ?? `${item.productName} by ${item.brandName}`,
        images: [
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        categoryId: categoryData.id,
        subCategoryId: subCategoryData.id,
        brandId: brand!.id,
      },
    });

    await prisma.productVariant.createMany({
      data: variantSpecs.map((spec) => ({
        productId: product.id,
        unit: spec.unit,
        unitSize: spec.unitSize,
        price: spec.price + (spec.priceMultiplier ?? 0) * priceCounter,
        stock: spec.stock + (spec.stockMultiplier ?? 0) * stockCounter,
      })),
    });
    priceCounter++;
    stockCounter++;
  }
  console.log(
    `🌱 Data seeded for category: ${category} and subCategory ${subCategory}`
  );
}
async function getOrCreateCategory(name: string) {
  let category = await prisma.category.findFirst({
    where: {
      name,
    },
  });

  if (!category) {
    category = await prisma.category.create({
      data: {
        name,
      },
    });
  }

  return category;
}
async function getOrCreateSubCategory(name: string, categoryId: string) {
  let subCategory = await prisma.subCategory.findFirst({
    where: {
      name,
      categoryId,
    },
  });

  if (!subCategory) {
    subCategory = await prisma.subCategory.create({
      data: {
        name,
        categoryId,
      },
    });
  }

  return subCategory;
}
async function getOrCreateBrands(brandNames: string[]) {
  const brands = await Promise.all(
    brandNames.map((name) =>
      prisma.brand.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );
  return brands;
}

async function main() {
  imageUrlWithProductName = await prepareImageData();

  console.log("🌱 Starting seed...");
  // Roles
  // Create roles, with "user" as default

  await prisma.paymentMethod.createMany({
    data: [
      { methodName: "cod" },
      { methodName: "upi" },
      { methodName: "card" },
    ],
    skipDuplicates: true,
  });

  await Promise.all([
    prisma.role.create({ data: { name: "admin" } }),
    prisma.role.create({ data: { name: "delivery_agent" } }),
    prisma.role.create({ data: { name: "user" } }),
  ]);
  // 1. Get all roles first
  const roles = await prisma.role.findMany();

  const roleMap = Object.fromEntries(
    roles.map((role: any) => [role.name, role.id])
  );
  // 2. Define users to be created with role names
  const usersToCreate = [
    {
      name: "Admin User",
      email: "admin@example.com",
      profileImage: "admin.png",
      roleName: "admin",
    },
    {
      name: "Delivery Agent 1",
      email: "agent1@example.com",
      profileImage: "agent1.png",
      roleName: "delivery_agent",
    },
    {
      name: "Manish Patil",
      email: "manishpatil@gmail.com",
      profileImage: "manish.png",
      roleName: "user",
    },
  ];

  // 3. Convert roleName to roleId and create users
  await Promise.all(
    usersToCreate.map((user) =>
      prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          profileImage: user.profileImage,
          roleId: roleMap[user.roleName], // ✅ resolve roleId
        },
      })
    )
  );

  // 4. Verify
  const allUsers = await prisma.user.findMany({
    include: { roles: true },
  });
  console.log(allUsers);

  await seedProducts(
    cookingOilProducts,
    "Groceries",
    "Cooking Oil",
    imageUrlWithProductName,
    [
      {
        unit: "L",
        unitSize: 1,
        price: 150,
        stock: 100,
      },
      {
        unit: "L",
        unitSize: 5,
        price: 700,
        stock: 50,
      },
    ]
  );

  await seedProducts(
    sugarSaltProducts,
    "Groceries",
    "Sugar & Salt",
    imageUrlWithProductName,
    [
      {
        unit: "kg",
        unitSize: 1,
        price: 40,
        stock: 100,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 20,
        stock: 50,
      },
      {
        unit: "kg",
        unitSize: 5,
        price: 180,
        stock: 30,
      },
    ]
  );

  await seedProducts(
    spicesCondimentsProducts,
    "Groceries",
    "Spices & Condiments",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 100,
        price: 30,
        stock: 70,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 40,
        stock: 60,
      },
      {
        unit: "kg",
        unitSize: 1,
        price: 190,
        stock: 40,
      },
    ]
  );

  await seedProducts(
    grainsPulsesProducts,
    "Groceries",
    "Grains & Pulses",
    imageUrlWithProductName,
    [
      {
        unit: "kg",
        unitSize: 1,
        price: 80,
        stock: 80,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 45,
        stock: 40,
      },
    ]
  );

  await seedProducts(
    naturalSweetenersProducts,
    "Groceries",
    "Natural Sweeteners",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 250,
        price: 40,
        stock: 50,
        priceMultiplier: 3,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 70,
        stock: 80,
        priceMultiplier: 4,
        stockMultiplier: 7,
      },
      {
        unit: "kg",
        unitSize: 1,
        price: 120,
        stock: 100,
        priceMultiplier: 5,
        stockMultiplier: 10,
      },
    ]
  );

  await seedProducts(
    foxNutsProducts,
    "Groceries",
    "Fox Nuts",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 25,
        price: 25,
        stock: 100,
        priceMultiplier: 2,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 50,
        price: 45,
        stock: 80,
        priceMultiplier: 3,
        stockMultiplier: 8,
      },
      {
        unit: "g",
        unitSize: 100,
        price: 90,
        stock: 50,
        priceMultiplier: 4,
        stockMultiplier: 10,
      },
    ]
  );

  await seedProducts(
    almondsProducts,
    "Dry Fruits & Nuts",
    "Almonds",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 25,
        price: 25,
        stock: 100,
        priceMultiplier: 2,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 100,
        price: 90,
        stock: 80,
        priceMultiplier: 1.8,
        stockMultiplier: 4,
      },
      {
        unit: "g",
        unitSize: 250,
        price: 210,
        stock: 60,
        priceMultiplier: 1.6,
        stockMultiplier: 3,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 390,
        stock: 40,
        priceMultiplier: 1.5,
        stockMultiplier: 2,
      },
      {
        unit: "kg",
        unitSize: 1,
        price: 740,
        stock: 25,
        priceMultiplier: 1.4,
        stockMultiplier: 1,
      },
    ]
  );

  await seedProducts(
    cashewNutsProducts,
    "Dry Fruits & Nuts",
    "Cashew Nuts",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 25,
        price: 25,
        stock: 100,
        priceMultiplier: 2,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 50,
        price: 45,
        stock: 120,
        priceMultiplier: 1.8,
        stockMultiplier: 6,
      },
      {
        unit: "g",
        unitSize: 100,
        price: 85,
        stock: 130,
        priceMultiplier: 1.7,
        stockMultiplier: 7,
      },
      {
        unit: "g",
        unitSize: 150,
        price: 120,
        stock: 110,
        priceMultiplier: 1.6,
        stockMultiplier: 8,
      },
      {
        unit: "g",
        unitSize: 200,
        price: 150,
        stock: 115,
        priceMultiplier: 1.5,
        stockMultiplier: 8,
      },
      {
        unit: "g",
        unitSize: 250,
        price: 180,
        stock: 100,
        priceMultiplier: 1.45,
        stockMultiplier: 7,
      },
      {
        unit: "g",
        unitSize: 300,
        price: 210,
        stock: 105,
        priceMultiplier: 1.4,
        stockMultiplier: 6,
      },
    ]
  );

  await seedProducts(
    raisinProducts,
    "Dry Fruits & Nuts",
    "Raisins",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 100,
        price: 172,
        stock: 300,
        priceMultiplier: 2.46,
        stockMultiplier: 3,
      },
      {
        unit: "g",
        unitSize: 250,
        price: 231,
        stock: 500,
        priceMultiplier: 1.54,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 626,
        stock: 500,
        priceMultiplier: 2.41,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 1000,
        price: 760,
        stock: 400,
        priceMultiplier: 1.52,
        stockMultiplier: 4,
      },
    ]
  );

  await seedProducts(
    walnutProducts,
    "Dry Fruits & Nuts",
    "Walnuts",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 100,
        price: 162,
        stock: 300,
        priceMultiplier: 2.32,
        stockMultiplier: 3,
      },
      {
        unit: "g",
        unitSize: 250,
        price: 255,
        stock: 500,
        priceMultiplier: 1.7,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 621,
        stock: 300,
        priceMultiplier: 2.39,
        stockMultiplier: 3,
      },
      {
        unit: "g",
        unitSize: 250,
        price: 322,
        stock: 300,
        priceMultiplier: 2.15,
        stockMultiplier: 3,
      },
    ]
  );

  await seedProducts(
    peanutProducts,
    "Dry Fruits & Nuts",
    "Peanuts",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 100,
        price: 118,
        stock: 300,
        priceMultiplier: 1.58,
        stockMultiplier: 3,
      },
      {
        unit: "g",
        unitSize: 250,
        price: 235,
        stock: 500,
        priceMultiplier: 1.57,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 485,
        stock: 400,
        priceMultiplier: 1.94,
        stockMultiplier: 4,
      },
      {
        unit: "g",
        unitSize: 1000,
        price: 960,
        stock: 400,
        priceMultiplier: 1.92,
        stockMultiplier: 4,
      },
    ]
  );

  await seedProducts(
    figProducts,
    "Dry Fruits & Nuts",
    "Figs",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 100,
        price: 165,
        stock: 400,
        priceMultiplier: 2.2,
        stockMultiplier: 4,
      },
      {
        unit: "g",
        unitSize: 250,
        price: 310,
        stock: 500,
        priceMultiplier: 2.07,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 595,
        stock: 300,
        priceMultiplier: 2.38,
        stockMultiplier: 3,
      },
      {
        unit: "g",
        unitSize: 1000,
        price: 990,
        stock: 400,
        priceMultiplier: 1.98,
        stockMultiplier: 4,
      },
    ]
  );

  await seedProducts(
    pistachioProducts,
    "Dry Fruits & Nuts",
    "Pistachios",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 100,
        price: 225,
        stock: 400,
        priceMultiplier: 3.0,
        stockMultiplier: 4,
      },
      {
        unit: "g",
        unitSize: 250,
        price: 530,
        stock: 500,
        priceMultiplier: 3.54,
        stockMultiplier: 5,
      },
      {
        unit: "g",
        unitSize: 500,
        price: 1020,
        stock: 300,
        priceMultiplier: 3.4,
        stockMultiplier: 3,
      },
      {
        unit: "g",
        unitSize: 1000,
        price: 1850,
        stock: 400,
        priceMultiplier: 3.08,
        stockMultiplier: 4,
      },
    ]
  );

  await seedProducts(
    notebookProducts,
    "Stationery Items",
    "Notebooks & Covers",
    imageUrlWithProductName,
    [
      {
        unit: "pages",
        unitSize: 80,
        price: 30,
        stock: 100,
        priceMultiplier: 1.8,
        stockMultiplier: 5,
      },
      {
        unit: "pages",
        unitSize: 100,
        price: 38,
        stock: 90,
        priceMultiplier: 1.85,
        stockMultiplier: 5,
      },
      {
        unit: "pages",
        unitSize: 120,
        price: 46,
        stock: 85,
        priceMultiplier: 1.9,
        stockMultiplier: 4,
      },
      {
        unit: "pages",
        unitSize: 160,
        price: 60,
        stock: 75,
        priceMultiplier: 2.0,
        stockMultiplier: 3,
      },
      {
        unit: "pages",
        unitSize: 200,
        price: 72,
        stock: 70,
        priceMultiplier: 2.1,
        stockMultiplier: 3,
      },
      {
        unit: "pages",
        unitSize: 240,
        price: 88,
        stock: 65,
        priceMultiplier: 2.2,
        stockMultiplier: 3,
      },
      {
        unit: "pages",
        unitSize: 300,
        price: 110,
        stock: 60,
        priceMultiplier: 2.4,
        stockMultiplier: 2,
      },
      {
        unit: "pages",
        unitSize: 400,
        price: 145,
        stock: 50,
        priceMultiplier: 2.5,
        stockMultiplier: 1,
      },
      {
        unit: "pages",
        unitSize: 500,
        price: 180,
        stock: 45,
        priceMultiplier: 2.6,
        stockMultiplier: 1,
      },
      {
        unit: "pages",
        unitSize: 600,
        price: 210,
        stock: 40,
        priceMultiplier: 2.7,
        stockMultiplier: 1,
      },
    ]
  );

  await seedProducts(
    writingInstrumentsProducts,
    "Stationery Items",
    "Writing Instruments",
    imageUrlWithProductName,
    [
      {
        unit: "pcs",
        unitSize: 1,
        price: 20,
        stock: 100,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 10,
        price: 180,
        stock: 60,
        priceMultiplier: 2.0,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 50,
        price: 900,
        stock: 30,
        priceMultiplier: 3.0,
        stockMultiplier: 1,
      },
    ]
  );

  await seedProducts(
    accessoriesProducts,
    "Stationery Items",
    "Accessories ",
    imageUrlWithProductName,
    [
      {
        unit: "pcs",
        unitSize: 1,
        price: 10,
        stock: 200,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "pack",
        unitSize: 5,
        price: 45,
        stock: 150,
        priceMultiplier: 1.3,
        stockMultiplier: 1.2,
      },
      {
        unit: "box",
        unitSize: 10,
        price: 90,
        stock: 100,
        priceMultiplier: 1.2,
        stockMultiplier: 1.5,
      },
      {
        unit: "set",
        unitSize: 1,
        price: 60,
        stock: 80,
        priceMultiplier: 1.4,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 1,
        price: 25,
        stock: 120,
        priceMultiplier: 1.6,
        stockMultiplier: 1,
      },
      {
        unit: "pack",
        unitSize: 3,
        price: 75,
        stock: 90,
        priceMultiplier: 1.3,
        stockMultiplier: 1.1,
      },
      {
        unit: "set",
        unitSize: 1,
        price: 100,
        stock: 60,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 1,
        price: 35,
        stock: 110,
        priceMultiplier: 1.4,
        stockMultiplier: 1,
      },
    ]
  );

  await seedProducts(
    OfficeSuppliesProducts,
    "Stationery Items",
    "Office Supplies",
    imageUrlWithProductName,
    [
      {
        unit: "pcs",
        unitSize: 1,
        price: 25,
        stock: 150,
        priceMultiplier: 1.3,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 2,
        price: 45,
        stock: 120,
        priceMultiplier: 1.2,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 3,
        price: 65,
        stock: 90,
        priceMultiplier: 1.1,
        stockMultiplier: 1,
      },
      {
        unit: "box",
        unitSize: 10,
        price: 190,
        stock: 60,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "box",
        unitSize: 20,
        price: 360,
        stock: 40,
        priceMultiplier: 1.4,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 1,
        price: 30,
        stock: 100,
        priceMultiplier: 1.2,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 2,
        price: 58,
        stock: 95,
        priceMultiplier: 1.2,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 5,
        price: 120,
        stock: 70,
        priceMultiplier: 1.3,
        stockMultiplier: 1,
      },
      {
        unit: "box",
        unitSize: 12,
        price: 270,
        stock: 50,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "box",
        unitSize: 24,
        price: 520,
        stock: 30,
        priceMultiplier: 1.4,
        stockMultiplier: 1,
      },
    ]
  );
  await seedProducts(
    faceCareProducts,
    "Cosmetics & Personal Care",
    "Face Care",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 50,
        price: 120,
        stock: 100,
        priceMultiplier: 2,
        stockMultiplier: 1,
      },
      {
        unit: "g",
        unitSize: 100,
        price: 220,
        stock: 80,
        priceMultiplier: 2,
        stockMultiplier: 1.2,
      },
      {
        unit: "g",
        unitSize: 200,
        price: 390,
        stock: 60,
        priceMultiplier: 1.8,
        stockMultiplier: 1.5,
      },
    ]
  );

  await seedProducts(
    eyeMakeupProducts,
    "Cosmetics & Personal Care",
    "Eye Makeup",
    imageUrlWithProductName,
    [
      {
        unit: "pcs",
        unitSize: 1,
        price: 90,
        stock: 150,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 2,
        price: 170,
        stock: 100,
        priceMultiplier: 1.4,
        stockMultiplier: 1.1,
      },
      {
        unit: "pcs",
        unitSize: 3,
        price: 250,
        stock: 80,
        priceMultiplier: 1.3,
        stockMultiplier: 1.2,
      },
    ]
  );
  await seedProducts(
    hairAndSkinProducts,
    "Cosmetics & Personal Care",
    "Hair & Skin",
    imageUrlWithProductName,
    [
      {
        unit: "g",
        unitSize: 100,
        price: 60,
        stock: 80,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "g",
        unitSize: 150,
        price: 85,
        stock: 50,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "g",
        unitSize: 200,
        price: 110,
        stock: 60,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "g",
        unitSize: 50,
        price: 35,
        stock: 120,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "ml",
        unitSize: 6,
        price: 25,
        stock: 200,
        priceMultiplier: 2,
        stockMultiplier: 1,
      },
      {
        unit: "ml",
        unitSize: 8,
        price: 30,
        stock: 180,
        priceMultiplier: 2,
        stockMultiplier: 1,
      },
      {
        unit: "ml",
        unitSize: 10,
        price: 40,
        stock: 150,
        priceMultiplier: 2,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 1,
        price: 20,
        stock: 90,
        priceMultiplier: 2,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 2,
        price: 38,
        stock: 70,
        priceMultiplier: 2,
        stockMultiplier: 1,
      },
      {
        unit: "pcs",
        unitSize: 3,
        price: 55,
        stock: 60,
        priceMultiplier: 2,
        stockMultiplier: 1,
      },
    ]
  );
  await seedProducts(
    hairAndSkinProducts,
    "Cosmetics & Personal Care",
    "Nails",
    imageUrlWithProductName,
    [
      {
        unit: "ml",
        unitSize: 6,
        price: 59,
        stock: 100,
        priceMultiplier: 1.3,
        stockMultiplier: 1,
      },
      {
        unit: "ml",
        unitSize: 9,
        price: 85,
        stock: 80,
        priceMultiplier: 1.5,
        stockMultiplier: 1,
      },
      {
        unit: "ml",
        unitSize: 10,
        price: 99,
        stock: 120,
        priceMultiplier: 1.4,
        stockMultiplier: 1.2,
      },
      {
        unit: "ml",
        unitSize: 12,
        price: 129,
        stock: 60,
        priceMultiplier: 1.6,
        stockMultiplier: 0.8,
      },
      {
        unit: "ml",
        unitSize: 15,
        price: 149,
        stock: 75,
        priceMultiplier: 1.7,
        stockMultiplier: 1,
      },
    ]
  );
}

main()
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

/*
 Stationery Items
Notebooks & Covers
Writing Instruments (Pens, Pencils, Markers, Highlighters)
Accessories (Erasers, Sharpeners, Geometry Boxes, Pouches)
Office Supplies (Staplers, Correction Pens/Whiteners)
 

Cosmetics & Personal Care
Face Care (Face Creams, Massage Cream)
Eye Makeup (Kajal, Mascara)
Hair & Skin (Talcum Powder, Vermilion)
Nails (Nail Polish)
*/
