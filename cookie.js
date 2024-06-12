$(document).ready(function(){

  var cookieName = "magdala-cookie-accept";
  var cookieCloseBtn = $("button[u-cookie='close-button']");
  var cookieAcceptBtn = $("button[u-cookie='accept-button']");
  var cookieWrap = $("div[u-cookie='cookie-wrapper']");

  if (Cookies.get(cookieName) === undefined) cookieWrap.show();

  $(cookieAcceptBtn.add(cookieCloseBtn)).on('click', function(){
    Cookies.set(cookieName, 'accept', { expires: 365 });
    cookieWrap.hide();
  });
});
