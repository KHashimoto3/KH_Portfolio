type Props = {
  text: string;
  onClick?: () => void;
};

export const Button = (props: Props) => {
  const { text, onClick } = props;
  return (
    <button
      className="w-28 h-10 bg-gradient-to-r from-blue-500 to-sky-500 text-white rounded-lg hover:opacity-50 duration-150"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
