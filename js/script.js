// ページトップボタン（フェードイン・フェードアウト）
$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 100) {
    $("footer p.pagetop").fadeIn(500);
  } else {
    $("footer p.pagetop").fadeOut(500);
  }
});

/* モバイルメニュー（上下スライド） */
// .hmenuをクリックした時にナビゲーションが上下のスライドを自動実行
$(".hmenu").click(function () {
  $("nav").slideToggle(500);
  $(this).toggleClass("open");
});
