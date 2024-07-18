import { Card } from "@/components/card/card";
import { SectionTitle } from "@/components/header/sectionTitle";

export const ActivityPickup = () => {
  return (
    <div id="activity-pickup" className="w-full p-8 bg-white">
      <SectionTitle text="Activity Pickup" />
      <div className="text-center">
        <p>
          私の取り組んでいる活動のうち、特にみていただきたい内容をピックアップしています。
        </p>
        <Card />
      </div>
    </div>
  );
};
