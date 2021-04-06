import Link from "next/link";
import Head from "next/head";

import { Header } from "containers";

export default function Hello() {
  return (
    <>
      <Head>
        <title>Browse</title>
      </Head>
      <Header />
    </>
  );
}
