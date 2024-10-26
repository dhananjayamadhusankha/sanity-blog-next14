import Link from "next/link";
import { NavbarProps } from "sanity";
import { Undo2 } from "lucide-react";

const CustomNavbar: React.FC<NavbarProps> = (props) => {
  return (
    <div
      style={{ backgroundColor: "#1a1a1a", color: "#fff" }}
      className="font-primaryFont"
    >
      <div className="flex items-center justify-between px-5 py-2 bg-[#1a1a1a]">
        <Link href="/" className="flex items-center text-[#ec5444] font-medium">
          <Undo2 className="h-5 w-5 mr-2 text-[#ec5444]" /> Go to the WebSite
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};

export default CustomNavbar;
