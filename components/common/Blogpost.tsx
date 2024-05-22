import React from "react";
import styles from "../../styles/Resources.module.css";
import Link from "next/link";

type BlogPost = {
  img: string;
  title: string;
  author: string;
  date: string;
  id: number;
  slug: string;
  category: string;
}

function Blogpost({ img, title, author, date, category, slug }: BlogPost) {
  // const clearId = () => {
  //   sessionStorage.clear("tcl-blog-id");
  // };
  return (
    <div className={styles.blogpost}>
      <img src={img} alt="" />
      <div
        className={`${styles.blogpost_text} py-7 px-4 text-gray-700 relative`}
      >
        <p className="capitalize bg-pry-2 text-white font-semibold inline-block p-1 text-xs mb-3">{category === "sunday_school" ? "sunday school" : category}</p>
        <Link href={`/blog/${slug}`}>
            <h3
              className="font-semibold text-base cursor-pointer"
            >
              {title}
            </h3>
        </Link>
        <div className={`${styles.metadata} flex text-gray-500 text-sm mt-5`}>
          By {author} &nbsp; | &nbsp; {date}
        </div>
      </div>
    </div>
  );
}

export default Blogpost;
