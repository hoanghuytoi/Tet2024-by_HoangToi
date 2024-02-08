const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Tui biết ngay bạn sẽ lì xì Tết cho tui mà! 😘 ";

    // Ẩn đi hình ảnh gif
    gif.style.display = "none";

    // Hiển thị hình ảnh QR Code khi nhấn OK
    const qrCodeImg = document.getElementById("qrCode");
    qrCodeImg.style.display = "block";
    qrCodeImg.src = "HinhAnh/QRCode.png"; // Đường dẫn tới hình ảnh QR Code trong thư mục "HinhAnh"
});

let scaleFactor = 2; // Biến để lưu tỉ lệ tăng kích thước
const maxScaleFactor = 5; // Tỉ lệ tối đa có thể tăng

noBtn.addEventListener("mouseover", () => {
    // Di chuyển chữ "Đéo" (noBtn)
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Tăng kích thước của nút "OK" và chữ khi di chuột vào "Đéo"
    scaleFactor += 0.3; // Tăng tỉ lệ mỗi lần di chuột vào
    if (scaleFactor > maxScaleFactor) {
        scaleFactor = maxScaleFactor; // Giới hạn tỉ lệ tối đa
    }
    yesBtn.style.transform = `scale(${scaleFactor})`;
    yesBtn.style.transition = "transform 0.3s ease";
});



