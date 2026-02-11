[YouTube: Next.js CRUD - Frontend Now 59m:48s](https://www.youtube.com/watch?v=HAuYoBpHNHc&t=0s)  
  
[left off here](https://www.youtube.com/watch?v=HAuYoBpHNHc&t=234s)  
  
3:54 / 59:48  
234s  

YouTube:  
Next.js CRUD Tutorial for Absolute Beginners (Full App in Minutes)  
- Frontend Now 59m:48s  
  
$ npx create-next-app@latest .  
  
? Would you like to use the recommended Next.js defaults?  
>     No, customize settings  
  
? Would you like to use TypeScript? No  
  
? Which linter would you like to use? None  
  
? Would you like to use React Compiler? No  
  
? Would you like to use Tailwind CSS? No  
  
? Would you like your code inside a `src/` directory? No  
  
? Would you like to use App Router? (recommended) Yes  
  
? Would you like to customize the import alias (`@/*` by default)? No  
  
$ git config user.name 'Daniel Alvarez'  
  
$ git config user.email 'daniel.yllanes@hotmail.com'  
  
$ git add .  
  
$ git commit -m 'initial commit'  
  
$ git push  
  
$ npm run dev  
  
From another computer connected to the same network:  
Enter into browser url bar:  
- Network: http://xxx.xxx.x.xxx:xxxx  
  
Cross origin request detected from xxx.xxx.x.xxx to /_next/* resource. In a  
future major version of Next.js, you will need to explicitly configure  
"allowedDevOrigins" in next.config to allow this.  
Read more:  
https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins  
  
rename app/page.js to page.jsx  
  
app/page.jsx:  
edit text in h1 to ensure hot module replacement is working across the 2 computers  
  
app/page.jsx:  
delete all content inside of <main></main>  
  
create a new folder:  
app/api  
  



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
