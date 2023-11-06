import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
// import { sql } from '@vercel/postgres';
import { z } from 'zod';
// import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { User } from './models/user';
import { loadPrincipal } from './lib/principalSupport';
 
async function getUser(username: string): Promise<User | undefined> {
  try {
    const user = await loadPrincipal(username);
    return user!;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log({credentials})
        const parsedCredentials = z
          .object({ username: z.string().min(8), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          console.log('Sono in credentials success')
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);
          if (!user) return null;
          //const passwordsMatch = await bcrypt.compare(password, user.password);
          //console.log({passwordsMatch})
          //if (passwordsMatch) 
          return user;
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});