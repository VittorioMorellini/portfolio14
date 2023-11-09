import { DefaultSession } from 'next-auth'
import { JWT as JWTOriginal } from 'next-auth/jwt'

declare module "next-auth" {
    interface Session {
        user: {
            level: string,
            role: string,
            // eventualmente altri pezzi derivati dall'access_token
            // dipendentemente dal tipo di applicazione (tipo sx.pr, sx.uf, sx.co ecc)
        } & DefaultSession['user'],
        //accessToken: Record<string, any>,
        //idToken: string,
    }
}
declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT extends JWTOriginal {
        /** OpenID ID Token and Access Token */
        idToken?: string
        accessToken?: Record<string, any>
        accessTokenOriginal?: string
    }
}