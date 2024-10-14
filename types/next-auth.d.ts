import { DefaultUser } from '@auth/core/types';
import { DefaultSession } from '@auth/core/types';
import { DefaultJWT } from 'next-auth/jwt';

declare module '@auth/core/types' {
  interface User extends DefaultUser {
    id: string;
    role: string;
  }
}

declare module '@auth/core/types' {
  interface Session extends DefaultSession {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    sub: string;
  }
}
