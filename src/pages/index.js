import Head from "next/head";
import { Link } from "../components";
import { Jumbotron, Footer, AccordionFaqs } from "../containers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <Jumbotron />
      <AccordionFaqs />
      <Footer />
    </>
  );
}
