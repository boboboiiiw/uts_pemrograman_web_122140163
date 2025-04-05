const SkeletonBox = ({ className = "" }) => (
  <div className={`bg-gray-300 animate-pulse rounded-md ${className}`} />
);

const QuoteDetailSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <SkeletonBox className="w-32 h-4" />

      <div className="bg-[#F5F8F6] border border-[#D6E4DC] rounded-lg shadow-md p-8 space-y-6">
        <SkeletonBox className="h-8 w-3/4 mx-auto" />
        <SkeletonBox className="h-5 w-1/3 ml-auto" />

        <div className="flex justify-center gap-4 mt-4">
          <SkeletonBox className="h-10 w-36" />
          <SkeletonBox className="h-10 w-44" />
        </div>
      </div>
    </div>
  );
};

export default QuoteDetailSkeleton;
