document.addEventListener("DOMContentLoaded", function (event) {
  var urlDiscord = localStorage.getItem("urlDiscord");
  if (!urlDiscord || urlDiscord == "" || urlDiscord == "null") {
    document.body.innerHTML = `<div class="config">
    You need to configure the application <a href="options.html" target="_blank">Option</a>
  </div>;`;
    return;
  }
  iframe = document.createElement("iframe");
  iframe.src = "https://discordapp.com/login";
  document.body.appendChild(iframe);
  iframe.contentWindow.focus();
});
