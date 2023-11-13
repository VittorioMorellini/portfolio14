import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { GithubProfile } from 'next-auth/providers/github'
import { loadPrincipal } from '@/lib/principalSupport';
import { z } from 'zod';
import { User } from '@/models/user';
import bcrypt from 'bcrypt';

async function getUser(username: string): Promise<User | undefined> {
    try {
      const user = await loadPrincipal(username);
      return user!;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
}

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            profile(profile: GithubProfile) {
                console.log('github profile', profile)

                let userRole = "Github User"
                if (profile?.email === "vmorellini70@gmail.com"){
                    userRole = "admin"
                }
                return {
                    ...profile,
                    role: profile.role ?? "user",
                    id: profile.id.toString(),
                    image: profile.avatar_url,
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            profile(profile: GoogleProfile) {
                console.log('google profile', profile)

                let userRole = "Github User"
                if (profile?.email === "vmorellini70@gmail.com"){
                    userRole = "admin"
                }
                return {
                    ...profile,
                    role: userRole,
                    id: profile.sub,
                    //image: profile.avatar_url,
                }
            },
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials, req) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                //const user = { id: "42", name: "Dave", password: "nextauth", role: "manager" }
                console.log('I am in authorize')
                console.log({credentials})
                const parsedCredentials = z
                  .object({ username: z.string().min(8), password: z.string().min(6) })
                  .safeParse(credentials);
         
                if (parsedCredentials.success) {
                  console.log('Sono in credentials success')
                  const { username, password } = parsedCredentials.data;
                  console.log('password: ', password)
                  const user = await getUser(username);
                  console.log({user})
                  if (!user) return null;
                  const passwordsMatch = await bcrypt.compare(password, user.password);
                  console.log({passwordsMatch})
                  if (password === user.password /*passwordsMatch*/) return user;
                }
         
                console.log('Invalid credentials');
                return null;                
            }
        })
    ],
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user) token.role = user?.name === "siamorellini" ? "admin" : "user"
            return token
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role as string
            return session
        },
    }
}