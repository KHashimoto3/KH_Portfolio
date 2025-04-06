type Props = {
  title: string;
  text: string;
  imgUrl: string[];
  imgAlt: string[];
  link: string[];
  linkText: string[];
};

export const ActivityDetailItem = (props: Props) => {
  const { title, text, imgUrl, imgAlt, link, linkText } = props;
  return (
    <div className="w-full mb-8">
      <p className="text-lg font-bold bg-sky-700 text-white p-2 my-3">
        {title}
      </p>
      <p>{text}</p>
      {imgUrl.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={imgAlt[index] || "活動の画像"}
          className="w-80 h-auto block mx-auto"
        />
      ))}
      <ul>
        {link.map((url, index) => (
          <li>
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {linkText[index]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
