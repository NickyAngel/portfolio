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
    <div className="justify ml-10 flex ">
      <div className="flex justify-between">
        <div className="mr-5 md:mr-0 md:w-[200%]">
          <h1 className="z-0 animate-bounce text-5xl dark:text-sky-300">
            About
          </h1>
          <br />
          <p className="pr-4">
            I'm Nick. I started coding in college, I didn't stick with it then,
            but I returned to it a few years ago. I started by teaching myself
            JavaScript fundamentals. Eventually I joined Fullstack Academy's
            Software Engineering bootcamp. While there I learned full-stack web
            development using the PERN stack. These days I like to code with
            these tools:
            <div className="flex h-32 md:h-40 flex-col flex-wrap">
              {TOOLS.map((tool) => (
                <li className="flex-auto pr-1">{tool.name}</li>
              ))}
            </div>
            <br />
            <br />
            When I'm not behind the keyboard coding away I like to play board
            games, volleyball, racquetball, Dungeons and Dragons, and
            PlayStation with my friends.
            <br />
            <br />I Lorem ipsum I'm baby palo santo photo booth cred kombucha,
            XOXO actually seitan forage wayfarers leggings pinterest. Pinterest
            food truck meggings crucifix, literally fam migas cornhole wolf. You
            probably haven't heard of them vape farm-to-table taxidermy. Squid
            austin kale chips bespoke gentrify, gluten-free Brooklyn hell of
            aesthetic unicorn poke. Yuccie tacos coloring book listicle. Venmo
            raw denim cold-pressed taiyaki farm-to-table organic, viral
            knausgaard sus slow-carb leggings tonx selfies.
          </p>
        </div>
        <div>
          <img src="IMG_0899.jpg" className="hidden rounded-full md:flex"></img>
        </div>
      </div>
    </div>
  );
}
//About include links to linkedin github and resume(on mobile)
