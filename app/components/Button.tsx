"use client";

import Image from "next/image";

interface ButtopProps {
  icon: string;
  label: string;
}
const Button: React.FC<ButtopProps> = ({ icon, label }) => {
  return (
    <div
      className={`
        w-[140px]
        h-[37px]
        flex
        flex-row
        rounded-sm
        px-2
        gap-2 
        bg-[#FF8800]
        ${
          label
            ? "font-extrabold justify-center items-center  text-sm text-white"
            : ""
        }`}
    >
      {icon && (
        <Image
          src={icon}
          alt="Buttonicon"
          width={16}
          height={16}
          className=""
        />
      )}
      {label}
    </div>
  );
};
export default Button;
