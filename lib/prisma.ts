// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

prisma = new PrismaClient();
if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
  //prisma = new PrismaClient();
}

export default prisma;