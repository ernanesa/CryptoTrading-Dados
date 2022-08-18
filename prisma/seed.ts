import { prisma } from "../src/database/PrismaClient";
import { digitalCurrencies } from "./digitalCurrencies";

async function main() {
    for (let digitalCurrency of digitalCurrencies) {
        await prisma.digitalCurrency.create({
            data: digitalCurrency
        })
    }
}

main().catch (err => {
    console.error(err);
    process.exit(1);
}).finally(() => {
    prisma.$disconnect();
    process.exit(0);
});
