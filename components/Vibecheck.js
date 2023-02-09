import { FiGithub } from "react-icons/fi";

export default function Vibe() {
  return (
    <div className="">
      <div className=" mx-5  flex flex-col pt-3 md:ml-10">
        <h1 className="text-4xl">vibe check</h1>
        <h2 className="text-2xl">a micro journaling app</h2>
      </div>
      <div className="mx-5 flex pt-5 md:mx-10">
        <div className="min-w-full">
          <div>
            <h3 className="text-xl">check out the video demo here!</h3>
          </div>
          <div className="flex justify-center">
            <iframe
              className="aspect-video w-full  rounded-3xl"
              src="https://www.youtube.com/embed/ZkAHRSJC-rw"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-row justify-around py-2 text-xs md:text-lg">
            <a
              className="rounded-full bg-sky-200 p-3 shadow-lg hover:bg-sky-400 dark:shadow-sky-500/30"
              href="https://vibe-check.onrender.com/"
              target="_blank"
            >
              Check out vibe check &#10004;
            </a>
            <a
              className="rounded-full bg-sky-200 p-3 shadow-lg hover:bg-sky-400 dark:shadow-sky-500/30"
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
