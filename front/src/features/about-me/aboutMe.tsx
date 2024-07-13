import { SectionTitle } from "@/components/header/sectionTitle";

export const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="w-full p-8 bg-gradient-to-r from-green-600 to-green-800"
    >
      <SectionTitle text="About Me" />
      <div className="text-center text-white">
        <p>私について紹介します。</p>
      </div>
    </div>
  );
};
