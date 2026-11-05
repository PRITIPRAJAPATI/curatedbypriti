/* CuratedbyPriti: shared script. Every block checks that its elements exist, so one file serves all pages. */
(function(){
  'use strict';
  var PHONE='919029979652';
  /* ---- Add real customer reviews here, then re-upload. Example:
     {name:'Aarti S.', text:'The bouquet looked even better than the photo.', source:'Google review'}  ---- */
  var REVIEWS=[];
  var P=[{"id":1,"c":"him-her","n":"Burgundy lily bouquet","i":"bouquet-burgundy","p":1099,"s":699,"d":"Handcrafted pipe cleaner lilies in deep burgundy and ivory, wrapped in a gold-edged sheer with a red ribbon. A bouquet that lasts, for birthdays, anniversaries and home decor."},{"id":2,"c":"him-her","n":"Custom bike art panel","i":"bike-decor","p":1050,"s":899,"t":["Personalised"],"d":"A 3D moulded art panel on canvas or MDF board, customised around your loved one's bike. A gift for the person who loves their ride."},{"id":3,"c":"him-her","n":"Photo card tulip bouquet","i":"bouquet-purple","p":1299,"s":949,"t":["Personalised"],"d":"Purple tulips, a blue flower and an evil eye charm, finished with personalised photo cards. Made around your memories for birthdays, anniversaries and Valentine's Day."},{"id":4,"c":"him-her","n":"Midnight lily bouquet","i":"bouquet-navy","p":1299,"d":"Soft pipe cleaner white lilies with black detailing in luxurious navy wrapping. A lasting arrangement for celebrations and special gifting."},{"id":5,"c":"him-her","n":"Shell ring case","i":"ring-shell","p":499,"d":"A shell-shaped ring case crafted from soft pipe cleaner. A beautiful home for a ring that promises forever."},{"id":6,"c":"him-her","n":"Promise ring case","i":"ring-promise","p":499,"d":"A woven white pipe cleaner case for promise rings, so the box feels as thoughtful as the ring."},{"id":7,"c":"flower-frames","n":"Flower mirror","i":"mirror-decor","p":600,"s":549,"d":"A mirror framed in green yarn and pipe cleaner flowers, finished with a sheer bow. Small decor with a lot of charm."},{"id":8,"c":"flower-frames","n":"Daisy art frame","i":"daisy-frame","p":1099,"t":["Our signature piece"],"d":"A bouquet of pipe cleaner daisies set inside a white box frame and tied with a cream ribbon. The special piece of CuratedbyPriti."},{"id":9,"c":"frame-art","n":"Tulip bouquet frame","i":"tulip-frame","p":1350,"s":1100,"d":"Pink pipe cleaner tulips tied with a ribbon, framed and ready to gift to someone you love."},{"id":10,"c":"frame-art","n":"Illustration portrait","i":"portrait","p":350,"s":300,"t":["Personalised"],"d":"A custom faceless digital illustration made from your photo. Choose a digital file, an unframed print, or printed artwork with a sleek stand. Send your photo on WhatsApp to order."},{"id":11,"c":"frame-art","n":"Framed illustration portrait","i":"portrait-framed","p":550,"s":499,"t":["Personalised"],"d":"The same custom faceless illustration, delivered framed with a sleek stand and ready to gift. Send us your photo to begin."},{"id":12,"c":"wall-decor","n":"Lippan jharokha set of three","i":"jharokha","p":2199,"s":1999,"d":"Three handcrafted Lippan art jharokha panels with mirror work and lotus motifs, textured with air-dry clay and rich acrylic colours. Made for a gallery wall or a plain wall that needs a story."},{"id":13,"c":"wall-decor","n":"Evil eye flower hanging","i":"wall-hanging","p":599,"d":"Pipe cleaner flower wall hangings with an evil eye centre and pearl drops. Ready to gift."},{"id":14,"c":"wall-decor","n":"Peacock wall hanging","i":"peacock","p":1399,"s":1099,"d":"A handmade peacock wall hanging in soft pipe cleaners, with floral embellishments, layered feathers and pearl bead drops. For home decor, kids' rooms and festive decoration."},{"id":15,"c":"wall-decor","n":"Beaded mirror wall hanging","i":"mirror-hanging","p":750,"s":699,"d":"Textured pipe cleaner petals frame a central mirror, with beaded drapes and tiny flowers. A cosy, artisanal touch for a bedroom, living room or entryway."},{"id":16,"c":"room-decor","n":"Mahadev wall decor","i":"shiva","p":799,"s":599,"d":"Handcrafted Lord Shiva decor on MDF board, with a trishul, damru and Om in 3D detail on a rich blue background with mirror work borders. For your home, your temple or a Mahadev devotee."},{"id":17,"c":"room-decor","n":"Pearl galaxy canvas","i":"pearl-space","p":599,"d":"Pearl artwork on canvas, with a galaxy, planets and stars. A quiet statement for a living room wall."},{"id":18,"c":"room-decor","n":"Pearl wave canvas","i":"pearl-wave","p":599,"d":"Pearl artwork on canvas, with rolling waves in deep blue and white pearls."}];
  var $=function(id){return document.getElementById(id);};
  function wa(msg){return 'https://wa.me/'+PHONE+'?text='+encodeURIComponent(msg);}
  var rs=function(n){return '₹'+Number(n).toLocaleString('en-IN');};
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduce;
  var IMG_MAP=(typeof IMG!=='undefined')?IMG:null;
  function imgSrc(n){return IMG_MAP?IMG_MAP[n]:'img/'+n+(n==='emblem'?'.png':'.jpg');}
  function qs(k){
    var s=location.search||(location.hash.indexOf('?')>-1?'?'+location.hash.split('?')[1]:'');
    try{return new URLSearchParams(s).get(k);}catch(e){return null;}
  }
  var WAI='<svg class="ic ic-wa" aria-hidden="true"><use href="#i-wa"/></svg><span class="sr">WhatsApp</span>';

  /* ---------- mobile menu ---------- */
  var mb=$('menu-btn'),mn=$('mnav');
  if(mb&&mn){
    var setMenu=function(on){mn.classList.toggle('on',on);mb.setAttribute('aria-expanded',String(on));mb.classList.toggle('open',on);};
    mb.addEventListener('click',function(){setMenu(!mn.classList.contains('on'));});
    mn.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});
    document.addEventListener('click',function(e){if(mn.classList.contains('on')&&!e.target.closest('.nav'))setMenu(false);});
  }

  /* ---------- confetti ---------- */
  var COL=['#BFDDF6','#D9E3FA','#DDF1F6','#D5EEE6','#F7E8C6','#FFFFFF'];
  function burst(x,y){
    if(reduce)return;
    for(var i=0;i<22;i++){
      var e=document.createElement('i'),s=6+Math.random()*7,a=Math.random()*Math.PI*2,d=60+Math.random()*120;
      e.style.cssText='position:fixed;z-index:80;pointer-events:none;left:'+x+'px;top:'+y+'px;width:'+s+'px;height:'+(s*(Math.random()<.5?1:.5))+'px;background:'+COL[i%COL.length]+';border-radius:'+(Math.random()<.5?'50%':'2px');
      document.body.appendChild(e);
      (function(el,dx,dy,r){
        var an=el.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:'translate('+dx+'px,'+(dy+60)+'px) rotate('+r+'deg)',opacity:0}],{duration:900+Math.random()*500,easing:'cubic-bezier(.15,.7,.3,1)'});
        an.onfinish=function(){el.remove();};
      })(e,Math.cos(a)*d,Math.sin(a)*d-40,Math.random()*540-270);
    }
  }
  document.addEventListener('click',function(e){var b=e.target.closest('[data-confetti]');if(b)burst(e.clientX,e.clientY);});

  /* ---------- 3D tilt on cards, magnetic buttons ---------- */
  function bindTilt(root){
    if(!fine)return;
    (root.matches&&root.matches('[data-tilt]')?[root]:[]).concat([].slice.call(root.querySelectorAll('[data-tilt]'))).forEach(function(el){
      if(el._t)return;el._t=1;
      el.addEventListener('pointermove',function(e){
        var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        el.style.setProperty('--rx',(-y*8).toFixed(2)+'deg');el.style.setProperty('--ry',(x*10).toFixed(2)+'deg');
        el.style.setProperty('--mx',((x+.5)*100).toFixed(0)+'%');el.style.setProperty('--my',((y+.5)*100).toFixed(0)+'%');el.classList.add('hot');
      });
      el.addEventListener('pointerleave',function(){el.style.setProperty('--rx','0deg');el.style.setProperty('--ry','0deg');el.classList.remove('hot');});
    });
  }
  bindTilt(document);
  if(fine){
    document.querySelectorAll('.btn-primary,.fab').forEach(function(b){
      b.addEventListener('pointermove',function(e){
        var r=b.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
        b.style.setProperty('--tx',(x*.18).toFixed(1)+'px');b.style.setProperty('--ty',(y*.28).toFixed(1)+'px');
      });
      b.addEventListener('pointerleave',function(){b.style.setProperty('--tx','0px');b.style.setProperty('--ty','0px');});
    });
  }

  /* ---------- scroll: progress bar, reveals, counters, nav shadow ---------- */
  var prog=$('prog'),tick=false,nav=document.querySelector('.nav');
  function onScroll(){
    if(tick)return;tick=true;
    requestAnimationFrame(function(){
      var y=window.scrollY||0,h=document.documentElement.scrollHeight-window.innerHeight;
      if(prog)prog.style.width=(h>0?Math.min(100,y/h*100):0)+'%';
      document.documentElement.style.setProperty('--sy',y);
      if(nav)nav.classList.toggle('stuck',y>8);
      tick=false;
    });
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  function countUp(el){
    var to=+el.getAttribute('data-count'),suf=el.getAttribute('data-suf')||'';
    if(reduce){el.textContent=to+suf;return;}
    var t0=performance.now();
    (function step(t){var k=Math.min(1,(t-t0)/1300);el.textContent=Math.round(to*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(step);})(t0);
  }
  if(window.IntersectionObserver){
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    var observeRv=function(){document.querySelectorAll('.rv:not(.in)').forEach(function(el){io.observe(el);});};
    observeRv();window.CBP_observe=observeRv;
    var co=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){countUp(x.target);co.unobserve(x.target);}});},{threshold:.6});
    document.querySelectorAll('[data-count]').forEach(function(el){co.observe(el);});
  } else {
    document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in');});
  }

  /* ---------- product overlay (works for grid cards, home picks, strip, hero cards) ---------- */
  var ov=$('ov'),last=null;
  function priceHTML(p){return p.s?'<strong>'+rs(p.s)+'</strong><s>'+rs(p.p)+'</s>':'<strong>'+rs(p.p)+'</strong>';}
  function badgesHTML(p){var b='';if(p.s)b+='<span class="badge sale">Save '+Math.round((1-p.s/p.p)*100)+'%</span>';(p.t||[]).forEach(function(t){b+='<span class="badge">'+t+'</span>';});return b;}
  function enquiry(p){return wa('Hi CuratedbyPriti! I would like to order "'+p.n+'" ('+rs(p.s||p.p)+').');}
  function openP(id){
    if(!ov)return;
    var p=P.filter(function(x){return x.id===+id;})[0];if(!p)return;last=document.activeElement;
    $('ov-img').src=imgSrc(p.i);$('ov-img').alt=p.n;
    $('ov-title').textContent=p.n;$('ov-desc').textContent=p.d;
    $('ov-price').innerHTML=priceHTML(p);$('ov-badges').innerHTML=badgesHTML(p);
    $('ov-wa').href=enquiry(p);
    ov.classList.add('on');ov.setAttribute('aria-hidden','false');$('ov-x').focus();
  }
  function closeP(){ov.classList.remove('on');ov.setAttribute('aria-hidden','true');if(last&&last.focus)last.focus();}
  if(ov){
    document.addEventListener('click',function(e){var b=e.target.closest('[data-open]');if(b)openP(b.getAttribute('data-open'));});
    $('ov-x').addEventListener('click',closeP);
    ov.addEventListener('click',function(e){if(e.target===ov)closeP();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('on'))closeP();});
  }

  /* ---------- collection filter ---------- */
  var tabs=$('tabs'),grid=$('grid');
  function applyFilter(f){
    if(!tabs||!grid)return;
    var valid=[].slice.call(tabs.children).some(function(b){return b.getAttribute('data-f')===f;});
    if(!valid)f='all';
    [].slice.call(tabs.children).forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-f')===f));});
    [].slice.call(grid.children).forEach(function(c){
      var show=f==='all'||(f==='offer'?c.getAttribute('data-offer')==='1':c.getAttribute('data-cat')===f);
      c.hidden=!show;
      if(show){c.style.animation='none';void c.offsetWidth;c.style.animation='';}
    });
  }
  if(tabs&&grid){
    tabs.addEventListener('click',function(e){var b=e.target.closest('[data-f]');if(b)applyFilter(b.getAttribute('data-f'));});
    applyFilter(qs('filter')||'all');
  }

  /* ---------- order builder ---------- */
  var gbox=$('groups'),S={type:'',adds:[],occ:'',bud:'',how:''},refs=[],sync=function(){};
  if(gbox){
    var G=[
      {k:'type',t:'What would you like?',o:['Gift hamper','Festive gift','Personalised gift','Home decor','Flower bouquet','Frame artwork','Wall hanging']},
      {k:'adds',t:'Add to your hamper',multi:1,when:function(){return S.type==='Gift hamper';},o:['Handmade bouquet','Framed photo','Candle','Mug','Journal','Dried flowers','Sweet treats','Wall decor']},
      {k:'occ',t:'Occasion',o:['Birthday','Anniversary','Wedding','Festive season',"Valentine's Day",'Housewarming','Just because']},
      {k:'bud',t:'Budget',o:['Under ₹500','₹500 to ₹1,000','₹1,000 to ₹2,000','Above ₹2,000']},
      {k:'how',t:'How would you like it?',o:['Collect from the shop','Deliver to me','Custom order']}
    ];
    G.forEach(function(g){
      var w=document.createElement('div');w.className='grp';
      w.innerHTML='<div class="gl">'+g.t+'</div><div class="chips"></div>';
      var cw=w.querySelector('.chips');
      g.o.forEach(function(o){
        var b=document.createElement('button');b.type='button';b.className='chip';b.textContent=o;b.setAttribute('aria-pressed','false');
        b.addEventListener('click',function(){
          if(g.multi){var i=S[g.k].indexOf(o);if(i<0)S[g.k].push(o);else S[g.k].splice(i,1);}
          else S[g.k]=S[g.k]===o?'':o;
          sync();
        });
        cw.appendChild(b);
      });
      gbox.appendChild(w);refs.push({g:g,w:w,cw:cw});
    });
    var nm=$('o-name'),ar=$('o-area'),arf=$('area-f'),nt=$('o-note'),pv=$('pv'),sd=$('send');
    var build=function(){
      var m='Hi CuratedbyPriti! I would like to order '+(S.type?'a '+S.type.toLowerCase():'a gift')+'.';
      if(S.type==='Gift hamper'&&S.adds.length)m+=' For the hamper: '+S.adds.join(', ').toLowerCase()+'.';
      if(S.occ)m+=' Occasion: '+S.occ+'.';
      if(S.bud)m+=' Budget: '+S.bud+'.';
      if(S.how){m+=' '+S.how+'.';if(S.how==='Deliver to me'&&ar.value.trim())m+=' My area is '+ar.value.trim()+'.';}
      if(nm.value.trim())m+=' My name is '+nm.value.trim()+'.';
      if(nt.value.trim())m+=' '+nt.value.trim();
      return m;
    };
    sync=function(){
      refs.forEach(function(r){
        r.w.hidden=r.g.when?!r.g.when():false;
        [].slice.call(r.cw.children).forEach(function(b){
          var on=r.g.multi?S[r.g.k].indexOf(b.textContent)>=0:S[r.g.k]===b.textContent;b.setAttribute('aria-pressed',String(on));
        });
      });
      arf.hidden=S.how!=='Deliver to me';
      var m=build();pv.textContent=m;sd.href=wa(m);
    };
    [nm,ar,nt].forEach(function(el){el.addEventListener('input',sync);});
    var preset=function(){
      var t=qs('type'),o=qs('occ');
      if(t)S.type=t;if(o)S.occ=o;sync();
    };
    preset();window.CBP_preset=preset;
  }

  /* ---------- opening hours (any element with .js-status) ---------- */
  var DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  function nowIST(){
    var f=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Kolkata',weekday:'short',hour:'numeric',minute:'numeric',hourCycle:'h23'}).formatToParts(new Date());
    var g=function(t){return f.filter(function(x){return x.type===t;})[0].value;};
    return {d:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(g('weekday')),m:(+g('hour')%24)*60+(+g('minute'))};
  }
  var t=nowIST(),isOpen=t.d!==0&&t.m>=600&&t.m<1200,txt;
  if(isOpen){txt='Open now, closes at 8 pm';}
  else if(t.d!==0&&t.m<600){txt='Closed now, opens today at 10 am';}
  else{var k=1;while((t.d+k)%7===0)k++;txt='Closed now, opens '+(k===1?'tomorrow':DAYS[(t.d+k)%7])+' at 10 am';}
  document.querySelectorAll('.js-status').forEach(function(el){el.classList.toggle('open',isOpen);var s=el.querySelector('span');if(s)s.textContent=txt;});
  document.querySelectorAll('#hours li[data-d]').forEach(function(li){
    if(+li.getAttribute('data-d')===t.d){li.classList.add('today');li.firstElementChild.textContent+=' (today)';}
  });

  /* ---------- copy buttons ---------- */
  document.querySelectorAll('[data-copy]').forEach(function(b){
    b.addEventListener('click',function(){
      var v=b.getAttribute('data-copy'),old=b.textContent;
      function done(m){b.textContent=m;setTimeout(function(){b.textContent=old;},1600);}
      function sel(){var el=$(b.getAttribute('data-target'));if(!el)return;var r=document.createRange();r.selectNodeContents(el);var s=window.getSelection();s.removeAllRanges();s.addRange(r);done('Selected');}
      try{navigator.clipboard.writeText(v).then(function(){done('Copied');},sel);}catch(e){sel();}
    });
  });

  /* ---------- customer reviews (only shows when REVIEWS has entries) ---------- */
  if(REVIEWS.length){
    var html=REVIEWS.map(function(r){
      return '<figure class="quote rv"><svg class="ic qi" aria-hidden="true"><use href="#i-star"/></svg><blockquote>'+r.text+'</blockquote><figcaption><b>'+r.name+'</b>'+(r.source?' <span>'+r.source+'</span>':'')+'</figcaption></figure>';
    }).join('');
    document.querySelectorAll('.quotes').forEach(function(qb){qb.innerHTML=html;qb.hidden=false;});
    document.querySelectorAll('.quotes-empty').forEach(function(e){e.hidden=true;});
    if(window.CBP_observe)window.CBP_observe();
  }

  /* ---------- policy anchors ---------- */
  function openFromHash(){var id=(location.hash||'').slice(1),d=id&&$(id);if(d&&d.tagName==='DETAILS')d.open=true;}
  window.addEventListener('hashchange',openFromHash);openFromHash();

  /* ---------- hero / page-hero pointer parallax ---------- */
  var heroEl=document.querySelector('.hero')||document.querySelector('.phero');
  if(heroEl&&fine){
    var tx=0,ty=0,cx=0,cy=0,run=false;
    var loop=function(){
      cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;
      heroEl.style.setProperty('--px',cx.toFixed(3));heroEl.style.setProperty('--py',cy.toFixed(3));
      if(Math.abs(tx-cx)>.002||Math.abs(ty-cy)>.002)requestAnimationFrame(loop);else run=false;
    };
    window.addEventListener('pointermove',function(e){
      tx=e.clientX/window.innerWidth*2-1;ty=e.clientY/window.innerHeight*2-1;
      if(!run){run=true;requestAnimationFrame(loop);}
    },{passive:true});
  }

  /* ---------- 3D hero (home page only) ---------- */
  var stage=$('stage');
  if(stage){
    var ring=$('ring'),rig=$('rig'),gift=$('gift');
    var HERO=['bouquet-burgundy','daisy-frame','peacock','tulip-frame','bouquet-purple','mirror-hanging','shiva','portrait-framed'];
    ring.innerHTML=HERO.map(function(k,i){
      var p=P.filter(function(x){return x.i===k;})[0];
      return '<div class="pc" style="--i:'+i+'" data-pid="'+p.id+'"><div class="fr"><img src="'+imgSrc(k)+'" alt="'+p.n+'" draggable="false"><span>'+p.n+' <em>'+rs(p.s||p.p)+'</em></span></div><div class="bk"><img src="'+imgSrc(k)+'" alt="" draggable="false"><span>'+p.n+' <em>'+rs(p.s||p.p)+'</em></span></div></div>';
    }).join('');
    var sk='';for(var s1=0;s1<9;s1++){sk+='<i class="spk" style="left:'+(6+Math.random()*88).toFixed(1)+'%;top:'+(4+Math.random()*68).toFixed(1)+'%;animation-delay:'+(Math.random()*3).toFixed(2)+'s;animation-duration:'+(2.2+Math.random()*2).toFixed(2)+'s"></i>';}
    $('sparks').innerHTML=sk;
    var faces=[].slice.call(gift.querySelectorAll('[data-a]'));
    var ang=0,boxAng=-25,inertia=0,drag=false,lastX=0,moved=0,px=0,py=0,tpx=0,tpy=0,vis=true,tPrev=performance.now();
    var pcs=[].slice.call(ring.querySelectorAll('.pc')).map(function(el,i){return {i:i,fr:el.querySelector('.fr'),bk:el.querySelector('.bk')};});
    var fadeCards=function(){
      pcs.forEach(function(c){
        var th=(((c.i*45+ang)%360)+540)%360-180,v=Math.max(0,Math.min(1,(Math.abs(Math.cos(th*Math.PI/180))-.1)/.32)).toFixed(2);
        c.fr.style.opacity=v;c.bk.style.opacity=v;
      });
    };
    var paintFaces=function(){
      var l=-35*Math.PI/180;
      faces.forEach(function(f){var a=(+f.getAttribute('data-a')+boxAng)*Math.PI/180,b=Math.max(0,Math.cos(a-l)),d=(.36*(1-b)).toFixed(3);f.style.setProperty('--d',d);});
    };
    var frame=function(now){
      var dt=Math.min(.05,Math.max(0,(now-tPrev)/1000));tPrev=now;
      if(!drag){ang+=(reduce?0:7)*dt+inertia*dt*60;inertia*=Math.pow(.95,dt*60);}
      if(!reduce)boxAng+=16*dt;
      px+=(tpx-px)*.06;py+=(tpy-py)*.06;
      ring.style.transform='rotateY('+ang.toFixed(2)+'deg)';
      gift.style.transform='rotateY('+boxAng.toFixed(2)+'deg)';
      rig.style.transform='rotateX('+(-20+py*4).toFixed(2)+'deg) rotateY('+(px*8).toFixed(2)+'deg)';
      paintFaces();fadeCards();
    };
    var hloop=function(now){if(vis&&!document.hidden)frame(now);else tPrev=now;requestAnimationFrame(hloop);};
    frame(performance.now());requestAnimationFrame(hloop);
    if(window.IntersectionObserver)new IntersectionObserver(function(en){vis=en[0].isIntersecting;}).observe(stage);
    window.addEventListener('pointermove',function(e){tpx=(e.clientX/window.innerWidth-.5)*2;tpy=(e.clientY/window.innerHeight-.5)*2;},{passive:true});
    stage.addEventListener('pointerdown',function(e){drag=true;moved=0;lastX=e.clientX;inertia=0;try{stage.setPointerCapture(e.pointerId);}catch(x){}});
    stage.addEventListener('pointermove',function(e){if(!drag)return;var dx=e.clientX-lastX;lastX=e.clientX;moved+=Math.abs(dx);ang+=dx*.45;inertia=dx*.45*.6+inertia*.4;});
    stage.addEventListener('pointerup',function(e){
      if(!drag)return;drag=false;
      if(moved>=6)return;
      var el=document.elementFromPoint(e.clientX,e.clientY),pc=el&&el.closest&&el.closest('.pc'),gf=el&&el.closest&&el.closest('.gift');
      if(pc){openP(pc.getAttribute('data-pid'));}
      else if(gf){stage.classList.remove('hop');void stage.offsetWidth;stage.classList.add('hop');burst(e.clientX,e.clientY);setTimeout(function(){stage.classList.remove('hop');},1000);}
    });
    stage.addEventListener('pointercancel',function(){drag=false;});
  }

  /* ---------- petals ---------- */
  var petals=$('petals');
  if(petals&&!reduce){
    var pe='',PCOL=['#BFDDF6','#D2E4FA','#D9E3FA','#EAF4FD','#DDF1F6'];
    for(var q=0;q<16;q++){var sz=8+Math.random()*10;pe+='<i style="left:'+(Math.random()*100).toFixed(1)+'%;width:'+sz.toFixed(1)+'px;height:'+(sz*1.25).toFixed(1)+'px;background:'+PCOL[q%5]+';animation-duration:'+(11+Math.random()*12).toFixed(1)+'s;animation-delay:-'+(Math.random()*20).toFixed(1)+'s;--dx:'+(Math.random()*160-80).toFixed(0)+'px;--r:'+(Math.random()*540-270).toFixed(0)+'deg"></i>';}
    petals.innerHTML=pe;
  }

  /* ---------- hooks for the single-file bundle's router ---------- */
  window.CBP_onRoute=function(){
    applyFilter(qs('filter')||'all');
    if(window.CBP_preset){S={type:'',adds:[],occ:'',bud:'',how:''};window.CBP_preset();}
    if(window.CBP_observe)window.CBP_observe();
  };
})();
