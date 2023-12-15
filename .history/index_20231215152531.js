// Bài tập 1
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính lương
 * + tạo biến để tính lương: lương 1 ngày * số ngày làm
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */
function tinhLuong() {
  // B1:
  var luongMotNgay = document.getElementById("luong-mot-ngay").value;
  var soNgayLam = document.getElementById("so-ngay-lam").value;
  // B2, B3:
  var luongNhanDuoc = document.getElementById("luong-nhan-duoc");
  luongNhanDuoc.innerText = luongMotNgay * soNgayLam;
}
// Bài tập 2
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính giá trị trung bình
 * + tạo biến để tính giá trị trung bình: tổng các giá trị đã nhập / số giá trị đã nhập
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */
function tinhTrungBinh()