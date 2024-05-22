import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Resources.module.css";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { GraphQLClient, gql } from "graphql-request";
import { Post } from "../../types/blogTypes";
import SharePost from "../../components/common/SharePost";

const graphcms = new GraphQLClient(`${process.env.NEXT_APP_GCMS_URL}`);
const QUERY = gql`
  query Posts($slug: String!) {
    posts(where: { slug: $slug }) {
      author
      slug
      id
      title
      featuredImage {
        url
      }
      publishedAt
      body {
        html
      }
      summary
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts }: any = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post: Post) => ({
      params: { slug: post ? post.slug : null },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  if (params && params.slug) {
    const slug = params.slug;
    const data: any = await graphcms.request(QUERY, { slug });
    const post = data.posts[0];
    if (!post) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        post,
      },
    };
  }
  return {
    props: { error: true },
  };
}

const BlogPage: NextPage = ({ post }: any) => {
  // let count = 3;
  // let sidePosts = [];
  // for (let i = 0; i < count; i++) {
  //   sidePosts.push(blogPosts[blogPosts.length - 1 - i]);
  // }
  return (
    <div>
      <div>
        <Head>
          <title>{`COC UI Blog | ${post.title}`}</title>
          <meta name="description" content={`${post.summary}`} />
          <meta
            name="keywords"
            content=""
          />
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_APP_URL}/${post.slug}`}
          />
          <meta property="og:title" content={`${post.title}`} />
          <meta property="og:description" content={`${post.summary}`} />
          <meta property="og:image" content={post.featuredImage.url} />
          <meta property="og:type" content="website" />
          {/* <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={`${post.summary}`} />
          <meta name="twitter:image" content={post.featuredImage.url} />
          <meta name="twitter:site" content="" />
          <meta name="twitter:creator" content=""></meta> */}
        </Head>
        <Header />
        <div
          className={`${styles.blogpage_hero} ${styles.blog_bg} relative flex items-center`}
        >
          <div className={styles.text}>
            <h1 className="text-white mt-10 text-2xl sm:text-3xl">
              {post.title}
            </h1>
            <div className="flex text-gray-300 text-sm md:text-base mt-5">
              By {post.author} &nbsp; | &nbsp;{" "}
              {new Date(post.publishedAt).toDateString().slice(4)}
            </div>
          </div>
        </div>
        <div className={`${styles.blog_main} flex justify-between`}>
          <div className={`${styles.blog_content} pt-10`}>
            {/* <img
              className={styles.featured_img}
              src={post.featuredImage.url}
              alt=""
            /> */}
            <div
              className={`text-gray-700 ${styles.blog_content_text} leading-loose py-10`}
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            ></div>
            <SharePost
              title={post.title}
              slug={post.slug}
              summary={post.summary}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
