var blogs = [];
var siteData = null;
var lang='en', density='Natural';

var techData=[
 {
 svgDiv:'<div style="width:100%;height:180px;border-radius:8px;margin-bottom:16px;background:linear-gradient(135deg,var(--dark3),var(--dark4));border:1px solid rgba(31,77,79,0.15);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px"><svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="26" r="14" stroke="#1F4D4F" stroke-width="1.5" fill="none"/><path d="M16 72c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="#1F4D4F" stroke-width="1.5" stroke-linecap="round" fill="none"/><circle cx="28" cy="58" r="3" fill="rgba(31,77,79,0.4)" stroke="#1F4D4F" stroke-width="1"/><circle cx="40" cy="54" r="4" fill="rgba(31,77,79,0.6)" stroke="#1F4D4F" stroke-width="1"/><circle cx="52" cy="58" r="3" fill="rgba(31,77,79,0.4)" stroke="#1F4D4F" stroke-width="1"/><path d="M22 66l4-4M58 66l-4-4M40 60v-5" stroke="#1F4D4F" stroke-width="1.2" stroke-linecap="round"/></svg><div style="font-size:9px;letter-spacing:3px;color:rgba(31,77,79,0.7)">FUE EXTRACTION TECHNIQUE</div></div>',
 title:'FUE — Follicular Unit Extraction',desc:'The gold standard of hair transplantation. Safe, proven and delivering consistently natural results worldwide.',points:['No linear scar — can keep hair short','Suitable for 2,000–','Recovery: back to work in 3–5 days','Full results visible at 12 months'],s1:'★★★★★',s2:'3–5d',s3:'12mo'
 },
 {
 svgDiv:'<div style="width:100%;height:180px;border-radius:8px;margin-bottom:16px;background:linear-gradient(135deg,var(--dark3),var(--dark4));border:1px solid rgba(31,77,79,0.15);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px"><svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M24 20 L24 60 M26 20 L22 20" stroke="#1F4D4F" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="34" cy="24" rx="10" ry="5" stroke="#1F4D4F" stroke-width="1.2" fill="rgba(31,77,79,0.08)"/><path d="M34 24 L34 48" stroke="#1F4D4F" stroke-width="1" stroke-dasharray="3,3"/><circle cx="34" cy="50" r="4" fill="rgba(31,77,79,0.3)" stroke="#1F4D4F" stroke-width="1.2"/><path d="M44 30 Q54 30 56 40 Q54 50 44 50" stroke="#1F4D4F" stroke-width="1" fill="none" stroke-linecap="round"/></svg><div style="font-size:9px;letter-spacing:3px;color:rgba(31,77,79,0.7)">DHI CHOI PEN IMPLANTATION</div></div>',
 title:'DHI — Direct Hair Implantation',desc:'Using the Choi implanter pen for simultaneous extraction and implantation. Maximum density, faster healing.',points:['Maximum density in existing hair','No channel opening — less trauma','Ideal for Norwood V–VII stages','Faster healing than standard FUE'],s1:'97%',s2:'2–4d',s3:'10mo'
 },
 {
 svgDiv:'<div style="width:100%;height:180px;border-radius:8px;margin-bottom:16px;background:linear-gradient(135deg,var(--dark3),var(--dark4));border:1px solid rgba(31,77,79,0.15);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px"><svg width="80" height="80" viewBox="0 0 80 80" fill="none"><polygon points="40,12 48,26 46,42 40,48 34,42 32,26" stroke="#1F4D4F" stroke-width="1.5" fill="rgba(31,77,79,0.08)"/><polygon points="40,20 44,30 43,38 40,42 37,38 36,30" stroke="#1F4D4F" stroke-width="1" fill="rgba(31,77,79,0.15)"/><path d="M20 60 Q30 52 40 54 Q50 52 60 60" stroke="#1F4D4F" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="40" cy="54" r="2" fill="rgba(31,77,79,0.15)"/></svg><div style="font-size:9px;letter-spacing:3px;color:rgba(31,77,79,0.7)">SAPPHIRE BLADE TECHNOLOGY</div></div>',
 title:'Sapphire FUE',desc:'Advanced FUE using sapphire crystal blades — sharper, smoother, finer channels with less tissue damage.',points:['Sapphire blades: sharper than steel','Less trauma, faster healing','Denser, more natural final result','Premium technique for premium results'],s1:'99%',s2:'2–4d',s3:'10mo'
 },
 {
 svgDiv:'<div style="width:100%;height:180px;border-radius:8px;margin-bottom:16px;background:linear-gradient(135deg,var(--dark3),var(--dark4));border:1px solid rgba(31,77,79,0.15);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px"><svg width="80" height="80" viewBox="0 0 80 80" fill="none"><ellipse cx="40" cy="26" rx="14" ry="16" stroke="#1F4D4F" stroke-width="1.5" fill="none"/><path d="M26 14 Q30 8 40 8 Q50 8 54 14 Q50 10 40 12 Q30 10 26 14Z" stroke="#1F4D4F" stroke-width="1" fill="rgba(31,77,79,0.2)"/><path d="M30 22 Q32 16 38 14" stroke="#1F4D4F" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M50 22 Q48 16 42 14" stroke="#1F4D4F" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M20 52 Q30 46 40 48 Q50 46 60 52" stroke="#1F4D4F" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M26 38 Q28 42 40 44 Q52 42 54 38" stroke="rgba(31,77,79,0.5)" stroke-width="1" fill="none"/></svg><div style="font-size:9px;letter-spacing:3px;color:rgba(31,77,79,0.7)">BEARD & EYEBROW RESTORATION</div></div>',
 title:'Beard & Eyebrow Transplant',desc:'DHI precision techniques to restore beard density, fill patches or sculpt eyebrows. Completely natural results.',points:['Natural angle and direction matching','Fill patchy areas or reshape hairline','1,000–typical session','Permanent, undetectable results'],s1:'96%',s2:'2–3d',s3:'8mo'
 },
 {
 svgDiv:'<div style="width:100%;height:180px;border-radius:8px;margin-bottom:16px;background:linear-gradient(135deg,var(--dark3),var(--dark4));border:1px solid rgba(31,77,79,0.15);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px"><svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M40 16 L44 32 L40 48 L36 32 Z" stroke="#1F4D4F" stroke-width="1.5" fill="rgba(31,77,79,0.1)"/><circle cx="40" cy="16" r="4" stroke="#1F4D4F" stroke-width="1.2" fill="rgba(31,77,79,0.2)"/><path d="M28 56 Q34 50 40 52 Q46 50 52 56" stroke="#1F4D4F" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M24 44 Q32 40 40 42 Q48 40 56 44" stroke="rgba(31,77,79,0.5)" stroke-width="1" fill="none" stroke-linecap="round"/><circle cx="32" cy="36" r="2" fill="rgba(31,77,79,0.4)"/><circle cx="48" cy="36" r="2" fill="rgba(31,77,79,0.4)"/></svg><div style="font-size:9px;letter-spacing:3px;color:rgba(31,77,79,0.7)">PLATELET-RICH PLASMA THERAPY</div></div>',
 title:'PRP Therapy',desc:'Platelet-Rich Plasma therapy accelerates healing and new hair growth by up to 30% using your own blood.',points:['Uses your own blood — zero reaction risk','Accelerates growth by up to 30%','Typically combined with FUE or DHI','3 sessions recommended for best results'],s1:'+30%',s2:'1hr',s3:'6mo'
 }
];



