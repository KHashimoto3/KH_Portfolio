import { SectionTitle } from "@/components/header/sectionTitle";

export default function ActivityPage() {
  return (
    <>
      <header id="menu-header" className="menu-header">
        <div id="header-title" className="mx-3 w-1/4 font-bold">
          <h1>B.Bのポートフォリオ</h1>
        </div>
        <div
          id="header-menu-item"
          className="space-x-10 mx-3 w-3/4 flex justify-end"
        >
          <a href="#activity-pickup">Activity Pickup</a>
          <a href="#my-skills">My Skills</a>
          <a href="#about-me">About Me</a>
          <a href="#contact">Contact</a>
        </div>
      </header>
      <div id="activity" className="w-full p-8 bg-white">
        <div className="flex items-center justify-center w-full h-60">
          <SectionTitle text="Activity" />
        </div>
        <div className="text-center">
          <p>私の活動を紹介します。</p>
        </div>
        {/* 横長のカードを作る */}
      </div>
    </>
  );
}
