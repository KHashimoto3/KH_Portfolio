import { Button } from "../button/button";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

export const ActivityLandscapeCard = (props: Props) => {
  const { imgUrl, title, text } = props;
  return (
    <div className="w-100 h-52 flex flex-row drop-shadow-lg rounded-lg bg-white">
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
          className="w-full h-1/3 flex justify-center items-center"
        >
          <p className="text-sky-700 text-xl font-bold">{title}</p>
        </div>
        <div id="card-text" className="w-full h-1/3 text-left px-2">
          <p className="text-sm">{text}</p>
        </div>
        <div
          id="card-button"
          className="w-full h-1/3 p-3 flex justify-end items-center"
        >
          <Button text="詳しく見る" />
        </div>
      </div>
    </div>
  );
};
