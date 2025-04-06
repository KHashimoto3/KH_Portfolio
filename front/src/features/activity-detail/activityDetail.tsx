"use client";

import React from "react";

import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import { ActivityDetailItem } from "./activityDetailItem";

export const ActivityDetail = () => {
  //項目名と項目の詳細を格納するオブジェクト配列
  const activityDetail: ActivityDetail[] = [
    {
      title: "活動名",
      text: "活動の内容",
      imgUrl: ["https://picsum.photos/200"],
      imgAlt: ["活動の画像"],
      link: ["https://www.google.com/"],
      linkText: ["サンプルリンク（google）"],
    },
    {
      title: "活動名",
      text: "活動の内容",
      imgUrl: ["https://picsum.photos/200"],
      imgAlt: ["活動の画像"],
      link: ["https://www.google.com/"],
      linkText: ["サンプルリンク（google）"],
    },
  ];

  return (
    <>
      {activityDetail.map((item, index) => (
        <ActivityDetailItem
          key={index}
          title={item.title}
          text={item.text}
          imgUrl={item.imgUrl}
          imgAlt={item.imgAlt}
          link={item.link}
          linkText={item.linkText}
        />
      ))}
    </>
  );
};
