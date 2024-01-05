  let num = Math.floor(Math.random() * 16);
  if (num==0){
    console.log(num);
  }
  else if (num%3==0 && num%5==0) {
    console.log(num + "は3と5の倍数です");
  }
  else if (num%3==0) {
    console.log(num + "は3の倍数です");
  }
  else if (num%5==0) {
    console.log(num + "は5の倍数です");;
  }
  else {
    console.log(num);
  }
