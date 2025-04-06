import Image from "next/image";

type Props = {
  title: string;
  text: string;
  imgUrl: string;
};

export const ActivityDetailItem = (props: Props) => {
  const { title, text, imgUrl } = props;
  return (
    <div className="w-full mb-8">
      <p className="text-lg font-bold bg-sky-700 text-white p-2 my-3">
        {title}
      </p>
      <p>{text}</p>
      <img src={imgUrl} alt="activity" className="w-80 h-auto block mx-auto" />
    </div>
  );
};
