import { Button } from "../button/button";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

export const Card = (props: Props) => {
  const { imgUrl, title, text } = props;
  return (
    <div className="w-72 h-96 drop-shadow-lg rounded-lg bg-white dark:bg-gray-800">
      <div id="card-img" className="w-full h-3/6 rounded-t-lg bg-stone-300">
        <img
          src={imgUrl}
          alt="card"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div
        id="card-title"
        className="w-full h-1/6 flex justify-center items-center"
      >
        <p className="text-sky-700 dark:text-white text-xl font-bold">
          {title}
        </p>
      </div>
      <div id="card-text" className="w-full h-1/6 text-left px-2">
        <p className="text-sm">{text}</p>
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
