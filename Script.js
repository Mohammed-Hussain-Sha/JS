function changeMessage() {
  let msg = document.getElementById("message");
  msg.style.color = "blue";
  msg.style.fontWeight = "bold";
  msg.style.fontSize = "24px";
  msg.style.fontFamily = "Verdana, Arial";
  msg.style.border = "2px solid red";
  msg.textContent = "Content is now updated with JS";
}