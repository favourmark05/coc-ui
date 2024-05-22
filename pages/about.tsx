import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Us | Church of Christ, University of Ibadan</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <section className="hero plus-jarkarta flex flex-col justify-center pt-32 pb-10 md:pb-20 xl:h-screen px-left xl:pt-20">
        <div className="max-w-3xl">
          <h1 className="trirong text-3xl md:text-5xl xl:text-7xl mb-5">
            Church of Christ University of Ibadan
          </h1>
          <p className="md:text-lg xl:text-xl mb-3 max-w-2xl">
            We are certain like never before to ring the truth to ourselves by
            sharing the Word in spirit and in truth.
          </p>
          <p className="md:text-lg xl:text-xl mb-3 max-w-2xl">
            Worship with us on Sundays or reach out to us so we can share the
            true gospel with you.
          </p>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-8 md:gap-16">
          <div>
            <h2 className="text-3xl xl:text-4xl trirong activity-header">Sunday Worship</h2>
            <p className="my-5 font-semibold text-teal">
              Sundays 9:00AM - 11:30PM
            </p>
            <div className="flex items-center">
              <img src="/assets/svg/map-pin.svg" className="w-5 mr-2" alt="" />
              <p className="text-sm">Ajibode Auditorium</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl xl:text-4xl trirong activity-header">
              Tuesday Bible Class
            </h2>
            <p className="my-5 font-semibold text-teal">
              Tuesdays 5:30PM - 6:30PM
            </p>
            <div className="flex items-center">
              <img src="/assets/svg/globe.svg" className="w-5 mr-2" alt="" />
              <p className="text-sm">Online Google Meet</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-grey py-12 md:py-24 px-side">
        <h1 className="trirong text-3xl md:text-4xl xl:text-6xl">Our History</h1>
        <div className="flex flex-col sm:flex-row gap-10 mt-10">
          <div className="bg-white blog-item pt-3 pb-5 lg:pt-10 px-3 lg:px-8 border shadow rounded-lg w-full max-w-xs mb-5 md:mb-0">
            <img className="h-52 w-full rounded-lg mx-auto" src="/assets/about.png" alt="" />
            <div className="blog-item-text relative h-28 pt-3">
              <h3 className="font-semibold text-lg">
                1990 - University of Ibadan, Abadina
              </h3>
              {/* <p className="absolute bottom-0">
                <Link href="">
                  Read Story <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </p> */}
            </div>
          </div>
          <div className="bg-white blog-item pt-3 pb-5 lg:pt-10 px-3 lg:px-8 border shadow rounded-lg w-full max-w-xs mb-5 md:mb-0">
            <img className="h-52 w-full rounded-lg mx-auto" src="/assets/yt-vid.png" alt="" />
            <div className="blog-item-text relative h-28 pt-3">
              <h3 className="font-semibold text-lg">
                2021 - Ajibode, Permanent Site
              </h3>
              {/* <p className="absolute bottom-0">
                <Link href="">
                  Read Story <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 md:py-24 px-side">
        <div>
          <h1 className="trirong text-3xl md:text-4xl xl:text-6xl">Church Leadership</h1>
          <p className="trirong text-xl xl:text-3xl mt-3">Committee Chairs</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-10">
          <div className="rounded-md overflow-hidden">
            <img src="/assets/hero-img1.png" className="object-cover h-60" alt="" />
            <div className="bg-black text-white px-3 py-5">
              <h1 className="trirong text-xl">Bro. Eyene E. U.</h1>
              <p className="uppercase text-xs my-2">Chairman</p>
              <p>Youth Committee</p>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/hero-img2.png" className="object-cover h-60" alt="" />
            <div className="bg-black text-white px-3 py-5">
              <h1 className="trirong text-xl">Bro. Martins M.</h1>
              <p className="uppercase text-xs my-2">Chairman</p>
              <p>Edification Committee</p>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/hero-img3.png" className="object-cover h-60" alt="" />
            <div className="bg-black text-white px-3 py-5">
              <h1 className="trirong text-xl">Bro. Julius O.</h1>
              <p className="uppercase text-xs my-2">Secretariat</p>
              <p>Church Secretary</p>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/hero-img4.png" className="object-cover h-60" alt="" />
            <div className="bg-black text-white px-3 py-5">
              <h1 className="trirong text-xl">Bro. Omokafe O.</h1>
              <p className="uppercase text-xs my-2">Secretariat</p>
              <p>Assistant Church Secretary</p>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <img src="/assets/hero-img5.png" className="object-cover h-60" alt="" />
            <div className="bg-black text-white px-3 py-5">
              <h1 className="trirong text-xl">Bro. Silas A.</h1>
              <p className="uppercase text-xs my-2">Chairman</p>
              <p>Building Committee</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
