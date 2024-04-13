import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {/* TODO : Add more flags */}
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/next.svg"
            alt="logo"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
