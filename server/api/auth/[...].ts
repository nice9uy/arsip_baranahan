import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
    // your authentication configuration here!
    callbacks: {
        /* on before signin */
        async signIn({ user, account, profile, email, credentials }) {
            return true
        },
        /* on redirect to another url */
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
        /* on session retrival */
        async session({ session, user, token }) {
            return session
        },
        /* on JWT token creation or mutation */
        async jwt({ token, user, account, profile, isNewUser }) {
            return token
        }
    }
})