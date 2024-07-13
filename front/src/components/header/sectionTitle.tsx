type Props = {
  text: string;
};

export const SectionTitle = (props: Props) => {
  const { text } = props;
  return (
    <div className="m-8">
      <h1 className="text-center text-4xl text-white">{text}</h1>
    </div>
  );
};
