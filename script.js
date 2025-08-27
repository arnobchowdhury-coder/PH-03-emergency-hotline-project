function strToNum(id) {
  const numVar = parseInt(document.getElementById(id).innerText);
  return numVar;
}

const copyIcons = document.querySelectorAll("i.fa-copy");
copyIcons.forEach(function (icon) {
  const copyButton = icon.closest("button");

  copyButton.addEventListener("click", function () {
    const parentCard = copyButton.closest("div");

    const allHeadings = parentCard.querySelectorAll("h2");

    const number = allHeadings[1].innerText;

    navigator.clipboard.writeText(number);

    alert("নাম্বার কপি হয়েছে: " + number);
    const num = strToNum('copy-num')
    const totalCopy = num + 1;
    document.getElementById('copy-num').innerText = totalCopy;
  });
});
const allHart = document.getElementsByClassName("hart");
for (const hart of allHart) {
  hart.addEventListener("click", function () {
    const hartValue = strToNum("hart-value");
    const final = hartValue + 1;
    document.getElementById("hart-value").innerText = final;
  });
}

//call function

const callFunction = document.getElementsByClassName('call')
for (const calls of callFunction) {
  calls.addEventListener('click', function () {
    const parentDiv = calls.closest('div')
    const serviceName = parentDiv.querySelector('service-name').innerText;
    const serviceNumber = parentDiv.querySelector('service-number').innerText;
    const coinValue = strToNum('coins');
    if (coinValue < 20) {
      alert('তোমার পর্যাপ্ত পরিমাণে কয়েন নাই । তোমাকে কল করার জন্য কমপক্ষে ২০ টা কয়েন থাকতে হবে।');
      return;
    }
    alert(`calling ${serviceName} ${serviceNumber}`);
    const totalCoin = coinValue - 20;
    document.getElementById('coins').innerText = totalCoin;
    }) 
  


   }
   

