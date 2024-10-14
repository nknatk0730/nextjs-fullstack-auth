import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signinSchema } from "./lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "Password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        let user = null;

        // validate credentials
        const parsedCredentials = signinSchema.safeParse(credentials);
        if (!parsedCredentials.success) {
          console.log("Invalid credentials", parsedCredentials.error.errors);
          return null;
        }

        // get user

        user = {
          id: '1',
          name: 'Remixer',
          email: 'test@test.com',
          role: 'user',
        }

        if (!user) {
          console.log("Invalid credentials");
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    authorized({ request, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = request.nextUrl;

      if (pathname.startsWith('/auth/signin') && isLoggedIn) {
        return Response.redirect(new URL('/', request.nextUrl));
      }
      return !!auth;
    },
    session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role as string;
      return session;
    },
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.sub = user.id as string;
        token.role = user.role;
      }

      if (trigger === 'update' && session) {
        token = { ...token, ...session };
      }
      return token;
    },
  }
});