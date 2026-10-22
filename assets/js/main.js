const $=id=>document.getElementById(id);
function show(p){$('site').style.display=p?'none':'block';$('portal').style.display=p?'block':'none';scrollTo(0,0)}
let su=false;function mode(s){su=s;$('sf').style.display=s?'block':'none';$('lt').textContent=s?'Request portal access':'Client portal';$('go').textContent=s?'Request access (demo)':'Sign in (demo)';$('tog').textContent=s?'Already registered? Sign in':'New client? Request access'}
function portal(s){show(true);$('dash').style.display='none';$('login').style.display='block';mode(s)}
$('tog').onclick=e=>{e.preventDefault();mode(!su)};
['signup0','signup1','navcalc','fcalc'].forEach(i=>$(i).onclick=e=>{e.preventDefault();portal(true)});$('signin1').onclick=()=>portal(false);$('fport').onclick=e=>{e.preventDefault();portal(false)};
$('pbtn').onclick=()=>portal(false);$('back').onclick=()=>show(false);
document.querySelectorAll('[data-s]').forEach(a=>a.addEventListener('click',()=>show(false)));

$('go').onclick=()=>{$('who').textContent=$('em').value.split('@')[0]||'client';$('login').style.display='none';$('dash').style.display='block'};
$('out').onclick=()=>{$('dash').style.display='none';$('login').style.display='block'};
document.querySelectorAll('.ptabs [data-p]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.pane,.ptabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');$(b.dataset.p).classList.add('on')});

const SV=[["Reef & Beach Resilience","Reef-based shoreline protection and beach stability planning."],["Living Marine Infrastructure","Design and delivery of nature-based structures integrated with built assets."],["Coastal Science & Monitoring","Baselines, hydrodynamics, ecological monitoring and performance reporting."],["Restoration Strategy & Project Delivery","Feasibility, strategy, permitting support, implementation and handover."]];
$('svc').innerHTML=SV.map(s=>`<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p><span class="pill">Scope [verify]</span></div>`).join('');
$('opt').innerHTML=["Resort Ecology & Landscape Design","Living Walls & Specialized Marine Infrastructure Installations","Eco-Art & Mural Walls"].map(s=>`<div class="card"><h3>${s}</h3><p>Partner-delivered, where feasible.</p><span class="pill">Partner TBC</span></div>`).join('');
const P=[{n:"Barbuda flagship",g:"Barbuda, Antigua and Barbuda",lat:17.63,lon:-61.77,c:"Resort",s:"Active"},{n:"[Project slot 2]",g:"[Location]",lat:null,lon:null,c:"Government",s:"Planned"},{n:"[Project slot 3]",g:"[Location]",lat:null,lon:null,c:"Developer",s:"Completed"}];
const FLD=["Geography","Client type","Ecological challenges","Interventions","Technology","Available evidence","Timeline","Long-term monitoring"];
function plist(){const q=$('q').value.toLowerCase(),c=$('fc').value,s=$('fs').value;
 const L=P.filter(p=>(!q||(p.n+p.g).toLowerCase().includes(q))&&(!c||p.c==c)&&(!s||p.s==s));
 $('plist').innerHTML=L.map(p=>`<div class="card" style="margin-bottom:10px;cursor:pointer" data-n="${p.n}"><b>${p.n}</b><br><span class="note">${p.g} · ${p.c}</span> <span class="pill">${p.s}</span></div>`).join('')||'<p class="note">No matches.</p>';
 $('map').querySelectorAll('circle').forEach(x=>x.remove());
 L.filter(p=>p.lat!=null).forEach(p=>{const e=document.createElementNS('http://www.w3.org/2000/svg','circle');e.setAttribute('cx',(p.lon+180));e.setAttribute('cy',(90-p.lat));e.setAttribute('r',4);e.setAttribute('fill','var(--teal)');$('map').appendChild(e)});
 document.querySelectorAll('#plist [data-n]').forEach(d=>d.onclick=()=>page(P.find(p=>p.n==d.dataset.n)))}
