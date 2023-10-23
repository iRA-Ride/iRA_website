import "@/styles/globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";
// import locatFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
// const myFont = locatFont({ src: ''})

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Head>
        <title>iRA-Ride</title>
      </Head>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </main>
  );
}
