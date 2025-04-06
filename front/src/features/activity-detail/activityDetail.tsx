"use client";

import React from "react";

import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";

export const ActivityDetail = () => {
  const markdownSource = `
# これは見出し1

## これは見出し2

### これは見出し3

* リストアイテム2  
* リストアイテム3  

\`\`\`js
console.log('Hello, Markdown!');
\`\`\`

[Google](https://www.google.com)

**これは太字**

*これは斜体*

> これは引用

| 名前  | 年齢 |
|------|------|
| 太郎  | 20   |
| 花子  | 22   |
`;

  return (
    <>
      <h1>活動の詳細</h1>
      <div className="w-full">
        <div
          className="markdown-body p-4 border border-gray-300 h-72 overflow-y-auto list-disc list-decimal"
          style={{ fontFamily: "inherit", fontSize: "inherit" }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm, breaks]}>
            {markdownSource}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};
