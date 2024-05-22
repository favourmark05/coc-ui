import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Resources.module.css";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Blogpost from "../components/common/Blogpost";
import { GraphQLClient, gql } from "graphql-request";
import moment from'moment';
import { Post } from "../types/blogTypes";
import { useEffect, useState } from "react";

const graphcms = new GraphQLClient(`${process.env.NEXT_APP_GCMS_URL}`);
const QUERY = gql`
  {
    posts {
      author
      slug
      id
      title
      featuredImage {
        url
      }
      publishedAt
      category
    }
  }
`;

export async function getStaticProps() {
  let { posts }: any = await graphcms.request(QUERY);
  posts = posts.reverse();
  return {
    props: {
      posts,
    },
  };
}

const Blog: NextPage = ({ posts }: any) => {
  const [mainPosts, setMainPosts] = useState([]);
  const [current, setCurrent] = useState("all");
  const getPosts = (val: string) => {
    if (val === "all") {
      setMainPosts(posts);
    } else {
      let temp = posts.filter((post: any) => post.category === val);
      setMainPosts(temp);
    }
    window.scrollTo(0, 0);
  };
  const formattedDate = (date: any) => moment(date).format('MMMM Do YYYY');
  useEffect(() => {
    getPosts(current);
  }, [current]);

  return (
    <div>
      <Head>
        <title>Blog | Church of Christ, Univeristy of Ibadan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`${styles.hero_bg} relative px-side`}>
        <img
          src="/assets/img/resources.jpg"
          alt=""
          className="absolute h-full"
        />
        <h1 className="text-xl sm:text-2xl lg:text-4xl uppercase text-white font-semibold">
          The Church Of Christ UI Blog
        </h1>
      </div>
      <div className="bg-white sticky top-16 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 w-full max-w-2xl mx-auto mt-5 py-3 px-5 z-10">
        <button
          onClick={() => setCurrent("all")}
          className={`h-10 bg-white font-semibold text-sm rounded-md border shadow ${current === "all" && "bg-pry text-white"}`}
        >
          All
        </button>
        <button
          onClick={() => setCurrent("sunday_school")}
          className={`h-10 bg-white font-semibold text-sm rounded-md border shadow ${current === "sunday_school" && "bg-pry text-white"}`}
        >
          Sunday School
        </button>
        <button
          onClick={() => setCurrent("sermon")}
          className={`h-10 bg-white font-semibold text-sm rounded-md border shadow ${current === "sermon" && "bg-pry text-white"}`}
        >
          Sermon
        </button>
        <button
          onClick={() => setCurrent("general")}
          className={`h-10 bg-white font-semibold text-sm rounded-md border shadow ${current === "general" && "bg-pry text-white"}`}
        >
          General
        </button>
      </div>
      {mainPosts.length !== 0 ? (
        <div
          className={`${styles.blogposts} grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-7`}
        >
         
          {mainPosts.map((post: Post, index: number) => (
            <Blogpost
              key={index}
              img={post.featuredImage.url}
              author={post.author}
              date={formattedDate(post.publishedAt)}
              title={post.title}
              id={post.id}
              slug={post.slug}
              category={post.category}
            />
          ))}
        </div>
      ) : (
        <div className="h-40 flex items-center justify-center">
          No posts yet
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Blog;
