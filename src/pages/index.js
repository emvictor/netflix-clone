import Head from "next/head";
import { Jumbotron, Footer, AccordionFaqs, Header } from "../containers";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <Header>
        <Jumbotron />
        <AccordionFaqs />
      </Header>
      <Jumbotron />
      <AccordionFaqs />
      <Footer />
    </>
  );
}
