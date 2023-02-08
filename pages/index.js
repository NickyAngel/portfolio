import { About, Vibe, HomePage } from "../components";
import Head from "next/head";

export default function Home() {
  const DIVLIST = [
    { component: <HomePage />, id: "home" },
    { component: <About />, id: "about" },
    { component: <Vibe />, id: "vibecheck" },
  ];
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
      <div className="dark:text-gray-500 md:mx-[15%]">
        {DIVLIST.map((obj) => {
          return (
            <div
              id={obj.id}
              className={
                obj.id === "vibecheck"
                  ? "pt-16 pb-10"
                  : "min-h-[80vh] border-b-2 border-b-gray-400 py-16"
              }
            >
              {obj.component}
            </div>
          );
        })}
      </div>
    </>
  );
}
