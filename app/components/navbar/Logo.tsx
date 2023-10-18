"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
  return (
    <Image
      onClick={() => {}}
      src="/images/logo.svg"
      alt="Logo"
      className=""
      width={96}
      height={52}
    />
  );
};
export default Logo;
