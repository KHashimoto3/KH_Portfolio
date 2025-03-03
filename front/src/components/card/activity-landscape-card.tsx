import { Button } from "../button/button";

type Props = {
  imgUrl: string;
  title: string;
  tagName: string;
  text: string;
};

export const ActivityLandscapeCard = (props: Props) => {
  const { imgUrl, title, tagName, text } = props;
  return (
    <div className="w-100 h-56 flex flex-row drop-shadow-lg rounded-lg bg-white dark:bg-gray-800">
      <div id="card-img" className="w-1/2 h-full">
        <img
          src={imgUrl}
          alt="card"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div id="card-right" className="w-1/2 h-full flex flex-col">
        <div
          id="card-title"
          className="w-full h-10 flex justify-center items-center"
        >
          <p className="text-sky-700 dark:text-white text-xl font-bold">
            {title}
          </p>
        </div>
        <div id="card-tag" className="w-full h-8 text-left px-2 my-2">
          <p className="text-sm text-sky-700 dark:text-white ">#{tagName}</p>
        </div>
        <div id="card-text" className="w-full h-28 text-left px-2">
          <p className="text-sm">{text}</p>
        </div>
        <div
          id="card-button"
          className="w-full h-10 my-2 p-3 flex justify-end items-center"
        >
          <Button text="詳しく見る" />
        </div>
      </div>
    </div>
  );
};
