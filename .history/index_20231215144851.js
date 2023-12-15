// Bài tập 1
/**
 * B1: tạo biến, lấy giá trị từ input
 * B2: Tính lương
 * + tạo function để tính ra lương: lương 1 ngày * số ngày làm
 * + gán sự kiện click cho button
 * B3: hiển thị kết quả 
 */
// B1:
const luongMotNgay = document.getElementById("luong-mot-ngay").value
console.log("🥶 - luongMotNgay:", luongMotNgay)
const soNgayLam = document.getElementById("so-ngay-lam").value
console.log("🥶 - soNgayLam:", soNgayLam)

// B2:
function tinhLuong() {
    const luongNhanDuoc = document.getElementById("luong-nhan-duoc")
    luongNhanDuoc.innerText = luongMotNgay * soNgayLam
}