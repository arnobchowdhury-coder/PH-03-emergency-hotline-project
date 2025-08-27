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
const callData = []; 

const callFunction = document.getElementsByClassName('call')
for (const calls of callFunction) {
  calls.addEventListener('click', function () {
    const parentDiv = calls.closest('div')
    const serviceName = parentDiv.querySelector('.services-name').innerText;
     const callServicesName = parentDiv.querySelector(".callServices").innerText;
    const serviceNum = parentDiv.querySelector('.services-num').innerText;
    const coinValue = strToNum('coins');
    if (coinValue < 20) {
      alert('তোমার পর্যাপ্ত পরিমাণে কয়েন নাই । তোমাকে কল করার জন্য কমপক্ষে ২০ টা কয়েন থাকতে হবে।');
      return;
    }
    alert(`calling ${serviceName} ${serviceNum}...`);
    const totalCoin = coinValue - 20;
    document.getElementById('coins').innerText = totalCoin;
    
    const data = {
      name: callServicesName,
      num: serviceNum,
      date: new Date().toLocaleTimeString(),
    };

    callData.push(data);
    const parent = document.getElementById('history-container');
    parent.innerText = "";

    for (const value of callData) {
      const div = document.createElement('div');
      div.innerHTML = `
         <div id='div' class="flex justify-between items-center px-3 mb-3">
            
            <div class="">
              <h2 class="font-bold text-[14px]">${value.name}</h2>
              <p class="font-semibold text-xs text-gray-500">${value.num}</p>
            </div>
            <p class="text-xs">${value.date}</p>
          </div>
    `;
      parent.appendChild(div);
    }
  });
}
  
document.getElementById('clear').addEventListener("click",function(){
  const parent = document.getElementById("history-container");
  parent.innerText = ''; 
  callData.length=0;
})
  


  
  