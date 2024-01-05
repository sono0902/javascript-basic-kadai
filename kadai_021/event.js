function changeText() {
  // 2秒後にテキストを書き換える
  setTimeout(function() {
    document.getElementById("text").textContent = "新しい文章が表示されました！";
  }, 2000);
}

document.getElementById("btn").addEventListener("click", changeText);