var buy = document.querySelectorAll('.buy');
//for(var i = 0; i < buy.length; i++) {
//buy[i].onclick = add;
//}

Array.from(buy).forEach(function(el, i, buy) {
  el.addEventListener('click', function (e) {
    el.classList.toggle('add');
    var add = document.querySelectorAll('.add');
    for (var a = 0; a <= add.length; a++) {
      var count = document.querySelector('.count');
      count.style.display = 'block';
      count.innerHTML = a;
      if(a == 0) {
        count.style.display = 'none';
      }
    }
  })
});