"use client";

import Image from "next/image";
import homeImage from "../../public/home-img.jpg";
import homeDarkImage from "../../public/home-dark-img.jpg";

import { ActivityPickup } from "@/features/activity-pickup/activityPickup";
import { MySkills } from "@/features/skills/mySkills";
import { AboutMe } from "@/features/about-me/aboutMe";
import { Contact } from "@/features/contact/contact";
import { PageHeader } from "@/components/header/pageHeader";

export default function Home() {
  return (
    <div>
      <PageHeader />
      <div
        id="home-img"
        className="relative max-h-100 overflow-hidden bg-green-100"
      >
        <Image
          src={homeImage}
          alt="home"
          className="w-full h-auto block dark:hidden object-cover mx-0"
        />
        <Image
          src={homeDarkImage}
          alt="home"
          className="w-full h-auto hidden dark:block object-cover mx-0"
        />
        <div
          id="home-img-text"
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <h1 className="text-5xl p-8 text-white">
            B.Bのポートフォリオサイトへようこそ！！
          </h1>
        </div>
      </div>
      <div
        id="main"
        className="h-auto flex flex-col justify-center dark:bg-gray-900"
      >
        <ActivityPickup />
        <MySkills />
        <AboutMe />
        <Contact />
      </div>
      <div id="footer">フッタがここに入ります</div>
    </div>
  );
}
