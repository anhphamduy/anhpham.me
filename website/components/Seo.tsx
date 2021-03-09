import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";

const Seo = ({ title, description }) => {
  const router = useRouter();
  console.log();
  return (
    <NextSeo
      title={`${title} | Anh Pham`}
      description={description}
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: `https://anhpham.me${router.asPath}`,
        title: `${title} | Anh Pham`,
        description: description,
        images: [
          {
            url: "/headshot.jpg",
            width: 400,
            height: 400,
            alt: "Anh Pham's image",
          },
        ],
        site_name: "AnhPham",
      }}
      twitter={{
        handle: "@anhphamduy",
        site: "@anhphamduy",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Seo;
