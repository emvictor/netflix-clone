import Head from "next/head";
import { Jumbotron, Footer } from "../containers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <Jumbotron />
      <Footer />
    </>
  );
}
