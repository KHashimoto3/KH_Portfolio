import { SectionTitle } from "@/components/header/sectionTitle";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full p-8 bg-gradient-to-r from-red-600 to-red-800"
    >
      <SectionTitle text="Contact" />
      <div className="text-center text-white">
        <p>ご連絡はこちらまでお願いします。</p>
      </div>
    </div>
  );
};
