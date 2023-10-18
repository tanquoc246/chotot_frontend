"use client";
import Image from "next/image";
interface UserMenuProps {
  icon: string;
  label: string;
  iconfoot: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ icon, label, iconfoot }) => {
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
      <Image
        src={`${iconfoot}`}
        alt="Iconfoot"
        width={8}
        height={8}
        className="pt-[10px]"
      />
    </button>
  );
};
export default UserMenu;
