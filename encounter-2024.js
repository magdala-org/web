let classNavBtn = $("button[u-tabs-element='nav-btn']");
let classNavBtnActive;
let classContent = $("div[u-tabs-element='content']");
let youtube_id;
let classIndex = 0;

classNavBtnActive = classNavBtn.eq(classIndex);
youtube_id = classNavBtnActive.attr('u-tabs-youtubeid');
classNavBtnActive.addClass("u-tabs-active");
classContent.children("iframe").attr("src", "https://www.youtube-nocookie.com/embed/"+youtube_id);

classNavBtn.on("click", function () {
  
  classNavBtnActive.removeClass("u-tabs-active");
  classNavBtnActive = $(this);
  youtube_id = classNavBtnActive.attr("u-tabs-youtubeid");
  classNavBtnActive.addClass("u-tabs-active");
  $("body").scrollTo($("#encounter2024_videos"), 300, {offset:-47});
  classContent.children("iframe").attr("src", "https://www.youtube-nocookie.com/embed/"+youtube_id);  
});