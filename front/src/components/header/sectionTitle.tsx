type Props = {
  text: string;
};

export const SectionTitle = (props: Props) => {
  const { text } = props;
  return (
    <div className="container m-8">
      <h1 className="text-center text-4xl">{text}</h1>
    </div>
  );
};
