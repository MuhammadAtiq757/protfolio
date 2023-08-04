import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_exr7fdh', 'template_0xbcj6b', form.current, 'JuhWmJlIojuUbaKFI')
      .then((result) => {
          console.log(result.text);
          form.current.reset(); // Reset the form fields
      })
      .catch((error) => {
          console.log(error.text);
      });
  };

  const contact_info = [
    { logo: "mail", text: "muhammadatiq757@gmail.com" },
    { logo: "logo-whatsapp", text: "+880 187 965 4957" },
    {
      logo: "location",
      text: "demo location",
    },
  ];

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-purple-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
            <input type="text" name="user_name" placeholder="Your Name" />
            <input type="Email" name="user_email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" name="message" rows={10}></textarea>
            <input className="btn bg-purple-600 p-4 rounded-xl w-32 mx-auto text-center" type="submit" value="Send" />
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-purple-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
