"use client";
import Image from "next/image";
import Support from "./Support";
const Footer = () => {
  return (
    <div className="z-10 w-full fixed pt-6 ">
      <div className=" flex gap-24 justify-center w-[70%] mx-auto mt-5">
        <div className="list-none ">
          <h3 className="font-bold">HỖ TRỢ KHÁCH HÀNG</h3>
          <li>
            <a href="">Trung tâm trợ giúp</a>
          </li>
          <li>
            <a href="">An toàn mua bán</a>
          </li>
          <li>
            <a href="">Quy chế quyền riêng tư</a>
          </li>
          <li>
            <a href="">Quy định cần biết</a>
          </li>
          <li>
            <a href="">Liên hệ hỗ trợ</a>
          </li>
        </div>

        <div className="list-none">
          <h3 className="font-bold">VỀ CHỢ TỐT</h3>
          <li>
            <a href="">Giới thiệu</a>
          </li>
          <li>
            <a href="">Truyền thông</a>
          </li>
          <li>
            <a href="">Tuyển dụng</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </div>

        <div>
          <h3 className="font-bold">LIÊN KẾT</h3>
          <div className="flex gap-4">
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              width={32}
              height={32}
            />
            <Image src="/icons/Line.svg" alt="line" width={32} height={32} />
          </div>

          <h3 className="font-bold">CHỨNG NHẬN</h3>
          <Image
            src="/icons/good.svg"
            alt="chungnhan"
            width={130}
            height={40}
          />
        </div>
      </div>
      <hr />
      <div
        className="
        w-full 
        p-[10px] 
        items-center 
        justify-center 
        font-medium
        text-xs
        flex
        flex-col
        text-center
        "
      >
        <span>
          CÔNG TY TNHH BLUEGROUP VN - Người đại diện theo pháp luật: Dương Quốc
          Khánh; GPDKKD: 3101112925 do sở KH & ĐT Quảng Bình cấp ngày
          20/01/2022;GPMXH: 17/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày
          15/01/2019 - Chịu trách nhiệm nội dung: Trần Minh Ngọc. Chính sách sử
          dụng
        </span>
        <span>
          Địa chỉ: Số 2 Ngô Đức Kế, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí
          Minh, Việt Nam; Email: trogiup@chototdailoan.com - Tổng đài CSKH:
          19003003 (1.000đ/phút)
        </span>
      </div>
    </div>
  );
};
export default Footer;
