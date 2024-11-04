const 시작_시간 = new Date();

function setTime() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);
  const 분 = 흐른_시간.getMinutes().toString();
  const 초 = 흐른_시간.getSeconds().toString();
  const time = document.querySelector("#time");
  time.innerText = `Time: ${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}

//주기성 주기적으로 호출한다
setInterval(setTime, 1000); //milli second

/*1회성
setTimeout(sayHello, 1000);*/
