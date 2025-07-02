const { PrismaClient, OrderStatus } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Roles
  // Create roles, with "user" as default
  await Promise.all([
    prisma.role.create({ data: { name: "admin" } }),
    prisma.role.create({ data: { name: "delivery_agent" } }),
    prisma.role.create({ data: { name: "user" } }),
  ]);

  const userRole = await prisma.role.findUnique({
    where: { name: "user" },
  });
  // User with address
  const user = await prisma.user.create({
    data: {
      name: "Ravi Sharma",
      email: "ravi@example.com",
      password: "hashed_password", // Replace with a real hashed password
      profileImage: "https://example.com/profile.jpg",
      emailVerified: null,
      roleId: userRole.id,
      Address: {
        create: {
          street: "21 MG Road",
          city: "Pune",
          state: "Maharashtra",
          country: "India",
          zipCode: "411001",
        },
      },
    },
    include: { Address: true },
  });

  // Categories
  const [fruits, vegetables, dairy] = await Promise.all([
    prisma.category.create({ data: { name: "Fruits" } }),
    prisma.category.create({ data: { name: "Vegetables" } }),
    prisma.category.create({ data: { name: "Dairy" } }),
  ]);

  // Products
  const [apple, banana, milk] = await Promise.all([
    prisma.product.create({
      data: {
        name: "Apple (1kg)",
        description: "Fresh Himachal apples",
        price: 120,
        stock: 50,
        images: [
          "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80",
        ],
        categoryId: fruits.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Banana (1 dozen)",
        description: "Organic bananas",
        price: 60,
        stock: 100,
        images: [
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?fm=jpg&ixlib=rb-4.0.3&q=60&w=3000",
        ],
        categoryId: fruits.id,
      },
    }),
    prisma.product.create({
      data: {
        name: "Amul Milk (1L)",
        description: "Full cream milk",
        price: 52,
        stock: 200,
        images: [
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAiOdVKDUZZEqVGKJFcKC9SD0S7F2S_lSYzFew_y8_0eVKowP5WpYq_1CDexJYhcywplu4MsVHzh5oR-lXjhNmMy6n9JdV7S8djr1IyW4DijUmQw6ZXJAViA",
        ],
        categoryId: dairy.id,
      },
    }),
  ]);

  // Create Order with OrderItems
  const order = await prisma.order.create({
    data: {
      userId: user.id,
      addressId: user.Address[0].id,
      total: 232, // 120 + 60 + 52
      status: OrderStatus.PENDING,
      items: {
        create: [
          {
            productId: apple.id,
            quantity: 1,
            price: 120,
          },
          {
            productId: banana.id,
            quantity: 1,
            price: 60,
          },
          {
            productId: milk.id,
            quantity: 1,
            price: 52,
          },
        ],
      },
    },
  });

  console.log("✅ Seed data inserted successfully!");
}

main()
  .catch((err) => {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
