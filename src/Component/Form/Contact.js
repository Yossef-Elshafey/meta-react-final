import { useEffect, useState } from "react";
import { useFormData } from "../../context/ContactContext";
import validation from "./Validation";
import { Alert } from "./Alert";

export const Contact = () => {
  const { userData, setUserData } = useFormData();
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    type: false,
    message: false,
    showAlert: false,
  });

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setFocus({ ...focus, showAlert: false });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserData({ ...userData, name: "", email: "", type: "", message: "" });
    setFocus({
      name: false,
      email: false,
      type: false,
      message: false,
      showAlert: true,
    });
  }

  function handleFocus(e) {
    setFocus({ ...focus, [e.target.name]: true });
  }
  useEffect(() => {
    let handler;
    if (focus.showAlert) {
      handler = setTimeout(() => {
        setFocus({ ...focus, showAlert: false });
      }, 4000);
    }
    return () => clearTimeout(handler);
  }, [focus]);

  return (
    <section className="bg-green-100/80 relative">
      {focus.showAlert && <Alert />}
      <form
        className="h-screen container mx-auto flex flex-col justify-around relative  "
        onSubmit={handleSubmit}
      >
        <h2 className={`text-3xl `}>Contact</h2>
        <label name="name" className="flex flex-col">
          Name
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            value={userData.name}
            type="text"
            name="name"
            className={`border mt-6 outline-none ${
              focus.name &&
              validation(userData).nameValid !== true &&
              "border-rose-500"
            }  rounded-md p-2`}
          />
          {focus.name && validation(userData).nameValid !== true && (
            <p className="text-rose-500">{validation(userData).nameValid}</p>
          )}
        </label>
        <label name="name" className="flex flex-col">
          Email Address
          <input
            onFocus={handleFocus}
            onChange={handleChange}
            value={userData.email}
            name="email"
            type="text"
            className={`border mt-6 outline-none ${
              focus.email &&
              validation(userData).emailValid !== true &&
              "border-rose-500"
            } rounded-md p-2`}
          />
          {focus.email && validation(userData).emailValid !== true && (
            <p className="text-rose-500">{validation(userData).emailValid}</p>
          )}
        </label>
        <label name="name" className="flex flex-col gap-y-6">
          Type of enquiry
          <select
            onFocus={handleFocus}
            value={userData.type}
            className={`p-2 outline-none rounded-md border ${
              focus.type &&
              validation(userData).typeValid !== true &&
              "border-rose-500"
            } `}
            name="type"
            onChange={handleChange}
          >
            <option value="nt">---</option>
            <option value="Freelance">Freelance</option>
            <option value="Education">Education</option>
            <option value="Employee">Employee</option>
          </select>
          {focus.type && validation(userData).typeValid !== true && (
            <p className="text-rose-500">{validation(userData).typeValid}</p>
          )}
        </label>
        <label name="name" className="flex flex-col gap-y-6">
          Your message
          <textarea
            value={userData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            name="message"
            rows="6"
            className="resize-none p-2 rounded-md outline-none"
          ></textarea>
          {focus.message && validation(userData).msgValid !== true && (
            <p className="text-rose-500">{validation(userData).msgValid}</p>
          )}
        </label>
        <input
          type="submit"
          value="Submit"
          className="border border-transparent border-b-green-400 enabled:animate-bounce disabled:text-rose-500 disabled:border-b-rose-500 outline-b outline-green-500 disabled:cursor-not-allowed cursor-pointer w-fit mx-auto py-2 px-4 rounded-xl"
          disabled={!validation(userData).disabled()}
        />
      </form>
    </section>
  );
};
