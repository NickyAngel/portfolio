import { useState } from "react";
import { GiLetterBomb } from "react-icons/gi";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [button, setButton] = useState("Send message!");
  const [errorMsg, setErrorMsg] = useState("");

  const handleValid = () => {
    let isValid = true;
    if (name.length <= 0) {
      isValid = false;
    }
    if (email.length <= 0) {
      isValid = false;
    }
    if (subject.length <= 0) {
      isValid = false;
    }
    if (content.length <= 0) {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (evt) => {
    setErrorMsg("");
    evt.preventDefault();
    let isFormValid = handleValid();
    if (isFormValid) {
      setButton("sending");
      try {
        const res = await axios.post("/api/sendgrid", {
          email,
          name,
          subject,
          message: content,
        });
      } catch (e) {
        setButton("Send message!");
        setErrorMsg(e.message);
        return;
      }
      alert("Message sent!");
      setButton("Send message!");
    } else {
      alert("all form fields are required");
    }
    return;
  };

  return (
    <div>
      <h1 className="z-0 text-5xl dark:text-sky-300">Contact Me!</h1>
      <p className="flex pt-5">
        Reach out if you want to work together, you want to say hello, or maybe
        just for fun!
        <span className="ml-2 flex text-xs italic text-red-400">
          all fields are required
        </span>
      </p>
      <form className="flex flex-wrap pt-5" onSubmit={handleSubmit}>
        <label htmlFor="name" className="">
          Your name
        </label>
        <input
          type="text"
          value={name}
          onChange={(evt) => {
            setName(evt.target.value);
          }}
          name="name"
          className=""
        />
        <label htmlFor="email" className="">
          Your email
        </label>
        <input
          type="text"
          value={email}
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          name="email"
          className=""
        />
        <label htmlFor="subject" className="">
          Subject
        </label>
        <input
          type="text"
          value={subject}
          onChange={(evt) => {
            setSubject(evt.target.value);
          }}
          name="subject"
          className=""
        />
        <label htmlFor="content" className="">
          Your message
        </label>
        <textarea
          type="text"
          value={content}
          onChange={(evt) => {
            setContent(evt.target.value);
          }}
          name="content"
          className=""
        />
        <button
          type="submit"
          className="mx-2 rounded-full bg-sky-200 p-3 shadow-lg hover:bg-sky-400 dark:shadow-sky-500/30"
        >
          {button}
          {button === "sending" ? "" : <GiLetterBomb className="mb-1 inline" />}
        </button>
        {errorMsg.length > 0 ? (
          <div>There was an error sending your email please try again!</div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
