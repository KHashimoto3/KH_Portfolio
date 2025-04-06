"use client";

import { PageHeader } from "@/components/header/pageHeader";
import { ActivityDetail } from "@/features/activity-detail/activityDetail";

export default function Page() {
  return (
    <>
      <PageHeader />
      <div id="activity" className="w-full p-8 bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center w-full h-40">
          <h1 className="text-center text-5xl">Activityのタイトルが入る</h1>
        </div>
        <div className="w-9/12 m-auto h-auto">
          <ActivityDetail />
        </div>
      </div>
    </>
  );
}
