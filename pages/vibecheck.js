import { FiGithub } from "react-icons/fi";

export default function About() {
  return (
    <div className="dark:text-gray-500">
      <div className="mx-[15%] flex flex-col pt-3">
        <h1 className="text-4xl">vibe check</h1>
        <h2 className="text-2xl">a micro journaling app</h2>
      </div>
      <div className="flex justify-center pt-5 md:mx-[15%]">
        <div className="min-w-full">
          <div>
            <h3 className="text-xl">check out the video demo here!</h3>
          </div>
          <div className="">
            <iframe
              class="aspect-video w-full rounded-3xl"
              src="https://www.youtube.com/embed/ZkAHRSJC-rw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex flex-row justify-around py-2">
            <a
              className="rounded-full bg-cyan-100 p-3 shadow-lg hover:bg-cyan-400 dark:shadow-cyan-500/30"
              href="https://vibe-check.onrender.com/"
              target="_blank"
            >
              Check out vibe check &#10004;
            </a>
            <a
              className="rounded-full bg-cyan-100 p-3 shadow-lg hover:bg-cyan-400 dark:shadow-cyan-500/30"
              href="https://github.com/2206-fsa-best-team/VibeCheck"
              target="_blank"
            >
              Check out the Github <FiGithub className="inline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
