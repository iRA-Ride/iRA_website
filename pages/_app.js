import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#FBF0B2]">
      <Head>
        <title>iRA-Ride</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
