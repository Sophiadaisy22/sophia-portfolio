import React, { useState } from "react";
import Image from "next/image";
import { assets } from "../asset/assets";

const Contact = () => {

     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b3d8fd17-aa96-4fb1-98a3-3144eca91ed7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 
       '
    >
      <h4 className="text-center mb-2 text-lg">Connect With me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
        I'd love to hear from you! If you have any questions, concerns or
        feedbacks, please use the form below
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
        <input type="text"  placeholder="Enter your name" required
        className="flex-1 p-3 outline-none border-[0.5px]
         border-gray-500 rounded-md bg-white" name="name"/>
        <input type="email" placeholder="Enter your Email" required
        className="flex-1 p-3 outline-none border-[0.5px]
         border-gray-500 rounded-md bg-white" name="email"/>
       </div> 
            <textarea rows="6" placeholder="Enter your message" required
            className="w-full p-4 outline-none border-[0.5px]
             border-gray-500 rounded-md bg-white mb-6" name="message"></textarea>
        

        <button type="submit"
        className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
        text-white rounded-full mx-auto hover:bg-black duration-500">
            Submit now <Image src={assets.right_arrow_white}  alt="" className="w-4"/></button>
      </form>
      <p className="mt-4">{result}</p>
    </div>
  );
};

export default Contact;
