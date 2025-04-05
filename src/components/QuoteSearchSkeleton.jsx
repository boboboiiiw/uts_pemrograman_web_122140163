const SkeletonBox = ({ className = "" }) => (
  <div className={`bg-[#D8E2DA] animate-pulse rounded-md ${className}`} />
);

const QuoteCardSkeleton = ({ type = "A" }) => {
  return type === "A" ? (
    <div className="bg-[#F5F8F6] rounded-2xl p-6 space-y-4 shadow">
      <SkeletonBox className="h-10 w-1/2 mx-auto" />
      <SkeletonBox className="h-6 w-1/3 ml-auto" />
      <div className="flex gap-3 mt-4">
        <SkeletonBox className="h-8 w-8 rounded-full" />
        <SkeletonBox className="h-8 w-8 rounded-full" />
      </div>
    </div>
  ) : (
    <div className="bg-gradient-to-br from-[#DCE8E0] to-[#F0F7F2] p-6 rounded-xl shadow space-y-3">
      <SkeletonBox className="h-6 w-full" />
      <SkeletonBox className="h-5 w-1/3 ml-auto" />
      <div className="flex gap-3 mt-4">
        <SkeletonBox className="h-8 w-8 rounded-full" />
        <SkeletonBox className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
};

const QuoteSearchSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {Array.from({ length: 6 }, (_, i) => (
      <QuoteCardSkeleton key={i} type={i % 3 === 0 ? "A" : "B"} />
    ))}
  </div>
);

export default QuoteSearchSkeleton;
