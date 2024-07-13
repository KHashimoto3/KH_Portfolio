import { SectionTitle } from "@/components/header/sectionTitle";

export const ActivityPickup = () => {
  return (
    <div
      id="activity-pickup"
      className="w-full p-8 bg-gradient-to-r from-orange-600 to-orange-800"
    >
      <SectionTitle text="Activity Pickup" />
      <div className="text-center text-white">
        <p>
          私の取り組んでいる活動のうち、特にみていただきたい内容をピックアップしています。
        </p>
      </div>
    </div>
  );
};
