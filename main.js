// Lắng nghe sự kiện click trên tab
// Tạo ra 2 biến $ và $$ để rút gọn việc tìm các "node element"

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy ra tất cả elements của tab-item
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
// Load trước line và chiều dài line bằng với tab active đầu
const tabActive = $(".tab-item.active");
const line = $(".tabs .line");
// Tạo độ dài line tương ứng với tab
requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
  });
  

// Lắng nghe sự kiện trên những tab
tabs.forEach((tab, index) => {
    const pane = panes[index];
  
    tab.onclick = function () {
    // Mỗi lần click vào tab thì ta có thể lấy được content tương ứng

    // Kiểm tra có elements node nào có tab active không
    // Nếu có thì bỏ đi
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});








// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340