function setLang(l,btn){
 lang=l;
 // Her iki grupta da aktif butonu güncelle
 document.querySelectorAll('.lb').forEach(b=>{
 if(b.textContent.trim()===btn.textContent.trim()) b.classList.add('act');
 else b.classList.remove('act');
 });
 document.querySelectorAll('[data-l]').forEach(el=>el.classList.toggle('v',el.dataset.l===l));
 document.querySelectorAll('[data-li]').forEach(el=>el.classList.toggle('v',el.dataset.li===l));
 document.body.style.direction=l==='ar'?'rtl':'ltr';
}

function showPage(p){
 document.querySelectorAll('.page').forEach(x=>x.classList.remove('act'));
 document.getElementById('page-'+p).classList.add('act');
 document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('act'));
 var el=document.getElementById('n-'+p);
 if(el)el.classList.add('act');
 window.scrollTo(0,0);
}

function switchTech(el,i){
 document.querySelectorAll('.tc').forEach(t=>t.classList.remove('act'));
 el.classList.add('act');
 var d=techData[i];
 var iconEl=document.getElementById('tv-icon');
 iconEl.outerHTML=d.svgDiv.replace('id=','').replace('>','id="tv-icon">',1);
 // re-query after outerHTML replace
 document.getElementById('tv-title').textContent=d.title;
 document.getElementById('tv-desc').textContent=d.desc;
 var pts=document.getElementById('tv-points');
 pts.innerHTML=d.points.map(p=>'<li><span>'+p+'</span></li>').join('');
 document.getElementById('tv-s1').textContent=d.s1;
 document.getElementById('tv-s2').textContent=d.s2;
 document.getElementById('tv-s3').textContent=d.s3;
}

