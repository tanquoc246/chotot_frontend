"use client";
import Button from "../Button";
import Image from "next/image";

interface SearchProps {
  label?: string;
  icon: string;
}

const Search: React.FC<SearchProps> = ({ label, icon }) => {
  return (
    <div className="w-full relative">
      <input
        placeholder={label}
        src={icon}
        className={`
      w-full
      py-2
      bg-white
      pr-[51px]
      rounded-md
      ${label ? "text-sm font-normal text-[#9B9B9B] pl-[10px]" : ""}
       
       `}
      />
      {icon && (
        <Image
          src={icon}
          alt="search"
          width={48}
          height={28}
          className="pr-1 absolute top-[5px] right-1"
        />
      )}
    </div>
  );
};
export default Search;
