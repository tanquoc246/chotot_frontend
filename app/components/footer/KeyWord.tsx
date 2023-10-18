"use client";

import axios from "axios";

axios
  .get("http://127.0.0.1:8000/api/customusers/")
  .then((response) => {
    // Khi yêu cầu thành công, response chứa thông tin phản hồi từ API
    console.log("Yêu cầu API thành công!");
    console.log("Dữ liệu người dùng:", response.data);
  })
  .catch((error) => {
    // Xử lý trường hợp yêu cầu thất bại
    console.error("Yêu cầu API thất bại:", error);
  });

const KeyWord = () => {
  return (
    <div className="w-full pt-32 px-48   ">
      <h3 className="text-[#777777] font-bold">Các từ khóa phổ biến</h3>
      <div className=" pl-3 grid grid-cols-3 gap-28 justify-center">
        <div className="text-xs font-normal text-[#777777]">
          <li>
            <a href="">Điện thoại cũ</a>
          </li>
          <li>
            <a href="">Điều hòa giá rẻ</a>
          </li>
          <li>
            <a href="">Máy giặt</a>
          </li>
          <li>
            <a href="">Xe ô tô</a>
          </li>
          <li>
            <a href="">Laptop cũ</a>
          </li>
          <li>
            <a href="">Điện thoại IPHONE</a>
          </li>
          <li>
            <a href="">Nhà nguyên căn</a>
          </li>
        </div>

        <div className="text-xs font-normal text-[#777777]">
          <li>
            <a href="">Phòng trọ</a>
          </li>
          <li>
            <a href="">Xe điện</a>
          </li>
          <li>
            <a href="">Tủ lạnh thanh lý</a>
          </li>
          <li>
            <a href="">Việc làm</a>
          </li>
          <li>
            <a href="">Điện thoại SAMSUNG</a>
          </li>
          <li>
            <a href="">Sách</a>
          </li>
          <li>
            <a href="">Thời trang</a>
          </li>
        </div>

        <div className="text-xs font-normal text-[#777777]">
          <li>
            <a href="">Việc làm Đài Nam</a>
          </li>
          <li>
            <a href="">Tai nghe</a>
          </li>
          <li>
            <a href="">Máy tính để bàn</a>
          </li>
          <li>
            <a href="">Xe máy</a>
          </li>
          <li>
            <a href="">Cho tặng miễn phí</a>
          </li>
          <li>
            <a href="">APPLE WATCH</a>
          </li>
          <li>
            <a href="">Đồng hồ thông minh</a>
          </li>
        </div>
      </div>
    </div>
  );
};
export default KeyWord;
