import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";



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
          })
      ]
})