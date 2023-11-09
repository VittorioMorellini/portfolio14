import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  providers: [],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
        console.log({auth})
        console.log({nextUrl})
        console.log('pathname nexturl',nextUrl.pathname)
        const isLoggedIn = !!auth?.user;
        const isOnFeatures = nextUrl.pathname.startsWith('/features');
        console.log({isLoggedIn})
        console.log({isOnFeatures})
        if (isOnFeatures) {
            if (isLoggedIn) return true;
            return false; // Redirect unauthenticated users to login page
        } else if (isLoggedIn) {
            return Response.redirect(new URL('/features', nextUrl));
        }
        console.log('Sono in ultimo return true')
        return true;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (session.user && token.accessToken) {
          const at = token.accessToken
          session.user.name = user?.name
          //session.user.level = at["sx.lv"]
          //session.user.role = at["role"]
      }
      return session
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
          const accessToken = account.access_token as string
          // console.log('access_token', accessToken)
          if (accessToken) {
              const tokenParsed = JSON.parse(Buffer.from(accessToken.split('.')[1], 'base64').toString());
              // console.log('jwt-callback:accessToken: ', JSON.stringify(tokenParsed, null, 2))
              token.accessToken = tokenParsed
              token.idToken = account.id_token
              token.email = tokenParsed.email
              token.accessTokenOriginal = accessToken
          }
      }
      return token
    }
},
} satisfies NextAuthConfig;