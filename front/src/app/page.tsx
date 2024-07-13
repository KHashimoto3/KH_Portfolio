import Image from "next/image";
import homeImage from "../../public/home-img.jpg";
import { ActivityPickup } from "@/features/activity-pickup/activityPickup";
import { MySkills } from "@/features/skills/mySkills";
import { AboutMe } from "@/features/about-me/aboutMe";
import { Contact } from "@/features/contact/contact";

export default function Home() {
  return (
    <div>
      <div id="menu-header" className="menu-header">
        <div className="mx-3">
          <h1>KHのポートフォリオ</h1>
        </div>
      </div>
      <div
        id="home-img"
        className="relative max-h-100 overflow-hidden bg-green-100"
      >
        <Image
          src={homeImage}
          alt="home"
          className="w-full h-auto object-cover mx-0"
        />
        <div
          id="home-img-text"
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <h1 className="text-5xl p-8 text-white">
            KHのポートフォリオサイトへようこそ！！
          </h1>
        </div>
      </div>
      <div id="main" className="h-auto flex flex-col justify-center">
        <ActivityPickup />
        <MySkills />
        <AboutMe />
        <Contact />
      </div>
      <div id="footer">フッタがここに入ります</div>
    </div>
  );
}
