let classNavWrapper = $(".class_episode_nav_wrapper");
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

$("div[u-tabs-element='content'], div[u-tabs-youtubeid='" + youtube_id + "'] > iframe").attr("src", "https://www.youtube-nocookie.com/embed/"+youtube_id);


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
  classNavWrapper.scrollTo(classNavBtnActive, 300);
  $("body").scrollTo($("#class-episode"), 300, {offset:-52});
  $("div[u-tabs-element='content'], div[u-tabs-youtubeid='" + youtube_id + "'] > iframe").attr("src", "https://www.youtube-nocookie.com/embed/"+youtube_id);  
});