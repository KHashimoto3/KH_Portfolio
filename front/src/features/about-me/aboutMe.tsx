import { SectionTitle } from "@/components/header/sectionTitle";
import Image from "next/image";
import aboutMeImg from "../../../public/about-me-img.jpg";

export const AboutMe = () => {
  return (
    <div id="about-me" className="w-full p-8 bg-white">
      <SectionTitle text="About Me" />
      <div className="flex flex-row mx-8">
        <div className="basis-1/2 p-5">
          <Image src={aboutMeImg} alt="about-me" />
        </div>
        <div className="basis-1/2 p-10 text-2xl">
          <p>名前：KH</p>
          <p>大学：私立理系大学　大学院</p>
          <p>出身：茨城県</p>
          <p>趣味：プログラミング、動画鑑賞、動画編集</p>
        </div>
      </div>
    </div>
  );
};
