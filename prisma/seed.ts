import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Delete existing records
  await prisma.product.deleteMany({})

  const products = [
    {
      name: 'Classic White T-Shirt',
      description: 'A comfortable white t-shirt made from 100% cotton',
      price: 29.99,
      image: 'https://placehold.co/400x500/white/gray?text=White+T-Shirt',
      category: 'T-Shirts',
      size: 'M',
    },
    {
      name: 'Black Graphic T-Shirt',
      description: 'Cool graphic design t-shirt in black',
      price: 34.99,
      image: 'https://placehold.co/400x500/black/white?text=Black+T-Shirt',
      category: 'T-Shirts',
      size: 'L',
    },
    {
      name: 'Vintage Style T-Shirt',
      description: 'Retro design t-shirt with a worn look',
      price: 39.99,
      image: 'https://placehold.co/400x500/gray/white?text=Vintage+T-Shirt',
      category: 'T-Shirts',
      size: 'S',
    },
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product,
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
