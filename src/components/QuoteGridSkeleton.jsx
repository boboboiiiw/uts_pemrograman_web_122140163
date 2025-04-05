const SkeletonBox = ({
  height = "h-24",
  width = "w-full",
  rounded = "rounded-xl",
  className = "",
}) => (
  <div
    className={`bg-[#D8E2DA] animate-pulse ${height} ${width} ${rounded} ${className}`}
  ></div>
);

const QuoteCardASkeleton = () => (
  <div className="bg-[#F5F8F6] rounded-2xl shadow-xl border border-[#CDE3D4] p-8 h-full flex flex-col justify-center relative">
    <SkeletonBox height="h-10" className="my-6" />
    <SkeletonBox height="h-6" width="w-1/2" className="self-end mt-6" />
    <div className="flex gap-2 mt-4">
      <SkeletonBox height="h-8" width="w-8" rounded="rounded-full" />
      <SkeletonBox height="h-8" width="w-8" rounded="rounded-full" />
    </div>
  </div>
);

const QuoteCardBSkeleton = () => (
  <div className="bg-gradient-to-br from-[#DCE8E0] to-[#F0F7F2] p-6 rounded-xl shadow-lg relative">
    <SkeletonBox height="h-6" className="mb-4" />
    <SkeletonBox height="h-5" width="w-1/3" className="ml-auto" />
    <div className="flex gap-2 mt-4">
      <SkeletonBox height="h-8" width="w-8" rounded="rounded-full" />
      <SkeletonBox height="h-8" width="w-8" rounded="rounded-full" />
    </div>
  </div>
);

const QuoteGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
      {/* Skeleton besar kiri */}
      <div className="md:row-span-1">
        <QuoteCardASkeleton />
      </div>

      {/* Tiga skeleton kanan */}
      <div className="flex flex-col gap-6">
        <QuoteCardBSkeleton />
        <QuoteCardBSkeleton />
        <QuoteCardBSkeleton />
      </div>
    </div>
  );
};

export default QuoteGridSkeleton;
