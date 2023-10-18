"use client";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Search from "./Search";
import Button from "../Button";
import Tab from "./Tab";
import Container from "../Container";
const Navbar = () => {
  return (
    <div className="fixed w-full bg-[#FFBA00] z-10 shadow-sm">
      <div className="py-4 ">
        <Container>
          <div className="flex flex-row items-center justify-between">
            <Logo />
            <div className="flex flex-row gap-7 ">
              <Tab icon="/icons/shopping.svg" label="Dạo chợ" />
              <Tab icon="/icons/manage.svg" label="Quản lí tin" />
              <Tab icon="/icons/bell.svg" label="Thông báo" />
              <Tab icon="/icons/chat1.svg" label="Chat" />
              <UserMenu
                icon="/icons/account.svg"
                label="Tài khoản"
                iconfoot="/icons/Polygon.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-center gap-[51px]">
            <Search
              label="Tìm kiếm trên Chợ Tốt Đài Loan"
              icon="/icons/Search.svg"
            />
            <Button icon="/icons/pen.svg" label="ĐĂNG TIN" />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
