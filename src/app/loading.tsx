"use client";

import { LoadingRing } from "@/components/Shared/LoadingRing";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent">
      <LoadingRing
        size={48}
        color="#1c9876"
        secondaryColor="#b49273"
        className=""
      />
    </div>
  );
}