function toggleFaq(btn){
 var item=btn.parentElement;
 item.classList.toggle('open');
}

function openBlog(i){
 var b=blogs[i];
 document.getElementById('art-cat').textContent=b.cat;
 document.getElementById('art-title').textContent=b.title;
 document.getElementById('art-meta').textContent=b.meta;
 document.getElementById('art-body').innerHTML=b.body;
 showPage('article');
}

function setD(btn,val){
 density=val;
 document.querySelectorAll('.db').forEach(b=>b.classList.remove('act'));
 btn.classList.add('act');
}

function handleSim(input){
 if(!input.files[0])return;
 var r=new FileReader();
 r.onload=function(e){
 var area=document.getElementById('simPreview');
 document.getElementById('simPH').style.display='none';
 var ex=area.querySelector('img');if(ex)ex.remove();
 var img=document.createElement('img');
 img.src=e.target.result;
 img.style.cssText='max-width:100%;max-height:220px;border-radius:6px;opacity:.4;filter:grayscale(.4)';
 area.appendChild(img);
 runSim(img);
 };
 r.readAsDataURL(input.files[0]);
}

function runSim(img){
 var s=document.getElementById('simStatus'),pf=document.getElementById('pf'),pt=document.getElementById('pTxt');
 s.style.display='block';pf.style.width='0%';
 var msgs=['Analysing hairline...','Mapping donor area...','Calculating grafts...','Simulating '+density+'...','Finalising...'];
 var step=0;
 var iv=setInterval(function(){
 step++;pf.style.width=(step*20)+'%';pt.textContent=msgs[step-1]||'';
 if(step>=5){clearInterval(iv);setTimeout(function(){
 img.style.opacity='1';img.style.filter='none';
 var b=document.createElement('div');
 b.style.cssText='position:absolute;top:8px;right:8px;background:var(--gold);color:#FFFFFF;font-size:9px;padding:4px 8px;border-radius:3px;letter-spacing:1px;font-weight:500';
 b.textContent=density.toUpperCase()+' ✓';
 document.getElementById('simPreview').appendChild(b);
 pf.style.background='#4CAF50';pt.textContent='Simulation complete ✓';
 },400);}
 },600);
}

function handlePhotoUpload(input, zoneId, prevId){
 if(!input.files[0]) return;
 var r=new FileReader();
 r.onload=function(e){
 var zone=document.getElementById(zoneId);
 var prev=document.getElementById(prevId);
 zone.style.borderColor='var(--gold)';
 prev.style.display='block';
 prev.querySelector('img').src=e.target.result;
 };
 r.readAsDataURL(input.files[0]);
}

