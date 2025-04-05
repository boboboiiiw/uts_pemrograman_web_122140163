import { useToast } from "../context/ToastContext";

const GlobalToast = () => {
  const { toast } = useToast();

  if (!toast.visible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-[#F5F8F6] text-[#3B4F44] px-8 py-2.5 rounded shadow-sm border border-[#BFD8CC]/20 animate-slide-down">
        {toast.message}
      </div>
    </div>
  );
};

export default GlobalToast;
