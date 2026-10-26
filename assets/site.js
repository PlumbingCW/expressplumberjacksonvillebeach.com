(function(){
  document.documentElement.classList.add('js');
  var btn=document.getElementById('menuBtn'),drawer=document.getElementById('mobDrawer'),ov=document.getElementById('mobOverlay'),cl=document.getElementById('menuClose');
  function open(){drawer.classList.add('open');ov.classList.add('open');drawer.setAttribute('aria-hidden','false');btn.setAttribute('aria-expanded','true');document.documentElement.style.overflow='hidden';}
  function close(){drawer.classList.remove('open');ov.classList.remove('open');drawer.setAttribute('aria-hidden','true');btn.setAttribute('aria-expanded','false');document.documentElement.style.overflow='';}
  if(btn){btn.addEventListener('click',open);cl.addEventListener('click',close);ov.addEventListener('click',close);
    drawer.addEventListener('click',function(e){if(e.target.closest('a'))close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
    window.addEventListener('resize',function(){if(window.innerWidth>768)close();});}
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var a=document.getElementById(q.getAttribute('aria-controls'));
      var openNow=q.getAttribute('aria-expanded')==='true';
      q.setAttribute('aria-expanded',openNow?'false':'true');
      a.style.maxHeight=openNow?'0px':a.scrollHeight+'px';
    });
  });
})();
