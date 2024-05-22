import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { GraphQLClient, gql } from "graphql-request";
import { Post } from "../types/blogTypes";
import { useState } from "react";

const gcms = new GraphQLClient(`${process.env.NEXT_APP_GCMS_URL}`);

const GALLERYQUERY = gql`
  {
    galleries(first: 4) {
      id
      title
      image {
        url
      }
    }
  }
`;

const graphcms = new GraphQLClient(`${process.env.NEXT_APP_GCMS_URL}`);
const QUERY = gql`
  {
    posts(first: 3) {
      author
      slug
      id
      title
      featuredImage {
        url
      }
      publishedAt
    }
  }
`;

export async function getStaticProps() {
  let { posts }: any = await graphcms.request(QUERY);
  let { galleries }: any = await gcms.request(GALLERYQUERY);
  posts = posts.reverse();
  galleries = galleries.reverse();
  return {
    props: {
      posts,
      galleries,
    },
  };
}

const Home: NextPage = ({ posts, galleries }: any) => {
  const [showTract, setShowTract] = useState(true);
  return (
    <div>
      <Head>
        <title>Home | Church of Christ, University of Ibadan</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      
      {/* {showTract && (
        <div className="fixed w-full top-16 z-10">
        <div className="tracts bg-pry px-side text-white text-center text-xs py-2 flex items-center justify-left md:justify-center relative">
          <p className="capitalize font-semibold mr-5">
            <span className="mr-1 md:mr-3">⚡⚡</span> <a href="#">Click here to download Our tract For
            The Month</a>            
          </p>
          <i
            onClick={() => setShowTract(false)}
            className="fas fa-times absolute px-right text-base cursor-pointer"
          ></i>
        </div></div>
      )} */}
      <section className="hero plus-jarkarta flex flex-col lg:flex-row items-center justify-center lg:justify-between pt-32 lg:h-screen px-left lg:pt-20">
        <div className="text-center mb-10 lg:mb-0 lg:text-left max-w-lg xl:max-w-3xl xl:pl-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            The Church of Christ
          </h1>
          <p className="text-base md:text-xl lg:text-2xl max-w-md mt-3 mx-auto lg:mx-0">
            A church where only the Bible speaks and salvation is preached.
          </p>
          <Link href="/contact">
            <button className="bg-pry text-white py-1 md:py-2 px-5 md:px-14 lg:px-16 mt-8 mx-auto lg:mx-0 text-base md:text-lg rounded-md flex items-center whitespace-nowrap">
              Join Us{" "}
              <img className="ml-2" src="/assets/svg/arrow-right.svg" alt="" />
            </button>
          </Link>
        </div>
        <div className="pic-grid max-w-sm lg:max-w-lg grid grid-cols-3">
          <div>
            <img src="/assets/hero-img1.png" alt="" />
          </div>
          <div>
            <img src="/assets/hero-img2.png" alt="" />
          </div>
          <div>
            <img src="/assets/hero-img3.png" alt="" />
          </div>
          <div>
            <img src="/assets/hero-img4.png" alt="" />
          </div>
          <div>
            <img src="/assets/hero-img5.png" alt="" />
          </div>
          <div>
            <img src="/assets/hero-img6.png" alt="" />
          </div>
          <div>
            <img src="/assets/hero-img7.png" alt="" />
          </div>
          <div>
            <img src="/assets/hero-img1.png" alt="" />
          </div>
          <div>
            <img src="/assets/hero-img2.png" alt="" />
          </div>
        </div>
      </section>
      <section className="visit flex flex-col md:flex-row items-center pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side">
        <div className="hidden md:block shadow rounded-xl mr-10">
          <div className="h-48 w-72 border-2 border-gray-200 rounded-t-xl">
            <img className="h-full" src="/assets/heap.png" alt="" />
          </div>
          <div className="h-48 w-72 bg-black text-white flex flex-col justify-center px-5 pl-8 border-2 border-black rounded-b-xl">
            <h2 className="trirong mt-5 text-3xl">Request a Home Visit</h2>
            <img
              className="w-16 mt-8 ml-auto mr-5"
              src="/assets/svg/long-arrow.svg"
              alt=""
            />
          </div>
        </div>
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-4xl xl:text-5xl capitalize tracking-wide">
            No matter where you are in your spiritual journey, you're invited to
            discover God's eternal purpose and His plan for you.
          </h2>
          <p className="text-base my-5 uppercase leading-loose text-gray-500">
            Now all things are of God, who has reconciled us to Himself through
            Jesus Christ, and has given us the ministry of reconciliation, that
            is, that God was in Christ reconciling the world to Himself, not
            imputing their trespasses to them, and has committed to us the word
            of reconciliation
          </p>
          <p className="flex items-center uppercase font-semibold text-sm md:text-base">
            II Corinthians 5:18-19 NKJV{" "}
            <img className="w-2 ml-3" src="/assets/svg/verse.svg" alt="" />
          </p>
          <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-10 font-semibold uppercase">
            <div className="flex items-center mr-8 mb-5 md:mb-0 text-sm md:text-base">
              <img className="w-5 mr-3" src="/assets/svg/phone.svg" alt="" />
              <p>Call Us: 08068058380</p>
            </div>
            <div className="flex items-center text-sm md:text-base">
              <img className="w-5 mr-3" src="/assets/svg/calendar.svg" alt="" />
              <p>Schedule A Call With Us</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="truth py-10 md:pb-20 px-side">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-5">The truth.</h1>
        <div className="iframe-container">
          <iframe
            className="w-full"
            src="https://www.youtube.com/embed/nqye02H_H6I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}
      <section className="book flex flex-col sm:flex-row items-center justify-center pt-8 sm:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side">
        <div className="sm:mr-14 w-72">
          <img src="/assets/psalms.png" alt="" />
        </div>
        <div className="mt-5 md:mt-0 max-w-4xl">
          <h2 className="text-grey text-2xl md:text-4xl lg:text-5xl">
            Discover tracts to help you understand your journey with Christ more
            and His eternal purpose.
          </h2>
          <p className="text-lg md:text-xl my-3 text-grey">
            Join us in the christian race and be blessed.
          </p>
          <p className="font-semibold text-sm">
            Download for free <i className="fas fa-arrow-down ml-1"></i>
          </p>
        </div>
      </section>
      <section className="blog pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side bg-grey">
        <div className="heading mb-10 xl:mb-14">
          <p className="uppercase">Stories & Blog</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Stories & Blog</h1>
        </div>
        <div className="mb-10 md:mb-16 xl:flex items-center">
          <div className="blog-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 item-center">
            {posts.map((post: Post, index: number) => (
              <div
                key={index}
                className="blog-item pt-3 pb-5 lg:py-10 px-3 lg:px-8 border shadow rounded-lg w-full max-w-xs mx-auto mb-5 md:mb-0"
              >
                <img
                  className="h-52 w-full rounded-lg mx-auto"
                  src={post.featuredImage.url}
                  alt=""
                />
                <div className="blog-item-text relative h-28 pt-3">
                  <h3 className="font-semibold text-lg">{post.title}</h3>
                  <p className="absolute bottom-0">
                    <Link href={`/blog/${post.slug}`}>
                      Read Story <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 md:mt-10 md:w-40 flex items-center justify-center lg:ml-5 xl:block">
            <p className="text-base md:text-xl">Read more</p>
            <i className="fas fa-arrow-right-long ml-3"></i>
          </div>
        </div>
        {/* <div className="podcast flex flex-col sm:flex-row items-center justify-between bg-gray-100 py-5 px-5 lg:px-16 max-w-5xl mx-auto rounded-xl">
          <p className="text-base md:text-lg tracking-wider font-semibold uppercase text-teal">
            Listen to our podcast
          </p>
          <img
            className="w-14 md:w-20 lg:w-24 my-5 md:my-0"
            src="/assets/svg/radio.svg"
            alt=""
          />
          <img className="w-40 md:w-60" src="/assets/svg/podcasts.svg" alt="" />
        </div> */}
      </section>
      <section className="about flex flex-col md:flex-row items-center justify-between pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side lg:px-left">
        <div className="about-text max-w-2xl mr-10">
          <h2 className="trirong text-3xl md:text-4xl lg:text-5xl">
            Church Of Christ,
          </h2>
          <p className="uppercase text-base md:text-xl font-semibold mb-3">
            University of Ibadan
          </p>
          <div className="text-base md:text-xl my-5">
            <p className="mb-3">
              We are certian like never before to bring the truth to you,
              sharing the word of God in truth and Spirit.
            </p>
            <p>
              Visit us on Sunday or do reach out to us let’s share the true
              Gospel with you.
            </p>
          </div>
          <p className="flex items-center uppercase font-semibold text-sm">
            Matthew 18:1-5{" "}
            <img className="w-2 ml-2" src="/assets/svg/verse.svg" alt="" />
          </p>
          <div className="flex items-center my-5 ">
            <img className="w-4 mr-2" src="/assets/svg/pin.svg" alt="" />
            <p className="font-semibold text-sm md:text-base">
              Find us on Google Maps
            </p>
            <i className="fas fa-arrow-right-long ml-3"></i>
          </div>
          <div className="flex items-center my-5">
            <img className="w-4 mr-2" src="/assets/svg/maps.svg" alt="" />
            <p className="font-semibold text-sm md:text-base">
              Find other Churches of Christ closest to you
            </p>
            <i className="fas fa-arrow-right-long ml-3"></i>
          </div>
        </div>
        <div className="max-w-lg mx-auto my-5 md:my-0">
          <img src="/assets/about.png" alt="" />
        </div>
      </section>
      <section className="join-us pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
          Join Us In Church Today
        </h1>
        <p className="text-xl">Come and be blessed</p>
        <div className="img-block my-8 md:my-14 flex items-center justify-center">
          <img
            className="w-16 md:w-28 h-16 md:h-28 rounded-full -ml-3 border-4 border-white"
            src="/assets/hero-img1.png"
            alt=""
          />
          <img
            className="w-16 md:w-28 h-16 md:h-28 rounded-full -ml-3 border-4 border-white"
            src="/assets/hero-img2.png"
            alt=""
          />
          <img
            className="w-16 md:w-28 h-16 md:h-28 rounded-full -ml-3 border-4 border-white"
            src="/assets/hero-img3.png"
            alt=""
          />
          <img
            className="w-16 md:w-28 h-16 md:h-28 rounded-full -ml-3 border-4 border-white"
            src="/assets/hero-img4.png"
            alt=""
          />
        </div>
        <Link href="/contact">
          <button className="bg-pry text-white py-1 md:py-2 px-8 md:px-16 mt-8 text-lg rounded-md flex items-center whitespace-nowrap mx-auto">
            Join Us{" "}
            <img className="ml-2" src="/assets/svg/arrow-right.svg" alt="" />
          </button>
        </Link>
      </section>
      <section className="gallery pt-8 md:pt-14 xl:pt-20 pb-10 xl:pb-28 px-side">
        <div className="heading mb-10">
          <p className="text-sm md:text-base uppercase">Events & Programs</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Events & Gallery
          </h1>
          <p className="text-sm md:text-base max-w-lg mt-3">
            Church events and programs captured through images
          </p>
        </div>
        <div className="event-wrap grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-10 item-center">
          {galleries.map((picture: any, index: number) => (
            <div key={index}>
            <img
              src={picture.image.url}
              alt=""
              className="cursor-pointer h-full obj-cover"
            />
          </div>
          ))}
        </div>
        <Link href="/gallery">
        <p className="flex items-center justify-end font-semibold mt-5 ml-auto w-full text-base md:text-xl">
          See more{" "}
          <img
            className="w-5 ml-3"
            src="/assets/svg/arrow-up-right-black.svg"
            alt=""
          />
        </p>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
