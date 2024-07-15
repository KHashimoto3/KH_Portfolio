import { SectionTitle } from "@/components/header/sectionTitle";

export const AboutMe = () => {
  return (
    <div id="about-me" className="w-full p-8 bg-white">
      <SectionTitle text="About Me" />
      <div className="text-center">
        <p>私について紹介します。</p>
      </div>
    </div>
  );
};
