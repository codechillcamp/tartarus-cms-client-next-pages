import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
  ],
  pages: { signIn: '/auth/login' },
};
