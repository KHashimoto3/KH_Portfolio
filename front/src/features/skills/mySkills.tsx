import { SectionTitle } from "@/components/header/sectionTitle";

export const MySkills = () => {
  return (
    <div
      id="my-skills"
      className="w-full p-8 bg-gradient-to-r from-sky-600 to-sky-800"
    >
      <SectionTitle text="My Skills" />
      <div className="text-center text-white">
        <p>私の持つスキルを紹介します。</p>
      </div>
    </div>
  );
};
