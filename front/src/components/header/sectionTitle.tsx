type Props = {
  text: string;
};

export const SectionTitle = (props: Props) => {
  const { text } = props;
  return (
    <div className="m-8">
      <h1 className="text-center text-5xl font-light bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text">
        {text}
      </h1>
    </div>
  );
};
