import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "../Server/auth";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET || "dev-secret-change-me",
  trustHost: true,
  session: {
    strategy: "jwt",
  },
  providers: [

    
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "user@example.com" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     const user = await loginUser(credentials);

    //     if (!user) return null;

    //     return {
    //       id: user._id?.toString?.() || user.id,
    //       name: user.name,
    //       email: user.email,
    //       role: user.role,
    //     };
    //   },
    // }),


    CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: {
      label: "Email",
      type: "text",
      placeholder: "user@example.com",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },

  async authorize(credentials) {
    try {
      const user = await loginUser(credentials);

      if (!user) return null;

      return {
        id: user._id?.toString?.() || user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
    } catch (err) {
      console.error("Authorize Error:", err);
      return null;
    }
  },
}),


  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};