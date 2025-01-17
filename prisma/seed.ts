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
      additionalImages: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=2073&auto=format&fit=crop,https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=2073&auto=format&fit=crop",
      category: "Outerwear",
      size: "M"
    },
    {
      name: "Smart Cargo Pants",
      description: "Tactical cargo pants with built-in heating elements and multiple tech-ready pockets. Water-resistant and durable.",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974&auto=format&fit=crop",
      category: "Pants",
      size: "L"
    },
    {
      name: "Holographic Sneakers",
      description: "Color-shifting holographic sneakers with reactive soles that light up with each step. Wireless charging included.",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop",
      category: "Footwear",
      size: "42"
    },
    {
      name: "Neo Tokyo Hoodie",
      description: "Oversized hoodie with Japanese cyberpunk aesthetics. Features augmented reality-ready patterns and thermal regulation.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974&auto=format&fit=crop",
      category: "Tops",
      size: "XL"
    },
    {
      name: "Digital Camo Vest",
      description: "Tactical vest with digital camouflage pattern and modular attachment system. Perfect for urban exploration.",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop,https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      category: "Outerwear",
      size: "M"
    },
    {
      name: "Quantum Mesh Shirt",
      description: "Breathable mesh shirt with quantum dot technology for temperature regulation and sweat management.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1974&auto=format&fit=crop",
      category: "Tops",
      size: "S"
    },
    {
      name: "Stealth Combat Boots",
      description: "Matte black combat boots with noise-dampening soles and hidden compartments. Water-resistant and durable.",
      price: 179.99,
      image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?q=80&w=2070&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?q=80&w=2070&auto=format&fit=crop,https://images.unsplash.com/photo-1542280756-74b2f55e73ab?q=80&w=2070&auto=format&fit=crop",
      category: "Footwear",
      size: "43"
    },
    {
      name: "Cyber Punk Gloves",
      description: "Touchscreen-compatible gloves with LED accents and reinforced knuckles. Perfect for digital warriors.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1589476993333-f55b84301219?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1589476993333-f55b84301219?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1589476993333-f55b84301219?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "M"
    },
    {
      name: "Matrix Trench Coat",
      description: "Long black trench coat with subtle tech patterns and hidden pockets. Water-resistant and dramatic.",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=1974&auto=format&fit=crop",
      category: "Outerwear",
      size: "L"
    },
    {
      name: "Neon Pulse Backpack",
      description: "Weatherproof backpack with customizable LED trim and solar charging panel. Multiple tech-ready compartments.",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Data Stream Tank Top",
      description: "Sleeveless top with binary code pattern and moisture-wicking technology. Ideal for cyber athletes.",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1974&auto=format&fit=crop",
      category: "Tops",
      size: "M"
    },
    {
      name: "Augmented Vision Sunglasses",
      description: "Futuristic sunglasses with UV protection and subtle LED accents. Cyberpunk style meets practical protection.",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Stealth Bomber Jacket",
      description: "Lightweight bomber jacket with reflective details and hidden tech pockets. Perfect for night operations.",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1974&auto=format&fit=crop",
      category: "Outerwear",
      size: "L"
    },
    {
      name: "Circuit Board Leggings",
      description: "High-performance leggings with circuit board print and compression technology. Built for cyber runners.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1974&auto=format&fit=crop",
      category: "Pants",
      size: "S"
    },
    {
      name: "Quantum Phase Belt",
      description: "Tactical belt with LED buckle display and hidden compartments. Essential gear for tech enthusiasts.",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Neural Link Beanie",
      description: "Smart beanie with built-in wireless audio and subtle LED indicators. Warm and tech-savvy.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Cyber Punk Platform Boots",
      description: "Elevated platform boots with LED soles and reinforced construction. Stand out in the digital age.",
      price: 219.99,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1980&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1980&auto=format&fit=crop,https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1980&auto=format&fit=crop",
      category: "Footwear",
      size: "41"
    },
    {
      name: "Digital Nomad Jacket",
      description: "Versatile jacket with 10 tech-ready pockets and weather-adaptive fabric. Perfect for digital nomads.",
      price: 229.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop,https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      category: "Outerwear",
      size: "XL"
    },
    {
      name: "Holographic Visor",
      description: "Transparent display visor with augmented reality overlay and customizable HUD elements.",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Nano-Tech Running Shoes",
      description: "Self-adapting running shoes with reactive cushioning and LED pulse indicators.",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop",
      category: "Footwear",
      size: "42"
    },
    {
      name: "Cyber Monk Hoodie",
      description: "Minimalist hoodie with hidden tech pockets and sound-reactive LED trim.",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1974&auto=format&fit=crop",
      category: "Tops",
      size: "L"
    },
    {
      name: "Tech-Weave Scarf",
      description: "Smart fabric scarf with built-in air filtration and temperature regulation.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Plasma Pulse Watch",
      description: "Advanced timepiece with holographic display and biometric tracking.",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Urban Stealth Pants",
      description: "Adaptive camouflage pants with climate control and modular attachments.",
      price: 169.99,
      image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1974&auto=format&fit=crop",
      category: "Pants",
      size: "M"
    },
    {
      name: "Quantum Fiber Socks",
      description: "Smart socks with pressure mapping and temperature regulation.",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "M"
    },
    {
      name: "Tech-Enhanced Arm Sleeves",
      description: "Compression sleeves with muscle performance tracking and LED indicators.",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1562183241-840b8af0721e?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1562183241-840b8af0721e?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1562183241-840b8af0721e?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "M"
    },
    {
      name: "Digital Camo Jumpsuit",
      description: "Full-body jumpsuit with adaptive camouflage and environmental sensors.",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1974&auto=format&fit=crop",
      category: "Outerwear",
      size: "M"
    },
    {
      name: "Neon Pulse Wristbands",
      description: "Smart wristbands with customizable lighting and gesture controls.",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1533681475364-326b6803d677?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1533681475364-326b6803d677?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1533681475364-326b6803d677?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
    },
    {
      name: "Cyber Tactical Belt",
      description: "Multi-tool belt with modular attachments and power distribution system.",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1974&auto=format&fit=crop",
      additionalImages: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1974&auto=format&fit=crop,https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=1974&auto=format&fit=crop",
      category: "Accessories",
      size: "One Size"
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
