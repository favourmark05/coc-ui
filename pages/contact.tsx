import type { NextPage } from "next";
import React, { useRef } from "react";
import Head from "next/head";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

const Contact: NextPage = () => {
  const formBody = useRef(null);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.fullName) {
        errors.fullName = "Full name is required";
      }

      if (!values.subject) {
        errors.subject = "Subject is required";
      }

      if (!values.message) {
        errors.message = "Your message is required";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      const data = values;
      emailjs
        .send(
          "service_d3az6au",
          "template_u22vh9k",
          data,
          "user_JnkbPpytmFMhAyAWo3zVs"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Thank you for reaching out. We will contact you shortly.");
          },
          (error) => {
            alert("An error occured! Try again later");
          }
        );
      setSubmitting(false);
      formik.resetForm();
    },
  });
  return (
    <div>
      <Head>
        <title>Contact Us | Church of Christ, Univeristy of Ibadan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="contact-hero md:flex items-center justify-center lg:h-screen plus-jarkarta pt-32 xl:px-20 lg:pt-20 px-side py-10">
        <div className="md:flex justify-between max-w-5xl gap-8 mx-auto">
          <div className="my-8 w-full md:w-1/2">
            <h1 className="text-4xl lg:text-5xl md:my-8 lg:mt-14">
              We will be be more than glad to have you around
            </h1>
            <div className="address flex flex-col justify-center my-3 md:my-5">
              <div className="flex items-center mb-5">
                <img className="w-10 mr-2" src="/assets/svg/tent.svg" alt="" />
                <p className="border-l-2 pl-2 border-gray-300 md:text-lg">
                  15,Alafia Street,Ajibode ,Ibadan.
                </p>
              </div>
            </div>
            <div className="flex items-center mr-8 mb-2 md:mb-0 text-sm md:text-base">
              <img className="w-4 md:w-5 mr-3" src="/assets/svg/phone.svg" alt="" />
              <p className="text-md uppercase md:text-lg">Call Us</p>
            </div>
            <p className="md:text-xl font-semibold">08068058380</p>
            <div className="socials flex items-center my-2 md:my-5">
              <p className="uppercase font-semibold">Follow us</p>
              <div className="social-icons flex items-center ml-3">
                <img className="w-8 md:w-10 mr-2 cursor-pointer" src="/assets/svg/fb.svg" alt="" />
                <img className="w-8 md:w-10 mr-2 cursor-pointer" src="/assets/svg/ig.svg" alt="" />
                <img className="w-8 md:w-10 mr-2 cursor-pointer" src="/assets/svg/yt.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-md my-8">
            <h1 className="text-2xl sm:text-3xl mb-4">Drop A Message</h1>
            <form ref={formBody} onSubmit={formik.handleSubmit}>
              <div className="border-2 rounded-lg">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  className="text-sm block h-16 w-full font-normal px-5 rounded-sm border-b-2 border-gray-100"
                />
                {/* {errors.fullName && touched.fullName && errors.fullName} */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="text-sm block h-16 w-full font-normal px-5 rounded-sm border-b-2 border-gray-100"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className="text-sm block h-16 w-full font-normal px-5 rounded-sm border-b-2 border-gray-100"
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="text-sm block h-40 w-full font-normal pt-4 px-5 rounded-sm border-b-2 border-gray-100"
                />
              </div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="contact-btn w-40 text-sm md:text-md h-12 md:h-16 mt-4 team-btn bg-transparent border-solid border-2 uppercase rounded-sm font-semibold"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <iframe
          title="church map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.030760497162!2d3.885562014861225!3d7.461848794617117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f391094bb2ed%3A0xdd6c642bcf24938c!2sChurch%20Of%20Christ%20University%20Of%20Ibadan%2C%20Ajibode!5e0!3m2!1sen!2sng!4v1662872280182!5m2!1sen!2sng"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
