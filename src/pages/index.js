import Jumbotron from "../components/jumbotron";
import jumboData from "../fixtures/jumbo";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <p>Hello</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </>
  );
}
