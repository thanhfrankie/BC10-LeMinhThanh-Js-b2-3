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
    var soLuongUSD = document.getElementById("so-luong-USD").value *1

    var quyDoiSangVND = soLuongUSD * giaMotUSD

    var soLuongVND = document.getElementById("so-luong-VND")
    soLuongVND.innerText = quyDoiSangVND
}

// Bài tập 4
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính chu vi, diện tích hình chữ nhật
 * + tạo biến để tính chu vi: chu vi = (chiều dài + chiều rộng)x2
 * + tạo biến để tính diện tích: diện tích = chiều dài * chiều rộng
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */
function tinh() {
    var chieuDai = document.getElementById("chieu-dai").value *1 
    var chieuRong = document.getElementById("chieu-rong").value * 1 
    
    var chuVi = (chieuDai + chieuRong) * 2
    var dienTich = chieuDai * chieuRong
    var ketQua = document.getElementById("ket-qua-nhan-duoc")
    ketQua.innerText = `Diện tích: ${dienTich}, Chu vi: ${chuVi} `
}
// Bài tập 5
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính tổng các chữ số của số có 2 chữ số
 * + tạo biến để tính tổng các chữ số của số đã nhập: 
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả
 */
function tinhTong() {
    var soCanTinh = document.getElementById("so").value * 1
    var tong = soCanTinh / 10 + soCanTinh % 10
    var hienThiKetQua = doc
}