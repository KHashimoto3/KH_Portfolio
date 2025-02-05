type Props = {
  text: string;
  onClick?: () => void;
};

export const MoreButton = (props: Props) => {
  const { text, onClick } = props;
  return (
    <button
      className="w-40 h-10 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-2xl hover:opacity-50 duration-150"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
