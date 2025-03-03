"use client";

import { ActivityLandscapeCard } from "@/components/card/activity-landscape-card";
import { SectionTitle } from "@/components/header/sectionTitle";

export default function ActivityPage() {
  return (
    <>
      <header id="menu-header" className="menu-header">
        <div
          id="header-title"
          className="mx-3 w-1/4 font-bold cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
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
        <div className="text-center m-5">
          <p>私の活動を紹介します。</p>
        </div>
        <div className="w-full m-auto p-3 flex h-10 drop-shadow-lg rounded-lg bg-white">
          <div className="w-1/5 h-full flex justify-center items-center">
            <p>絞り込み</p>
          </div>
          <div className="w-4/5 h-full flex justify-left items-center gap-4">
            <label className="fieldset-label">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />
              エンジニアリング
            </label>
            <label className="fieldset-label">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />
              動画編集
            </label>
            <label className="fieldset-label">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />
              イベント企画・運営
            </label>
            <label className="fieldset-label">
              <input
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
              />
              その他
            </label>
          </div>
        </div>
        <div className="mt-8 w-full flex justify-center items-center gap-x-8">
          <ActivityLandscapeCard
            imgUrl="https://picsum.photos/200"
            title="活動1"
            text="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。"
          />
          <ActivityLandscapeCard
            imgUrl="https://picsum.photos/200"
            title="活動2"
            text="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。"
          />
        </div>
      </div>
    </>
  );
}
