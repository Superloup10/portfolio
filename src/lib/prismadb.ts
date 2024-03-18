import {Prisma, PrismaClient} from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient({
    transactionOptions: {
        isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead
    }
});

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
