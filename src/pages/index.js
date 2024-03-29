import Head from "next/head";
import Homepage from "../../components/Homepage/Homepage";
import NavBar from "../../components/NavBar/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Federica Costantino</title>
        <meta name="description" content="portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fedepixel.svg" />
      </Head>

      <main>
        <div className="container"></div>
        <NavBar />
        <Homepage />
      </main>
    </>
  );
}
