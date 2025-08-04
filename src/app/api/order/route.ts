import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { validateRequest } from "../../lib/validateRequest";
import { productOrderSchema } from "../products/productOrderSchema";
import { placeOrderController } from "@/app/controller/orderController";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userId = "7c19addf-e5e5-4b96-a57c-567df8b6cf99";

    if (!userId) {
      return NextResponse.json(
        { message: "userId is missing" },
        { status: 400 }
      );
    }

    const body = await request.json();

    const {
      products,
      street,
      city,
      country,
      zipCode,
      state,
      addrees,
      landmark,
      flatno,
      paymentMethod,
    } = body;

    const validation = await validateRequest(body, productOrderSchema);

    if (!validation.success) {
      return NextResponse.json({ errors: validation.error }, { status: 400 });
    }

    if (!products || products.length === 0) {
      return NextResponse.json(
        { message: "No products provided" },
        { status: 400 }
      );
    }

    const bodyData = {
      products,
      street,
      city,
      country,
      zipCode,
      state,
    };

    const placeOrder = await placeOrderController(bodyData, userId);

    console.log("placeOrder", placeOrder);

    return NextResponse.json({
      placeOrder,
    });
  } catch (error: any) {
    console.error("Internal server error", error);
    return NextResponse.json(
      {
        message: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

// import { authOptions } from "@/lib/authOptions";
// import { prisma } from "@/lib/prisma";
// import { getServerSession } from "next-auth";
// import { NextResponse } from "next/server";
// import { validateRequest } from "../lib/validateRequest";
// import { createAddressRecord } from "@/app/services/addressService";
// import { createOrderRecord } from "@/app/services/OrdersService";
// import { createOrderItemsRecord } from "@/app/services/OrderItemsService";
// import { updatedProductVariant } from "@/app/services/ProductsService";
// import { productOrderSchema } from "../products/productOrderSchema";
// import { getUserById } from "@/app/services/userService";

// export async function POST(request: Request) {
//   try {
//     const session = await getServerSession(authOptions);
//     const userId = session?.user.id;

//     if (!userId) {
//       return NextResponse.json(
//         { message: "userId is missing" },
//         { status: 400 }
//       );
//     }

//     const body = await request.json();

//     const { products, street, city, country, zipCode, state } = body;

//     const validation = await validateRequest(body, productOrderSchema);

//     if (!validation.success) {
//       return NextResponse.json({ errors: validation.error }, { status: 400 });
//     }

//     if (!products || products.length === 0) {
//       return NextResponse.json(
//         { message: "No products provided" },
//         { status: 400 }
//       );
//     }

//     const user = await getUserById(userId);

//     const adressObj = {
//       userId: user.id,
//       street,
//       city,
//       country,
//       zipCode,
//       state,
//     };

//     const userAdress = await createAddressRecord(adressObj);
//     console.log("userAdress", userAdress);

//     let total = 0;
//     const orderItemsData = [];

//     for (const item of products) {
//       const variant = await prisma.productVariant.findUnique({
//         where: { id: item.productVariantId },
//       });

//       if (!variant) {
//         return NextResponse.json(
//           {
//             message: `invalid variant for variant ID: ${item.productVariantId}`,
//           },
//           { status: 400 }
//         );
//       }

//       if (variant && variant.stock < item.quantity) {
//         return NextResponse.json(
//           {
//             message: `Insufficient stock`,
//           },
//           { status: 400 }
//         );
//       }
//       total += variant.price * item.quantity;

//       orderItemsData.push({
//         productId: item.productId,
//         quantity: item.quantity,
//         price: variant.price,
//         productVariantId: item.productVariantId,
//       });
//     }

//     const orderObj = {
//       userId,
//       addressId: userAdress.id,
//       total,
//       status: "PENDING",
//     };

//     const order = await createOrderRecord(orderObj);
//     console.log("order", order);

//     const orderItemPromises = orderItemsData.map(async (item) => {
//       const orderItemObj = {
//         orderId: order.id,
//         productId: item.productId,
//         productVariantId: item.productVariantId,
//         quantity: item.quantity,
//         price: item.price,
//       };

//       const orderItems = await createOrderItemsRecord(orderItemObj);
//       console.log("orderItems", orderItems);

//       const updatedProduct = await updatedProductVariant(
//         item.productVariantId,
//         item.quantity
//       );
//       console.log("updatedProduct", updatedProduct);
//     });

//     await Promise.all(orderItemPromises);

//     // console.log("updatedProduct", updatedProduct);

//     return NextResponse.json({
//       message: "order placed successfully",
//     });
//   } catch (error: any) {
//     console.error("Internal server error", error);
//     return NextResponse.json(
//       {
//         message: error.message || "Internal Server Error",
//       },
//       { status: 500 }
//     );
//   }
// }
