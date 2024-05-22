import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

function SharePost({ title, summary, slug }) {
  return (
    <div className="mt-3">
        <h1 className="mb-3 text-gray-700">Hope you enjoyed reading this post. Share with your friends.</h1>
      <div className="flex">
        <FacebookShareButton
          url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${slug}`}
          title={title}
          className="mr-2"
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <LinkedinShareButton
          url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${slug}`}
          title={title}
          summary={summary}
          source={"Techspecialist Blog"}
          className="mr-2"
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        <TwitterShareButton
          url={`${process.env.NEXT_PUBLIC_APP_URL}/blog/${slug}`}
          title={title}
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </div>
    </div>
  );
}
export default SharePost;
