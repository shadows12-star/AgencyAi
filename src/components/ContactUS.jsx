import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import { toast } from "react-hot-toast";

export const ContactUS = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f6243853-f186-4023-88ed-224553c0975f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
     toast.success("Thanks for contacting us! We will get back to you soon.");
      event.target.reset();
    } else {
      toast.error("There was an error submitting the form. Please try again later.");
      setResult(data.message);
    }
  };
  return (
    <section
      className="
        w-full
        py-20
        sm:py-28
        lg:py-36
        px-4
        bg-white
        dark:bg-gray-950
        text-gray-900
        dark:text-white
      "
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <Title
            title="Contact Us"
            desc="We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible."
          />
        </div>

        <form onSubmit={onSubmit}
          className="
            max-w-3xl
            mx-auto
            mt-12
            p-6
            sm:p-8
            lg:p-10

            dark:bg-gray-900
           
        
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div
              className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                border
                border-gray-300
                dark:border-gray-700
                bg-white
                dark:bg-gray-800
                focus-within:border-pink-500
                dark:focus-within:border-pink-500
                transition
              "
            >
              <img
                src={assets.person_icon}
                alt=""
                className="w-5 h-5 object-contain opacity-70"
              />

              <input
                required
                type="text"
                placeholder="First Name"
                name="name"
                className="
                  w-full
                  bg-transparent
                  text-sm
                  text-gray-800
                  dark:text-white
                  placeholder:text-gray-400
                  outline-none
                "
              />
            </div>

            {/* Email */}
            <div
              className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                border
                border-gray-300
                dark:border-gray-700
                bg-white
                dark:bg-gray-800
                focus-within:border-pink-500
                dark:focus-within:border-pink-500
                transition
              "
            >
              <img
                src={assets.email_icon}
                alt=""
                className="w-5 h-5 object-contain opacity-70"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                name="email"
                className="
                  w-full
                  bg-transparent
                  text-sm
                  text-gray-800
                  dark:text-white
                  placeholder:text-gray-400
                  outline-none
                "
              />
            </div>
          </div>

          {/* Subject */}
          <div
            className="
              mt-5
              px-4
              py-3
              rounded-xl
              border
              border-gray-300
              dark:border-gray-700
              bg-white
              dark:bg-gray-800
              focus-within:border-pink-500
              transition
            "
          >
            <input
              type="text"
              placeholder="Subject"
              name="message"
              required
              className="
                w-full
                bg-transparent
                text-sm
                text-gray-800
                dark:text-white
                placeholder:text-gray-400
                outline-none
              "
            />
          </div>

          {/* Message */}
          <div
            className="
              mt-5
              p-4
              rounded-xl
              border
              border-gray-300
              dark:border-gray-700
              bg-white
              dark:bg-gray-800
              focus-within:border-pink-500
              transition
            "
          >
            <textarea
              rows="6"
              placeholder="Write your message..."
              className="
                w-full
                resize-none
                bg-transparent
                text-sm
                text-gray-800
                dark:text-white
                placeholder:text-gray-400
                outline-none
              "
            />
          </div>

          <div
            className="
  text-sm
  mt-5
  w-40
  max-sm:w-full
  bg-primary
  text-white
  px-6
  py-3
  flex
  items-center
  justify-center
  gap-2
  rounded-full
  cursor-pointer
  hover:scale-105
  transition-all
"
          >
            <button type="submit" className="flex items-center gap-2 sm:hover:border-b">
              Submit
              <img src={assets.arrow_icon} className="w-4" alt="" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUS;
