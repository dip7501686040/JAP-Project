const { PrismaClient } = require('@prisma/client')
const { products} = require('./data/products')

const prisma = new PrismaClient()

async function main() {
  await prisma.products.createMany({
    data: products
  })

  const allProducts = await prisma.products.findMany()
  console.log(allProducts)

}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })