import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Delete existing products
  await prisma.product.deleteMany();

  const products = [
    {
      name: "Cyberpunk LED Jacket",
      description: "Illuminated jacket with customizable LED patterns and smartphone connectivity. Perfect for night events and futuristic fashion statements.",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=2073&auto=format&fit=crop",
      category: "Outerwear",
      size: "M"
    },
    {
      name: "Smart Cargo Pants",
      description: "Tactical cargo pants with built-in heating elements and multiple tech-ready pockets. Water-resistant and durable.",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop",
      category: "Pants",
      size: "L"
    },
    {
      name: "Holographic Sneakers",
      description: "Color-shifting holographic sneakers with reactive soles that light up with each step. Wireless charging included.",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
      category: "Footwear",
      size: "42"
    },
    {
      name: "Neo Tokyo Hoodie",
      description: "Oversized hoodie with Japanese cyberpunk aesthetics. Features augmented reality-ready patterns and thermal regulation.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
      category: "Tops",
      size: "XL"
    },
    {
      name: "Digital Camo Vest",
      description: "Tactical vest with digital camouflage pattern and modular attachment system. Perfect for urban exploration.",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      category: "Outerwear",
      size: "M"
    },
    {
      name: "Quantum Mesh Shirt",
      description: "Breathable mesh shirt with quantum dot technology for temperature regulation and sweat management.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1974&auto=format&fit=crop",
      category: "Tops",
      size: "S"
    },
    {
      name: "Stealth Combat Boots",
      description: "Matte black combat boots with noise-dampening soles and hidden compartments. Water-resistant and durable.",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?q=80&w=2070&auto=format&fit=crop",
      category: "Footwear",
      size: "43"
    },
    {
      name: "Cyber Punk Gloves",
      description: "Touchscreen-compatible gloves with LED accents and reinforced knuckles. Perfect for digital warriors.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1589476993333-f55b84301219?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "M"
    },
    {
      name: "Matrix Trench Coat",
      description: "Long black trench coat with subtle tech patterns and hidden pockets. Water-resistant and dramatic.",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1974&auto=format&fit=crop",
      category: "Outerwear",
      size: "L"
    },
    {
      name: "Neon Pulse Backpack",
      description: "Weatherproof backpack with customizable LED trim and solar charging panel. Multiple tech-ready compartments.",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Tech Ninja Mask",
      description: "Advanced filtration mask with voice modulation and LED indicators. Cyberpunk aesthetic meets functionality.",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1614274300320-f8d5002d5a09?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Synthetic Cargo Shorts",
      description: "Technical cargo shorts with water-repellent coating and multiple secure pockets. Perfect for urban missions.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1565839751462-da0d2b00edd5?q=80&w=1974&auto=format&fit=crop",
      category: "Pants",
      size: "M"
    },
    {
      name: "Data Stream Tank Top",
      description: "Sleeveless top with binary code pattern and moisture-wicking technology. Ideal for cyber athletes.",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1974&auto=format&fit=crop",
      category: "Tops",
      size: "M"
    },
    {
      name: "Augmented Vision Sunglasses",
      description: "Futuristic sunglasses with UV protection and subtle LED accents. Cyberpunk style meets practical protection.",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Stealth Bomber Jacket",
      description: "Lightweight bomber jacket with reflective details and hidden tech pockets. Perfect for night operations.",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1974&auto=format&fit=crop",
      category: "Outerwear",
      size: "L"
    },
    {
      name: "Circuit Board Leggings",
      description: "High-performance leggings with circuit board print and compression technology. Built for cyber runners.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1974&auto=format&fit=crop",
      category: "Pants",
      size: "S"
    },
    {
      name: "Quantum Phase Belt",
      description: "Tactical belt with LED buckle display and hidden compartments. Essential gear for tech enthusiasts.",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Neural Link Beanie",
      description: "Smart beanie with built-in wireless audio and subtle LED indicators. Warm and tech-savvy.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Cyber Punk Platform Boots",
      description: "Elevated platform boots with LED soles and reinforced construction. Stand out in the digital age.",
      price: 219.99,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1980&auto=format&fit=crop",
      category: "Footwear",
      size: "41"
    },
    {
      name: "Digital Nomad Jacket",
      description: "Versatile jacket with 10 tech-ready pockets and weather-adaptive fabric. Perfect for digital nomads.",
      price: 229.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      category: "Outerwear",
      size: "XL"
    }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }

  console.log('Database has been seeded. 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
