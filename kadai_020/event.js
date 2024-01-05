function changeText() {
  document.getElementById("text").textContent = "ボタンをクリックしました。";
}

document.getElementById("btn").addEventListener("click", changeText);