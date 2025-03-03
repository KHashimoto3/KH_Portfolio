import { SectionTitle } from "@/components/header/sectionTitle";

import Image from "next/image";
import Programming from "../../../public/skill-img/programming.png";
import MovieEdit from "../../../public/skill-img/movie-edit.png";
import Other from "../../../public/skill-img/other.png";
import { MoreButton } from "@/components/button/moreButton";

export const MySkills = () => {
  return (
    <div id="my-skills" className="w-full p-8 bg-white dark:bg-gray-900">
      <SectionTitle text="My Skills" />
      <div className="text-center ">
        <p>私の持つスキルを紹介します。</p>
        <div className="flex flex-row mx-8 gap-3 justify-center items-center">
          <div className="flex flex-col mx-8 gap-3 justify-center items-center">
            <div>
              <Image src={Programming} alt="programming" width={200} />
            </div>
            <div>
              <p className="text-2xl font-bold">プログラミング</p>
            </div>
            <div>
              <p>プログラミングは高校以来ずっと行ってきています。</p>
            </div>
            <div>
              <MoreButton text="詳しく見る" />
            </div>
          </div>
          <div className="flex flex-col mx-8 gap-3 justify-center items-center">
            <div>
              <Image src={MovieEdit} alt="movie-edit" width={200} />
            </div>
            <div>
              <p className="text-2xl font-bold">動画編集</p>
            </div>
            <div>
              <p>中学校の時から、いろいろな動画を作ってきました。</p>
            </div>
            <div>
              <MoreButton text="詳しく見る" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
