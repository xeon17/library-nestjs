// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles

  await prisma.author.upsert({
    where: { name: 'Harper Lee' },
    update: {},
    create: {
      name: 'Harper Lee',
      biography: 'Test biography',
    },
  });

  await prisma.author.upsert({
    where: { name: 'Dan Brown' },
    update: {},
    create: {
      name: 'Dan Brown',
      biography: 'Test biography',
    },
  });

  await prisma.author.upsert({
    where: { name: 'Yuval Noah Harari' },
    update: {},
    create: {
      name: 'Yuval Noah Harari',
      biography: 'Test biography',
    },
  });

  await prisma.author.upsert({
    where: { name: 'Paulo Coelho' },
    update: {},
    create: {
      name: 'Paulo Coelho',
      biography: 'Test biography',
    },
  });

  await prisma.author.upsert({
    where: { name: 'Michelle Obama' },
    update: {},
    create: {
      name: 'Michelle Obama',
      biography: 'Test biography',
    },
  });

  await prisma.category.upsert({
    where: { name: 'Classic Literature' },
    update: {},
    create: {
      name: 'Classic Literature',
    },
  });

  await prisma.category.upsert({
    where: { name: 'Suspense' },
    update: {},
    create: {
      name: 'Suspense',
    },
  });

  await prisma.category.upsert({
    where: { name: 'Anthropology' },
    update: {},
    create: {
      name: 'Anthropology',
    },
  });

  await prisma.category.upsert({
    where: { name: 'Philosophy' },
    update: {},
    create: {
      name: 'Philosophy',
    },
  });

  await prisma.category.upsert({
    where: { name: 'Biography' },
    update: {},
    create: {
      name: 'Biography',
    },
  });

  await prisma.format.upsert({
    where: { name: 'A4' },
    update: {},
    create: {
      name: 'A4',
    },
  });

  await prisma.format.upsert({
    where: { name: 'A3' },
    update: {},
    create: {
      name: 'A3',
    },
  });

  await prisma.genre.upsert({
    where: { name: 'Fiction' },
    update: {},
    create: {
      name: 'Fiction',
    },
  });

  await prisma.genre.upsert({
    where: { name: 'Mystery' },
    update: {},
    create: {
      name: 'Mystery',
    },
  });

  await prisma.genre.upsert({
    where: { name: 'Science Fiction' },
    update: {},
    create: {
      name: 'Science Fiction',
    },
  });

  await prisma.genre.upsert({
    where: { name: 'Fantasy' },
    update: {},
    create: {
      name: 'Fantasy',
    },
  });

  await prisma.genre.upsert({
    where: { name: 'Romance' },
    update: {},
    create: {
      name: 'Romance',
    },
  });

  await prisma.genre.upsert({
    where: { name: 'History' },
    update: {},
    create: {
      name: 'History',
    },
  });

  await prisma.genre.upsert({
    where: { name: 'Memoir' },
    update: {},
    create: {
      name: 'Memoir',
    },
  });

  await prisma.language.upsert({
    where: { name: 'English' },
    update: {},
    create: {
      name: 'English',
    },
  });

  await prisma.language.upsert({
    where: { name: 'Crnogorski' },
    update: {},
    create: {
      name: 'Crnogorski',
    },
  });

  await prisma.letter.upsert({
    where: { name: 'Latin' },
    update: {},
    create: {
      name: 'Latin',
    },
  });

  await prisma.letter.upsert({
    where: { name: 'Cyclic' },
    update: {},
    create: {
      name: 'Cyclic',
    },
  });

  await prisma.publisher.upsert({
    where: { name: 'HarperCollins Publishers' },
    update: {},
    create: {
      name: 'HarperCollins Publishers',
    },
  });

  await prisma.publisher.upsert({
    where: { name: 'Doubleday' },
    update: {},
    create: {
      name: 'Doubleday',
    },
  });

  await prisma.publisher.upsert({
    where: { name: 'Harper' },
    update: {},
    create: {
      name: 'Harper',
    },
  });

  await prisma.publisher.upsert({
    where: { name: 'Harvill Secker' },
    update: {},
    create: {
      name: 'Harvill Secker',
    },
  });

  await prisma.publisher.upsert({
    where: { name: 'Transworld Publishers' },
    update: {},
    create: {
      name: 'Transworld Publishers',
    },
  });

  await prisma.publisher.upsert({
    where: { name: 'HarperOne' },
    update: {},
    create: {
      name: 'HarperOne',
    },
  });

  await prisma.publisher.upsert({
    where: { name: 'Crown Publishing Group' },
    update: {},
    create: {
      name: 'Crown Publishing Group',
    },
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
