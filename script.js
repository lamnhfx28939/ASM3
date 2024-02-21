"use strict";

// cai dat phan an thong tin ca nhan
document.querySelector(".button-click").addEventListener("click", function () {
  // đặt chữ thành viết thường
  const email = document.querySelector(".email").value.toLowerCase();
  // kiem tra cau truc email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkmail = email.match(regex);

  // Khi khong nhap email
  if (!email) {
    document.querySelector(".input-email").textContent =
      "Hãy nhập email để xác thực";

    // Khi nhap sai dinh dang email
  } else if (!checkmail) {
    document.querySelector(".input-email").textContent =
      "Hãy nhập đúng định dạng email";

    // Khi nhap dung
  } else {
    document.querySelector(".thongtin").classList.remove("hide");
    document.querySelector(".add-email").classList.add("hide");
  }
});

// luot vao de hien nut view more
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";

  // xoa chu view more khi dua chuot qua
  // contains la chon thong tin khi co chua class hide
  if (viewMore.classList.contains("hide")) {
    viewMore.style.display = "none";
  }
}

// luot ra de an nut view more
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
  // viewMore.classList.remove("hide");
}

// Click vao view more de hien thong tin
//  hien thong tin view more dung cho 1 muc
// document.querySelector(".view-more").addEventListener("click", function () {
//   document.querySelector(".viewMore").classList.remove("hide");
// });
function handleViewMore(element) {
  // Hàm closest() chạy ngược lên phía trên cây DOM để tìm những phần tử phù hợp với tham số truyền vào
  const parentElement = element.closest(".border-1");
  const viewMore = parentElement.querySelector(".view-more");
  viewMore.classList.add("hide");

  const lessMore = parentElement.querySelector(".less-more");
  lessMore.style.display = "block";

  const content = parentElement.querySelectorAll(".viewMore");
  // forEach la lặp qua từng phần tử có trong mảng và xử lý chúng theo thứ tự
  content.forEach((element) => {
    element.style.display = "block";
  });
}
// Click vafo less more de an thong tin
function handleLessMore(element) {
  // Hàm closest() chạy ngược lên phía trên cây DOM để tìm những phần tử phù hợp với tham số truyền vào
  const parentElement = element.closest(".border-1");
  const lessMore = parentElement.querySelector(".less-more");
  lessMore.style.display = "none";

  const content = parentElement.querySelectorAll(".viewMore");
  content.forEach((element) => {
    element.style.display = "none";
  });
  // them chu view more khi dua chuot qua
  const viewMore = parentElement.querySelector(".view-more");
  viewMore.classList.remove("hide");
}
