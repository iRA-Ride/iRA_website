import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
        <title>iRA-Ride</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