function page(p){$('pp').innerHTML=`<div class="tag">Project page template</div><h3>${p.n}</h3><span class="pill">${p.s}</span> <span class="pill">Unverified</span><table>`+FLD.map(f=>`<tr><td>${f}</td><td>${f=='Geography'?p.g:f=='Client type'?p.c:'[PLACEHOLDER, awaiting verified source]'}</td></tr>`).join('')+'</table><p class="note">Planned projects must stay visibly separate from completed projects. Evidence entries need source and verification status.</p>'}
['q','fc','fs'].forEach(i=>$(i).oninput=plist);plist();page(P[0]);
$('mit').innerHTML=[["Obligation assessment","Map project-related environmental obligations and restoration options."],["Restoration as mitigation","Design and delivery of restoration tied to project footprints."],["Monitoring and compliance reporting","Performance tracking against agreed targets."],["Long-term stewardship","Maintenance and monitoring planning after delivery."]].map(s=>`<div class="card"><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join('');
const CL={"Hotels and resorts":["Shoreline erosion, reef decline, asset exposure","Reef & Beach Resilience, Living Marine Infrastructure, monitoring","Protected assets, lower maintenance (to be quantified)"],"Island governments":["Public infrastructure exposure, fisheries and tourism dependence","Strategy and delivery, monitoring, economic-benefit assessment","Public benefit-cost evidence (to be quantified)"],"Developers":["Coastal permitting, project-related obligations","Restoration and mitigation, nature-based vs conventional comparison","Compliance pathway, lifecycle cost clarity"],"Ports":["Operational continuity, structure exposure","Living marine infrastructure, science and monitoring","Avoided downtime (to be quantified)"],"Insurers":["Exposure baselines, verification needs","Monitoring and verification, scenario inputs","Evidence for risk modeling (to be validated)"]};
$('ctabs').innerHTML=Object.keys(CL).map((k,i)=>`<button class="${i?'':'on'}">${k}</button>`).join('');
function cp(k){const v=CL[k];$('cpane').innerHTML=`<h3>${k}</h3><p><b>Challenges:</b> ${v[0]}</p><p><b>Relevant services:</b> ${v[1]}</p><p><b>Anticipated benefits:</b> ${v[2]}</p><p><b>Project considerations / how to begin:</b> [PLACEHOLDER] <a href="#contact">Start a project</a></p>`}
document.querySelectorAll('#ctabs button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#ctabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');cp(b.textContent)});cp("Hotels and resorts");
$('vr').innerHTML='<tr><th>Item</th><th>Verifier</th></tr>'+[["Service scopes and capabilities","Commercial"],["Partner-delivered services and partner agreements","Commercial, Legal"],["Project facts, results, imagery rights","Scientific, Legal"],["Reef and beach protection claims","Scientific, Engineering"],["Structure designs and installation methods","Engineering"],["Mitigation and permitting statements","Legal"],["Headline data point and source","Scientific"],["Living Coastline panel content, sources and service mapping","Scientific, Commercial"],["Calculator assumptions, pricing, ROI","Commercial, Scientific"],["Lab and nonprofit funding separation","Legal"],["Lab caption, donor acknowledgment wording, image and illustration rights","Commercial, Legal"]].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('');

let D,E,vw='public',cat='',cur='';
const $$=s=>document.querySelectorAll(s);
fetch('assets/data/elements.json').then(r=>{if(!r.ok)throw 0;return r.json()}).then(d=>{D=d;E=d.elements;lc()}).catch(()=>{$('td').textContent='Content could not load. View the site over http, for example on GitHub Pages, rather than opening the file directly.'});
const C=k=>D.categories[k];
const gl=k=>`<span class="gl s-${C(k).shape}" style="--c:${C(k).color}" aria-hidden="true"></span>`;
function lc(){
 $('lg').innerHTML=Object.keys(D.categories).map(k=>`<button data-k="${k}" aria-pressed="false">${gl(k)}${C(k).label}</button>`).join('');
 $('scn').insertAdjacentHTML('beforeend',E.filter(e=>e.shown!==false).map(e=>`<span class="hs${e.featured?' ft':''}" data-id="${e.id}" style="left:${e.x}%;top:${e.y}%"><button class="s-${C(e.cat).shape}" style="--c:${C(e.cat).color};--k:${C(e.cat).ink}" aria-label="${e.name}, ${C(e.cat).label}" title="${e.name}">${e.sym}</button></span>`).join(''));
 $('el').innerHTML=Object.keys(D.categories).map(k=>`<div><div class="tag">${C(k).label}</div>`+E.filter(e=>e.cat==k).map(e=>`<button class="chip" data-id="${e.id}">${gl(k)}${e.name}${e.shown===false?' (not drawn)':''}</button>`).join('')+'</div>').join('');
 $('table').addEventListener('click',ev=>{
  const m=ev.target.closest('[data-m]'),k=ev.target.closest('[data-k]'),i=ev.target.closest('[data-id]');
  if(m){vw=m.dataset.m;$$('#md button').forEach(b=>{const o=b==m;b.classList.toggle('on',o);b.setAttribute('aria-pressed',o)});panel()}
  else if(k){cat=cat==k.dataset.k?'':k.dataset.k;flt()}
  else if(i){sel(i.dataset.id,true)}});
 sel('reef-structures',false)}
function flt(){$$('#lg button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.k==cat));
 E.forEach(e=>{const off=cat&&e.cat!=cat;$$(`[data-id="${e.id}"]`).forEach(x=>{x.classList.toggle('dim',!!off);const bt=x.tagName=='SPAN'?x.firstChild:x;bt.tabIndex=off?-1:0})})}
function sel(id,sc){cur=id;$$('.hs,#el .chip').forEach(x=>x.classList.toggle('on',x.dataset.id==id));panel();if(sc)$('td').scrollIntoView({block:'nearest',behavior:'smooth'})}
function panel(){const e=E.find(x=>x.id==cur),c=C(e.cat);
 const rel=[...new Set([...(e.links||[]),...E.filter(x=>(x.links||[]).includes(e.id)).map(x=>x.id)])].map(i=>E.find(x=>x.id==i)).filter(Boolean);
 const S=(t,b)=>`<details open><summary>${t}</summary><p>${b}</p></details>`;
 const pub=[S('Definition and function',e.def),S('Relationship to the coastal ecosystem',e.eco),S('Restoration and monitoring methods',e.methods)];
 const cli=[S('Applicable OceanShot service',(e.service||c.service)+' <span class="note">(proposed, pending confirmation)</span>'),S('Potential client benefits',e.client),S('Related projects and research','[PLACEHOLDER: link verified OceanShot projects and publications]')];
 $('td').innerHTML=`<div class="tag">${gl(e.cat)}${c.label}</div><h3>${e.name}</h3><span class="pill">Unverified draft</span>${e.shown===false?' <span class="pill">Not shown in illustration</span>':''}`+(rel.length?'<p class="note">Related: '+rel.map(r=>`<button class="chip" data-id="${r.id}">${gl(r.cat)}${r.name}</button>`).join('')+'</p>':'')+(vw=='public'?pub:cli).join('')+S('Scientific sources and limitations','Sources: [PLACEHOLDER, citations required]. '+D.limits)}
const f=n=>'$'+Math.round(n).toLocaleString('en-US');
function calc(){
 const d=+$('dmg').value,c=+$('cost').value,m=+$('mon').value,r=$('red').value/100*$('scen').value,k=$('dr').value/100;
 const ben=d*Math.min(r,1),net=ben-m;let rows='';
 [5,10,15,20].forEach(y=>{let pv=-c;for(let t=1;t<=y;t++)pv+=net/Math.pow(1+k,t);
  let pb=0;for(let t=1;t<=y;t++)pb+=net/Math.pow(1+k,t);const bc=(pb)/c;
  rows+=`<tr><td>${y} years</td><td>${f(pv)}</td><td>${bc.toFixed(2)}</td></tr>`});
 const pay=net>0?(c/net).toFixed(1)+' yrs (undiscounted)':'No payback';
 $('res').innerHTML=`<tr><td>Annual benefit</td><td colspan=2 class="out">${f(ben)}</td></tr><tr><td>Simple payback</td><td colspan=2>${pay}</td></tr><tr><th>Horizon</th><th>NPV</th><th>Benefit-cost</th></tr>`+rows;
}
document.querySelectorAll('#p3 input,#p3 select').forEach(e=>e.oninput=calc);calc();
