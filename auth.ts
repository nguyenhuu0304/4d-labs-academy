import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

// Discord's "identify" scope provides the user ID, username and avatar.
// Do not request guild or privileged scopes for this educational login.
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Discord({ issuer: "https://discord.com", authorization: { params: { scope: "identify" } } })],
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, account }) {
      if (account?.provider === "discord" && account.providerAccountId) {
        token.discordId = account.providerAccountId;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && typeof token.discordId === "string") {
        session.user.discordId = token.discordId;
      }
      return session;
    },
  },
});
