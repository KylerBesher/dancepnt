// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}




$(document).ready(function () {
  $("#burger").click(function () {
    burger();
  });
});
$(window).resize(function () {
  if ($(window).width() > 959) {
    $("#sideNav").slideUp();
    $("#burger").removeClass("is-active");
  }
});

function burger() {
  $("#sideNav").slideToggle();
  $("#burger").toggleClass("is-active");
}
