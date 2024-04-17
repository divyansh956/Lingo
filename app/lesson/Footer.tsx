import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle } from "lucide-react";
import { useAudio, useKey, useMedia } from "react-use";

type Props = {
  onCheck: () => void;
  status: "correct" | "wrong" | "none" | "completed";
  disabled?: boolean;
  lessonId?: number;
};

const Footer = ({ disabled, onCheck, status, lessonId }: Props) => {
  const isMobile = useMedia("(max-width: 1024px)");
  useKey("Enter", onCheck, {}, [onCheck]);

  return (
    <footer
      className={cn(
        "lg:h-[140px] h-[100px] border-t-2",
        status === "correct" && "bg-green-100 border-transparent",
        status === "wrong" && "bg-rose-100 border-transparent"
      )}
    >
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Nicely done!
          </div>
        )}
        {status === "wrong" && (
          <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
            <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
            Try again.
          </div>
        )}
        {status === "completed" && (
          <Button
            size={isMobile ? "sm" : "lg"}
            variant="default"
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            Practice again
          </Button>
        )}
        <Button
          disabled={disabled}
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          className="ml-auto"
          variant={status === "wrong" ? "danger" : "secondary"}
        >
          {status === "completed" && "Continue"}
          {status === "none" && "Check"}
          {status === "correct" && "Next"}
          {status === "wrong" && "Retry"}
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
