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
$('vr').innerHTML='<tr><th>Item</th><th>Verifier</th></tr>'+[["Service scopes and capabilities","Commercial"],["Partner-delivered services and partner agreements","Commercial, Legal"],["Project facts, results, imagery rights","Scientific, Legal"],["Reef and beach protection claims","Scientific, Engineering"],["Structure designs and installation methods","Engineering"],["Mitigation and permitting statements","Legal"],["Headline data point and source","Scientific"],["Table tile definitions, evidence and service mapping","Scientific, Commercial"],["Calculator assumptions, pricing, ROI","Commercial, Scientific"],["Lab and nonprofit funding separation","Legal"],["Lab caption, donor acknowledgment wording, image rights","Commercial, Legal"]].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('');

const CT={"Habitats":["#2a9d8f","Reef & Beach Resilience"],"Interventions":["#e07a3f","Restoration Strategy & Project Delivery"],"Technologies":["#5b6fd6","Coastal Science & Monitoring"],"Monitoring metrics":["#8c63b8","Coastal Science & Monitoring"],"Ecosystem services":["#c9a85c","Coastal Science & Monitoring"]};
const TL=[["Co","Coral reef","Habitats"],["Sg","Seagrass meadow","Habitats"],["Mg","Mangrove","Habitats"],["Sm","Salt marsh","Habitats"],["Du","Beach and dune","Habitats"],
["Cp","Coral propagation and outplanting","Interventions"],["Rs","Reef structures","Interventions"],["Pr","Passive restoration","Interventions"],["Ar","Active restoration","Interventions"],["Hy","Hybrid approach","Interventions"],["Cv","Conventional infrastructure (comparison)","Interventions"],
["Dr","Drone survey","Technologies"],["Pg","Photogrammetry mapping","Technologies"],["Hd","Hydrodynamic modeling","Technologies"],["Sn","Sensors and loggers","Technologies"],
["Cc","Coral cover","Monitoring metrics"],["Bd","Biodiversity survey","Monitoring metrics"],["Wa","Wave attenuation","Monitoring metrics"],["Sc","Shoreline change","Monitoring metrics"],
["Ps","Coastal protection","Ecosystem services"],["Fs","Fisheries support","Ecosystem services"],["Av","Asset and property value","Ecosystem services"],["Bc","Blue carbon","Ecosystem services"]];
let cat='';
const BP=[[21,85,72],[19,140,72],[4,190,108],[3,240,128],[10,306,132],[18,332,92],[2,376,134],[1,480,222],[22,480,300],[13,455,184],[20,560,205],[5,535,262],[0,625,268],[15,613,336],[16,680,270],[6,740,286],[11,612,52],[12,520,110],[14,702,138],[17,640,148],[7,570,385],[8,620,385],[9,670,385]];
const NS='http://www.w3.org/2000/svg';
function mk(t,a,p){const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);p.appendChild(e);return e}
(function(){const sc=$('sc');
 for(let x=440;x<=540;x+=7){const y=235+(x-430)*.5;mk('path',{d:`M${x} ${y}v-${14+(x%3)*5}`},$('sg'))}
 const cl=['#e8786b','#f0a35e','#c46fb0','#e7d45f'];
 for(let x=568,i=0;x<=680;x+=12,i++){mk('circle',{cx:x,cy:300+(x-560)*.133-5,r:7+(i%3)*2,fill:cl[i%4]},$('cr'))}
 BP.forEach(p=>{const t=TL[p[0]],g=mk('g',{class:'bd','data-i':p[0],tabindex:0,role:'button','aria-label':t[1]},sc);
  mk('circle',{cx:p[1],cy:p[2],r:15,fill:CT[t[2]][0],stroke:'#fff','stroke-width':2},g);
  const x=mk('text',{x:p[1],y:p[2]+4,'text-anchor':'middle',fill:'#fff','font-size':11,'font-weight':700,stroke:'#0008','stroke-width':2,'paint-order':'stroke'},g);x.textContent=t[0];
  mk('title',{},g).textContent=t[1]});
 sc.addEventListener('click',e=>{const g=e.target.closest('[data-i]');if(g)sel(+g.dataset.i)});
 sc.addEventListener('keydown',e=>{if(e.key=='Enter'){const g=e.target.closest('.bd');if(g)sel(+g.dataset.i)}})})();
function sel(i){document.querySelectorAll('#sc [data-i]').forEach(x=>x.classList.toggle('on',x.dataset.i==i));tdet(TL[i])}
function tbl(){$('tlg').innerHTML=Object.keys(CT).map(k=>`<button style="--c:${CT[k][0]}" class="${cat==k?'on':''}" data-k="${k}">${k}</button>`).join('');
 document.querySelectorAll('#tlg button').forEach(b=>b.onclick=()=>{cat=cat==b.dataset.k?'':b.dataset.k;tbl()});
 document.querySelectorAll('#sc [data-i]').forEach(x=>x.classList.toggle('dim',!!cat&&TL[x.dataset.i][2]!=cat))}
function tdet(t){$('td').innerHTML=`<div class="tag">${t[2]}</div><h3>${t[1]}</h3><span class="pill">Unverified</span><table><tr><td>Definition</td><td>[PLACEHOLDER]</td></tr><tr><td>Where it applies</td><td>[PLACEHOLDER]</td></tr><tr><td>Evidence and source</td><td>[PLACEHOLDER, citation required]</td></tr><tr><td>Related OceanShot service (proposed)</td><td>${CT[t[2]][1]}</td></tr><tr><td>Related projects</td><td>[Link to project pages once verified]</td></tr></table>`}
tbl();tdet(TL[0]);
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
