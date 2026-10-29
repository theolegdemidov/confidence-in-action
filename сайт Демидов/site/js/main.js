(function(){var d=document;d.documentElement.classList.add('js');d.addEventListener('touchstart',function(){},{passive:true});
function io(){var els=[].slice.call(d.querySelectorAll('.rv:not(.in)'));if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.08});els.forEach(function(e){o.observe(e)});setTimeout(function(){els.forEach(function(e){e.classList.add('in')})},2500)}
var views=d.querySelectorAll('.view');
function mark(n){d.querySelectorAll('nav [data-p]').forEach(function(a){a.classList.toggle('on',a.dataset.p===n)})}
if(views.length){function go(n,push){if(!d.querySelector('.view[data-view="'+n+'"]'))n='home';views.forEach(function(v){v.classList.toggle('act',v.dataset.view===n)});mark(n);window.scrollTo(0,0);if(push!==false)try{history.replaceState(null,'','#'+n)}catch(e){}setTimeout(io,30)}
d.addEventListener('click',function(e){var a=e.target.closest('[data-p]');if(a){e.preventDefault();go(a.dataset.p)}});go((location.hash||'#home').slice(1),false)}
else{mark(d.body.dataset.page);io()}})();