function previewPhoto(input, targetId){
 if(!input.files[0]) return;
 var r=new FileReader();
 r.onload=function(e){
 var el=document.getElementById(targetId);
 el.innerHTML='<img src="'+e.target.result+'" style="width:100%;height:80px;object-fit:cover;border-radius:6px">';
 el.style.border='1px solid var(--gold)';
 el.style.padding='4px';
 };
 r.readAsDataURL(input.files[0]);
}

function submitForm(btn){
 btn.textContent=lang==='ar'?'جاري الإرسال...':lang==='tr'?'Gönderiliyor...':'Sending...';
 btn.style.opacity='.7';
 setTimeout(function(){
 btn.textContent=lang==='ar'?'✓ تم! سنتواصل خلال ساعتين':lang==='tr'?'✓ Gönderildi! 2 saatte döneceğiz':'✓ Sent! We\'ll contact you within 2 hours';
 btn.style.background='#4CAF50';btn.style.opacity='1';
 },1500);
}

function previewHeroPhoto(input, prevId){
 if(!input.files[0]) return;
 const r = new FileReader();
 r.onload = function(e){
 const prev = document.getElementById(prevId);
 prev.querySelector('img').src = e.target.result;
 prev.style.display = 'block';
 };
 r.readAsDataURL(input.files[0]);
}

function previewFormPhoto(input, prevId, iconId){
 if(!input.files[0]) return;
 const r = new FileReader();
 r.onload = function(e){
 const prev = document.getElementById(prevId);
 prev.src = e.target.result;
 prev.style.display = 'block';
 const icon = document.getElementById(iconId);
 if(icon) icon.style.display = 'none';
 };
 r.readAsDataURL(input.files[0]);
}

function toggleMenu(){
 const h=document.getElementById('hamburger');
 const nl=document.getElementById('nav-links');
 const ov=document.getElementById('nav-overlay');
 h.classList.toggle('open');
 nl.classList.toggle('open');
 ov.classList.toggle('show');
 document.body.style.overflow=nl.classList.contains('open')?'hidden':'';
}
function closeMenu(){
 const h=document.getElementById('hamburger');
 const nl=document.getElementById('nav-links');
 const ov=document.getElementById('nav-overlay');
 h.classList.remove('open');
 nl.classList.remove('open');
 ov.classList.remove('show');
 document.body.style.overflow='';
}



function stripHtml(html){
 var div=document.createElement('div');
 div.innerHTML=html||'';
 return (div.textContent||div.innerText||'').trim();
}

function getExcerpt(item){
 if(item.excerpt) return item.excerpt;
 var text = stripHtml(item.body||'');
 return text.length > 130 ? text.slice(0,127).trim() + '...' : text;
}

function getThumbLabel(item){
 return (item.thumb_label || item.cat || 'BLOG').toUpperCase();
}

function getThumbClass(index){
 var classes=['t1','t2','t3','t4','t5','t6'];
 return classes[index % classes.length];
}

function buildBlogCard(item,index){
 return '<div class="blog-card" onclick="openBlog('+index+')">'
   + '<div class="blog-thumb '+getThumbClass(index)+'" style="display:flex;align-items:center;justify-content:center;flex-direction:column;gap:10px">'
   + '<div style="font-size:11px;letter-spacing:3px;color:rgba(31,77,79,0.7);text-align:center;padding:0 12px">'+getThumbLabel(item)+'</div>'
   + '</div>'
   + '<div class="blog-body">'
   + '<div class="blog-cat">'+(item.cat||'BLOG')+'</div>'
   + '<div class="blog-title cm">'+(item.title||'Untitled')+'</div>'
   + '<div class="blog-excerpt">'+getExcerpt(item)+'</div>'
   + '<div class="blog-meta">'+(item.meta||'')+'</div>'
   + '</div></div>';
}

function renderBlogs(){
 var homeGrid=document.getElementById('home-blog-grid');
 var pageGrid=document.getElementById('blog-page-grid');
 if(homeGrid){
   homeGrid.innerHTML = blogs.slice(0,6).map(buildBlogCard).join('');
 }
 if(pageGrid){
   pageGrid.innerHTML = blogs.map(buildBlogCard).join('');
 }
}

