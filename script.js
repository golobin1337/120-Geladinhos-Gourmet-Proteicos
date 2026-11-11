// data do dia na barra (sempre a data atual do visitante)
(function(){
  var d=new Date();
  document.getElementById('hoje').textContent=String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+d.getFullYear();
})();

// categorias: toque no chip para ver a descrição
(function(){
  var chips=document.querySelectorAll('.chip'),out=document.getElementById('chipDesc');
  if(!out) return;
  chips.forEach(function(c){
    c.addEventListener('click',function(){
      chips.forEach(function(x){x.classList.remove('on')});
      c.classList.add('on');
      out.textContent=c.getAttribute('data-desc');
    });
  });
})();

// carrossel
(function(){
  var t=document.getElementById('track'),dots=document.querySelectorAll('#dots span');
  function step(){var s=t.querySelector('.slide');return s.offsetWidth+16;}
  document.querySelector('.car-btn.next').onclick=function(){t.scrollBy({left:step(),behavior:'smooth'})};
  document.querySelector('.car-btn.prev').onclick=function(){t.scrollBy({left:-step(),behavior:'smooth'})};
  t.addEventListener('scroll',function(){var i=Math.round(t.scrollLeft/step());dots.forEach(function(d,k){d.classList.toggle('on',k===i)})});
})();
