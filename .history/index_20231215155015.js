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
    var soThu1 = document.getElementById("so-thu-1").value  *1
    var soThu2 = document.getElementById("so-thu-2").value  *1
    var soThu3 = document.getElementById("so-thu-3").value *1
    var soThu4 = document.getElementById("so-thu-4").value *1
    var soThu5 = document.getElementById("so-thu-5").value *1

    var trungBinh =   (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) /5
    var ketQua = document.getElementById("ket-qua-trung-binh")
    ketQua.innerText = trungBinh
}

// Bài tập 3
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính ra số lượng VND theo số USD đã nhập
 * + tạo biến để tính lượng VND: tổng VND = tổng USD *23500
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */
function quyDoiTien() {
    var giaMotUSD = 23500
    var soLuongUSD = document.getElementById("so-luong-USD").value

    var quyDoiSangVND = soLuongUSD * giaMotUSD

    var soLuongVND = 
}