import { SectionTitle } from "@/components/header/sectionTitle";

export const ActivityPickup = () => {
  return (
    <div id="activity-pickup" className="container m-8">
      <SectionTitle text="Activity Pickup" />
      <div className="text-center">
        <p>
          私の取り組んでいる活動のうち、特にみていただきたい内容をピックアップしています。
        </p>
      </div>
    </div>
  );
};
