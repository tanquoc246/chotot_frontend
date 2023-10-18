"use client";

import Image from "next/image";

interface TabProps {
  label: string;
  icon?: string;
}
const Tab: React.FC<TabProps> = ({ label, icon }) => {
  return (
    <button
      className={`
       flex 
       flex-row 
       gap-1
      `}
    >
      <Image src={`${icon}`} alt="Icon" width={24} height={24} className="" />
      {label}
    </button>
  );
};
export default Tab;
