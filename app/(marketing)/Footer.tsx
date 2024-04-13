import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="IN-India.svg"
            alt="logo"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          India
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="BD-Bangladesh.svg"
            alt="logo"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Bangladesh
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="FR-France.svg"
            alt="logo"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          France
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="GB-England.svg"
            alt="logo"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          England
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="RU-Russia.svg"
            alt="logo"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Russia
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
