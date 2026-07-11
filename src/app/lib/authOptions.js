import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "../Server/auth";
export const authOptions = {
  
  providers: [

CredentialsProvider({
    
    name: 'Credentials',
    credentials: {
      email: { label: "Email", type: "text", placeholder: "user@example.com" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      
      const user = await loginUser(credentials);
      return user;
    }
  })



  ],
}