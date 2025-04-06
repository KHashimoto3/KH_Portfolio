"use client";

import { PageHeader } from "@/components/header/pageHeader";
import { SectionTitle } from "@/components/header/sectionTitle";
import { ActivityDetail } from "@/features/activity-detail/activityDetail";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  return (
    <>
      <PageHeader />
      <div id="activity" className="w-full p-8 bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center w-full h-40">
          <h1 className="text-center text-5xl">Activityのタイトルが入る</h1>
        </div>
        <div
          id="activity-main"
          className="w-9/12 text-left m-auto bg-slate-400"
        >
          <p>このページのパスパラメータidの値は、{params.id}です。</p>
        </div>
        <div className="w-9/12 m-auto h-auto">
          <ActivityDetail />
        </div>
      </div>
    </>
  );
}
