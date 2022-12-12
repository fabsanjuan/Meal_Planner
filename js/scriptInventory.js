/*
Update inventory button.
--------------------------------*/
function openInvForm() {
  document.getElementById("invPopup").style.display = "block";
  document.getElementById("invPopup").style.position = "absolute";
  document.getElementById("invPopup").style.top = "385px";
  document.getElementById("invPopup").style.left = "200px";
}
function closeInvForm() {
  document.getElementByID("invPopup").style.display = "none";
}
