import React, { useState } from "react";
import { GiLetterBomb } from "react-icons/gi";
import TextareaAutosize from "react-textarea-autosize";

const Contact = () => {
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

    //return correct error message if any field is empty
    if (!isValid) {
      alert("all form fields are required");
      return isValid;
    }

    //then check for valid email address
    const regex = new RegExp(
      "[a-z0-9!#$%&*+/=?^_'{|}~-]+(?:.[a-z0-9!#$%&*+/=?^_'{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    );
    if (email.match(regex) === null) {
      alert("please enter a valid email address");
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
        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: email,
            name: name,
            subject: subject,
            message: content,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        setName("");
        setEmail("");
        setSubject("");
        setContent("");
      } catch (e) {
        setButton("Send message!");
        setErrorMsg(e.message);
        return;
      }
      alert("Message sent!");
      setButton("Send message!");
    }
    return;
  };

  return (
    <div>
      <h1 className="z-0 text-5xl dark:text-sky-300">Contact Me!</h1>
      <p className="flex flex-wrap pt-5">
        Use the form below to reach out if you want to work together, you want
        to say hello, or maybe just for fun!
        <span className="flex text-xs italic text-red-400">
          all fields are required
        </span>
      </p>
      <form className=" pt-5" onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between py-2">
          <label htmlFor="name" className="flex justify-between">
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
        </div>
        <div className="flex flex-wrap justify-between py-2">
          <label htmlFor="email" className="flex justify-between">
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
        </div>
        <div className="flex flex-wrap justify-between py-2">
          <label htmlFor="subject" className="flex justify-between">
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
        </div>
        <div className="flex flex-wrap justify-between py-2">
          <label htmlFor="content" className="flex justify-between">
            Message
          </label>
          <TextareaAutosize
            type="text"
            value={content}
            onChange={(evt) => {
              setContent(evt.target.value);
            }}
            name="content"
            className=""
          />
        </div>
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className=" rounded-full bg-sky-200 p-3 shadow-lg hover:bg-sky-400 dark:shadow-sky-500/30"
          >
            {button}
            {button === "sending" ? (
              ""
            ) : (
              <GiLetterBomb className="mb-1 inline" />
            )}
          </button>
        </div>
        {errorMsg.length > 0 ? (
          <div>
            There was an error sending your email please try again! Error
            message: {errorMsg}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Contact;
