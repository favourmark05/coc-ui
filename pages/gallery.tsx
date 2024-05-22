import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Resources.module.css";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { GraphQLClient, gql } from "graphql-request";
import { useEffect, useRef, useState } from "react";

const graphcms = new GraphQLClient(`${process.env.NEXT_APP_GCMS_URL}`);

const QUERY = gql`
  {
    galleries(first: 200) {
      id
      title
      image {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  let { galleries }: any = await graphcms.request(QUERY);
  galleries = galleries.reverse()
  return {
    props: {
      galleries,
    },
  };
}

const Gallery: NextPage = ({ galleries }: any) => {
  let [hasPictures, setHasPictures] = useState(false);
  let [activeSlide, setActiveSlide] = useState(0);
  let [showGallery, setShowGallery] = useState(false);
  let [slideLength, setSlideLength] = useState(0);
  const slidesWrap = useRef<any>();

  const toggleSlide = () => {
    let slidesArr = slidesWrap.current.children;
    setSlideLength(slidesArr.length);

    if (slidesArr.length === 0) {
      return setHasPictures(false);
    }

    setHasPictures(true);
    for (let i = 0; i < slideLength; i++) {
      slidesArr[i].style.display = "none";
    }
    slidesArr[activeSlide].style.display = "flex";
  };

  const lastSlide = slideLength - 1;
  const changeSlideLeft = () => {
    if (activeSlide <= 0) {
      setActiveSlide(lastSlide);
    } else {
      setActiveSlide(activeSlide - 1);
    }

    // toggleSlide()
  };
  const changeSlideRight = () => {
    if (activeSlide >= lastSlide) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }

    // toggleSlide()
  };

  const changeActiveSlide = (index: number) => {
    setActiveSlide(index);
    toggleSlide();
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  useEffect(() => {
    toggleSlide();
  }, [activeSlide]);
  return (
    <div>
      <Head>
        <title>Gallery | Church of Christ, Univeristy of Ibadan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`${styles.hero_bg} relative px-side`}>
        <img src="/assets/img/gallery.jpg" alt="" className="absolute h-full" />
        <h1 className="text-xl sm:text-2xl lg:text-4xl uppercase text-white font-semibold">
          The Church of Christ UI Gallery
        </h1>
      </div>
      {!hasPictures ? (
        <div className={`${styles.no_pictures}`}>
          <i className="fas fa-images"></i>
          <p>Nothing to see here</p>
        </div>
      ) : (
        <div
          className={`${styles.galleryWrap} grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-7`}
        >
          {galleries.map((picture: any, index: number) => (
            <div key={index}>
              <img
                onClick={() => changeActiveSlide(index)}
                src={picture.image.url}
                alt=""
                className="cursor-pointer h-full obj-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className={showGallery ? styles.slideshow : "hidden"}>
        <div
          ref={slidesWrap}
          className={`${styles.slideshow_wrap} bg-gray-700`}
        >
          {galleries.map((picture: any, index: number) => (
            <div key={index}>
              <img src={picture.image.url} alt="" />
            </div>
          ))}
        </div>
        <i
          onClick={() => changeSlideLeft()}
          className={`${styles.nav_btn} ${styles.btn_left} fas fa-chevron-left text-white text-4xl`}
        ></i>
        <i
          onClick={() => changeSlideRight()}
          className={`${styles.nav_btn} ${styles.btn_right} fas fa-chevron-right text-white text-4xl`}
        ></i>
        <i
          onClick={() => closeGallery()}
          className={`${styles.close_btn} fas fa-times text-gray-100 text-xl cursor-pointer`}
        ></i>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
