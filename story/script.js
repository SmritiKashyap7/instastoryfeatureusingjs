var arr = [
  {
    pic: "https://images.unsplash.com/photo-1639074771231-063f58f460f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1638984849686-c4d36d202b16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",
  },
  {
    pic: "https://images.unsplash.com/photo-1512413316925-fd4b93f31521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1580651214613-f4692d6d138f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    pic: "https://images.unsplash.com/photo-1639426236474-b51627e72016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];
function showdp() {
  var clutter = "";
  arr.forEach(function (elem, index) {
    clutter += ` <div class="dp">
    <img id=${index}  src="${elem.pic}" alt="" />
    
  </div>`;
  });
  document.querySelector("#icon").innerHTML = clutter;
}
showdp();
document.querySelector("#icon").addEventListener("click", function (dets) {
  showstory(Number(dets.target.id));
});
var prg = document.querySelector(".width");
var prgw;
function showstory(index) {
  var j = index;
  if (j < arr.length) {
    prgw = 0;
    document.querySelector(".story img").setAttribute("src", arr[index].pic);
    document.querySelector(".stories").style.display = "initial";
    var time = setInterval(nxtstory, 20);
    function nxtstory() {
      if (prgw < 100) {
        prgw++;
        prg.style.width = prgw + "%";
      } else {
        clearInterval(time);
        index++;
        showstory(index);
      }
    }
  } else {
    document.querySelector(".stories").style.display = "none";
  }
}