function setHtml(id,value){
 var el=document.getElementById(id);
 if(el && typeof value === 'string') el.innerHTML=value;
}

function setText(id,value){
 var el=document.getElementById(id);
 if(el && typeof value === 'string') el.textContent=value;
}

function setLink(id,href,text){
 var el=document.getElementById(id);
 if(!el) return;
 if(href) el.href=href;
 if(typeof text === 'string') el.textContent=text;
}

function openPrimaryWhatsApp(){
 var href = siteData && siteData.contact ? siteData.contact.whatsapp_kuwait_url : null;
 window.open(href || 'https://wa.me/96569621742','_blank');
}

function applySiteData(data){
 siteData = data || {};
 var seo = siteData.seo || {};
 if(seo.title) document.title = seo.title;
 if(seo.description){
   var meta=document.querySelector('meta[name="description"]');
   if(meta) meta.setAttribute('content',seo.description);
 }

 var hero = siteData.home && siteData.home.hero ? siteData.home.hero : {};
 ['en','ar','tr'].forEach(function(langCode){
   setHtml('hero-eyebrow-'+langCode, hero['eyebrow_'+langCode]);
   setHtml('hero-title-'+langCode, hero['title_'+langCode]);
   setHtml('hero-sub-'+langCode, hero['subtitle_'+langCode]);
 });

 var contact = siteData.contact || {};
 ['en','ar','tr'].forEach(function(langCode){
   setText('contact-intro-'+langCode, contact['intro_'+langCode]);
 });
 setText('contact-kw-label', contact.whatsapp_kuwait_label);
 setText('contact-tr-label', contact.whatsapp_turkey_label);
 setText('contact-email-label', contact.email_label);
 setLink('contact-kw-link', contact.whatsapp_kuwait_url, contact.whatsapp_kuwait_text);
 setLink('contact-tr-link', contact.whatsapp_turkey_url, contact.whatsapp_turkey_text);
 setLink('contact-email-link', 'mailto:' + (contact.email || 'info@nevora.com'), contact.email || 'info@nevora.com');
 setLink('home-contact-kw', contact.whatsapp_kuwait_url, contact.whatsapp_kuwait_text);
 setLink('home-contact-tr', contact.whatsapp_turkey_url, contact.whatsapp_turkey_text);
 setLink('home-contact-email', 'mailto:' + (contact.email || 'info@nevora.com'), contact.email || 'info@nevora.com');
 setLink('footer-kw-link', contact.whatsapp_kuwait_url, (contact.whatsapp_kuwait_text || '+965 6962 1742') + ' (Kuwait)');
 setLink('footer-tr-link', contact.whatsapp_turkey_url, (contact.whatsapp_turkey_text || '+90 532 062 2122') + ' (Turkey)');
 setLink('footer-email-link', 'mailto:' + (contact.email || 'info@nevora.com'), contact.email || 'info@nevora.com');
}

async function loadCmsData(){
 try {
   var [siteRes, blogsRes] = await Promise.all([
     fetch('content/site-settings.json', {cache:'no-store'}),
     fetch('content/blogs.json', {cache:'no-store'})
   ]);
   if(siteRes.ok){
     applySiteData(await siteRes.json());
   }
   if(blogsRes.ok){
     var blogJson = await blogsRes.json();
     if(Array.isArray(blogJson.items)) blogs = blogJson.items;
   }
 } catch (err) {
   console.warn('CMS content could not be loaded, using fallback content.', err);
 }
 renderBlogs();
}

// Initialize immediately
(async function(){
 document.querySelectorAll('[data-l]').forEach(el=>el.classList.toggle('v',el.dataset.l===lang));
 document.querySelectorAll('[data-li]').forEach(el=>el.classList.toggle('v',el.dataset.li===lang));
 var el=document.getElementById('n-home');
 if(el)el.classList.add('act');
 await loadCmsData();
})();
