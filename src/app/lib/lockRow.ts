import { Prisma } from "@prisma/client";

export const lockRowForUpdate = async (
  tx: Prisma.TransactionClient,
  id: string,
  tableName: string
) => {
  await tx.$queryRawUnsafe(`
          SELECT * FROM ${tableName}
          WHERE id = ${id}
          FOR UPDATE
        `);
};

export const lockRowForDelete = async (
  tx: Prisma.TransactionClient,
  id: string,
  tableName: string
) => {
  await tx.$queryRawUnsafe(`
          SELECT * FROM ${tableName}
          WHERE id = ${id}
          FOR DELETE
        `);
};
