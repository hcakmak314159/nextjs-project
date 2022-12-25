import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import  CredentialsProvider  from "next-auth/providers/credentials";
import axios from "axios";



export default NextAuth({
  
    providers: [
        //Google Provider
        GoogleProvider({
          clientId: "335395617702-9ap1rt1mtrmgnb94eqd5o1dj1npppjqt.apps.googleusercontent.com",
          clientSecret: "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"
        }),
        GithubProvider({
            clientId: "47a133eb2141c7705f11",
            clientSecret: "a4b8f59584ec4f640266431869247fc11ec0ca92"
          }),
        CredentialsProvider({
            id: 'credentials',
            name: 'my-project',
            credentials: {
              email: {
                label: 'email',
                type: 'email',
                placeholder: 'jsmith@example.com',
              },
              password: { label: 'Password', type: 'password' },
              tenantKey: {
                label: 'Tenant Key',
                type: 'text',
              },
            },
            async authorize(credentials, req) {
              const payload = {
                email: credentials.email,
                password: credentials.password,
              };
      
              const data = await fetch('https://assignment-api.piton.com.tr/api/v1/user/login', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                  'Content-Type': 'application/json',
                  tenant: credentials.tenantKey,
                  'Accept-Language': 'en-US',
                },
              });
      
              const session = await data.json();
              console.log(session)
              

              if (!data.ok) {
                console.log('girdi2')
                throw new Error(session.exception);
                
              }
              // If no error and we have user data, return it
              if (session['token'].length > 0) {
                
                return session;
                
              }
      
              // Return null if session data could not be retrieved
              return null;
            },
          }),
          
          
            
           
      ]
})