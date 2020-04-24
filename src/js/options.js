// Saves options to chrome.storage
function save_options() {
  var urlDiscord = document.getElementById("urlDiscord").value;
  localStorage.setItem("urlDiscord", urlDiscord);
  chrome.runtime.reload();
}

document.addEventListener("DOMContentLoaded", function (event) {
  var urlDiscord = localStorage.getItem("urlDiscord");

  urlDiscord = document.getElementById("urlDiscord").value = urlDiscord;

  document.getElementById("save").addEventListener("click", save_options);
});
