let classNavWrapper = $(".class_episode_nav_wrapper");
let classNavBtn = $("button[u-class-element='nav-btn']");
let classNavBtnActive;
let classContent = $("div[u-class-element='content']");
let youtube_id;
let classIndex = 0;


classNavBtnActive = classNavBtn.eq(classIndex);
youtube_id = classNavBtnActive.attr('u-class-youtubeid');

classContent.hide();
classContent.eq(classIndex).show();

classNavBtnActive.addClass("class_episode_nav_btn_active");

$("#" + youtube_id + "> iframe").attr('src', "https://www.youtube-nocookie.com/embed/"+youtube_id);


classNavBtn.on("click", function () {
  
  $('.class_episode_video > iframe').each(function() {
    $(this).attr('src', '');
  });
  
	classNavBtnActive.removeClass("class_episode_nav_btn_active");
	classNavBtnActive = $(this);
  classIndex = classNavBtnActive.parent().index();
  
  youtube_id = classNavBtnActive.attr('u-class-youtubeid');
  classContent.hide();
	classContent.eq(classIndex).show();
  classNavBtnActive.addClass("class_episode_nav_btn_active");
  classNavWrapper.scrollTo(classNavBtnActive, 300);
  $("body").scrollTo($("#class-episode"), 300, {offset:-52});
  $(".class_episode_video, div[u-class-youtubeid='" + youtube_id + "'] > iframe").attr('src', "https://www.youtube-nocookie.com/embed/"+youtube_id);  
});