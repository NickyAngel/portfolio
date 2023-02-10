import { AiFillLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";

export default function About() {
  const TOOLS = [
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "ChakraUI" },
    { name: "Tailwind" },
    { name: "Redux w/ thunks" },
    { name: "PostgreSQL" },
    { name: "Google Cloud Vision API" },
    { name: "and many more" },
  ];
  return (
    <div className="">
      <div className="">
        <img
          src="IMG_0899.jpg"
          className="float-right ml-5 hidden h-1/3 w-1/3 rounded-full md:flex"
        ></img>
        <div className="">
          <h1 className="z-0 animate-bounce text-5xl dark:text-sky-300">
            About
          </h1>
          <br />
          <p className="">
            I'm Nick. I started coding in college, I didn't stick with it then,
            but I returned to it a few years ago. I started by teaching myself
            JavaScript fundamentals. Eventually I joined Fullstack Academy's
            Software Engineering bootcamp where I learned full-stack web
            development using the PERN stack. These days I like to code with
            these tools:
            <div className="flex h-32 flex-col flex-wrap md:h-40">
              {TOOLS.map((tool) => (
                <li className="flex-auto pr-1">{tool.name}</li>
              ))}
            </div>
            <br />
            When I'm not behind the keyboard coding away I like to play board
            games, volleyball, racquetball, Dungeons and Dragons, and
            PlayStation with my friends. I am a leatherworker as well, making
            fine leather goods such as wallets and belts personalized for my
            customers.
          </p>
        </div>
        <div className=" flex flex-row py-2 text-xs md:justify-around md:text-lg">
          <a
            className="mx-2 rounded-full bg-sky-200 p-3 shadow-lg hover:bg-sky-400 dark:shadow-sky-500/30 md:mx-0"
            href="https://www.linkedin.com/in/nickyangel/"
            target="_blank"
          >
            Connect on LinkedIn <AiFillLinkedin className="mb-1 inline" />
          </a>
          <a
            className="hidden rounded-full bg-sky-200 p-3 shadow-lg hover:bg-sky-400 dark:shadow-sky-500/30 md:flex"
            href="https://github.com/NickyAngel"
            target="_blank"
          >
            Explore my Github <FiGithub className="mt-1" />
          </a>
          <a
            className="mx-2 rounded-full bg-sky-200 p-3 shadow-lg hover:bg-sky-400 dark:shadow-sky-500/30 md:mx-0"
            href="/resume.pdf"
            target="_blank"
          >
            Take a peek at my resume <ImNewspaper className="mb-1 inline" />
          </a>
        </div>
      </div>
    </div>
  );
}
