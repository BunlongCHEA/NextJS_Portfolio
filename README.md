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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Installation library

```bash
npm install @vercel/analytics
```
@vercel/analytics allows Vercel Web Analytics to automatically track page views and provide insights into your website's performance and traffic within your Vercel Dashboard. Note that analytics data is not tracked in development mode.

```bash
npm install @monaco-editor/react
```
@monaco-editor/react is the code editor that powers Visual Studio Code, into Next.js and other React applications with minimal configuration. It allows developers to easily embed a full-featured, in-browser code editor experience into their web applications. 

Remember to use the "use client" directive in your component file if you are using Next.js App Router, as @monaco-editor/react is a client-side component

```bash
npm install lucide-react
```
lucide-react is the icon library, specifically designed to provide high-quality, customizable, and optimized SVG icons as React components. In the context of Next.js, which is a React framework, this package offers a seamless way to integrate consistent and scalable vector icons into your application. 


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
