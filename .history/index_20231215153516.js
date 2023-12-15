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
function tinhTrungBinh() {
    var soThu1 = document.getElementById("so-thu-1").value
    var soThu2 = document.getElementById("so-thu-2").value
    var soThu3 = document.getElementById("so-thu-3").value
    var soThu4 = document.getElementById("so-thu-4").value
    var soThu5 = document.getElementById("so-thu-5").value

    var trungBinh = document.getElementById("ket-qua")
        (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5
    

}