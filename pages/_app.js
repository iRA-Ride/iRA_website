import "@/styles/globals.css";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>iRA-Ride</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
