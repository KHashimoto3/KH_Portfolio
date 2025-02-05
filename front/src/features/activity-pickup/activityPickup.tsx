import { Card } from "@/components/card/card";
import { SectionTitle } from "@/components/header/sectionTitle";

export const ActivityPickup = () => {
  return (
    <div id="activity-pickup" className="w-full p-8 bg-white">
      <SectionTitle text="Activity Pickup" />
      <div className="text-center flex flex-col justify-center">
        <p>
          私の取り組んでいる活動のうち、特にみていただきたい内容をピックアップしています。
        </p>
        <div className="mt-8 w-full flex justify-center items-center gap-x-8">
          <Card
            imgUrl="https://picsum.photos/200"
            title="活動1"
            text="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。"
          />
          <Card
            imgUrl="https://picsum.photos/200"
            title="活動2"
            text="説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。"
          />
        </div>
      </div>
    </div>
  );
};
