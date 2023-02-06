import { About, Vibe, HomePage } from "../components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nicholas Angelopoulos</title>
        <meta
          name="description"
          content="The portfolio site of Nicholas Angelopoulos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:mx-[20%] dark:text-gray-500">
        <div id="home" className="min-h-screen pt-16">
          <HomePage />
        </div>
        <div id="about" className="min-h-screen pt-16">
          <About />
        </div>
        <div id="vibecheck" className="min-h-screen pt-16">
          <Vibe />
        </div>
      </div>
    </>
  );
}
