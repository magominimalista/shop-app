# Shop App

A modern e-commerce application built with Next.js 14, featuring server components, Prisma ORM, and a sleek user interface powered by Shadcn/ui and Tailwind CSS.

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- Shadcn/ui
- Next Auth

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or pnpm
- PostgreSQL

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shop-app.git
cd shop-app
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Update the `.env` file with your database credentials and other required variables.

4. Set up Prisma:
```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

5. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Management with Prisma

### Common Prisma Commands

- View database in Prisma Studio:
```bash
npx prisma studio
```

- Create a new migration:
```bash
npx prisma migrate dev --name your_migration_name
```

- Reset database (caution: this will delete all data):
```bash
npx prisma migrate reset
```

- Update Prisma Client after schema changes:
```bash
npx prisma generate
```

## Project Structure

```
shop-app/
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # React components
│   ├── lib/            # Utility functions and configurations
│   └── styles/         # Global styles and Tailwind CSS
├── prisma/
│   ├── schema.prisma   # Database schema
│   └── migrations/     # Database migrations
└── public/            # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
