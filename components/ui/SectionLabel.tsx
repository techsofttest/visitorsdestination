import React from "react";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-[#8B181B]">
      {/* <span className="h-px w-8 bg-[#FDB414]" /> */}
      {children}
    </div>
  );
}
