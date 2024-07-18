import Image from "next/image";
import cardImage from "../../../public/home-img.jpg";
import { Button } from "../button/button";

export const Card = () => {
  return (
    <div className="w-72 h-96 drop-shadow-lg rounded-lg bg-white">
      <div id="card-img" className="w-full h-3/6 rounded-t-lg bg-stone-300">
        <Image
          src={cardImage}
          alt="card"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div
        id="card-title"
        className="w-full h-1/6 flex justify-center items-center"
      >
        <p className="text-sky-700 text-xl font-bold">学園祭ホームページ制作</p>
      </div>
      <div id="card-text" className="w-full h-1/6 text-left px-2">
        <p className="text-sm">
          説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
        </p>
      </div>
      <div
        id="card-button"
        className="w-full h-1/6 p-3 flex justify-end items-center"
      >
        <Button text="詳しく見る" />
      </div>
    </div>
  );
};
