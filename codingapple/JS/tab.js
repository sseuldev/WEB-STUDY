var 버튼 = $(".tab-button");

function 탭열기(숫자) {
  버튼.removeClass("orange");
  $(".tab-content").removeClass("show");
  버튼.eq(숫자).addClass("orange");
  $(".tab-content").eq(숫자).addClass("show");
}

// for (let i = 0; i < 3; i++) {
//   버튼.eq(i).on("click", function () {
//     탭열기(i);
//   });
// }

$(".list").click(function (e) {
  탭열기(e.target.dataset.id);
});
