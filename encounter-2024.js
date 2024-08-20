let classNavBtn = $("button[u-tabs-element='nav-btn']");
let classNavBtnActive;
let classContent = $("div[u-tabs-element='content']");
let youtube_id;
let classIndex = 0;


classNavBtnActive = classNavBtn.eq(classIndex);
youtube_id = classNavBtnActive.attr('u-tabs-youtubeid');
classContent.hide();
classContent.eq(classIndex).show();
classNavBtnActive.addClass("class_episode_nav_btn_active");
classContent.children("iframe").attr("src", "https://www.youtube-nocookie.com/embed/"+youtube_id);

classNavBtn.on("click", function () {
  
  $("div[u-tabs-element='content'] > iframe").each(function() {
    $(this).attr('src', '');
  });
  
  classNavBtnActive.removeClass("class_episode_nav_btn_active");
  classNavBtnActive = $(this);
  classIndex = classNavBtnActive.parent().index();
  youtube_id = classNavBtnActive.attr("u-tabs-youtubeid");
  classContent.hide();
  classContent.eq(classIndex).show();
  classNavBtnActive.addClass("class_episode_nav_btn_active");
  $("body").scrollTo($("#encounter2024_videos"), 300, {offset:-52});
  classContent.children("iframe").attr("src", "https://www.youtube-nocookie.com/embed/"+youtube_id);  
});