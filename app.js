/* ---------------- NAVIGATION ---------------- */
function go(p){
  document.querySelectorAll('.page').forEach(s=>s.classList.remove('show'));
  document.getElementById(p).classList.add('show');
  document.querySelectorAll('.nav-links button').forEach(b=>b.classList.toggle('active',b.dataset.nav===p));
  window.scrollTo({top:0,behavior:'instant'});
  if(p==='learn') showCats();
}

/* ---------------- HOME + LEARNING CARDS ---------------- */
function catCard(key,c){
  const n=c.topics.length;
  return `<div class="card cat" onclick="openCat('${key}')">
    <span class="bar"></span>
    <div class="ico">${c.icon}</div>
    <h3>${c.name}</h3><p>${c.blurb}</p>
    <div class="meta">${n} TOPIC${n!==1?'S':''}</div>
  </div>`;
}
function renderCats(){
  const html=Object.entries(DATA).map(([k,c])=>catCard(k,c)).join('');
  document.getElementById('home-cats').innerHTML=html;
  document.getElementById('learn-cats').innerHTML=html;
}
function openCat(key){
  go('learn');
  currentCat=key;
  document.getElementById('learn-cats-view').style.display='none';
  document.getElementById('learn-topic-view').style.display='block';
  document.getElementById('side-cat-name').textContent=DATA[key].name;
  buildSidebar(key);
  openTopic(key,DATA[key].topics[0].id);
}
function showCats(){
  document.getElementById('learn-cats-view').style.display='block';
  document.getElementById('learn-topic-view').style.display='none';
  document.getElementById('topic-search').value='';
  document.getElementById('search-results').style.display='none';
}

/* ---------------- SIDEBAR (category-specific) ---------------- */
let currentCat=null,currentTopic=null;
function buildSidebar(key){
  document.getElementById('side-list').innerHTML=DATA[key].topics.map(t=>
    `<li><button data-t="${t.id}" onclick="openTopic('${key}','${t.id}')">
       <span class="dot"></span><span class="txt">${t.title}</span></button></li>`).join('');
}
function toggleSidebar(){document.getElementById('learn-shell').classList.toggle('collapsed');}

/* ---------------- TOPIC CONTENT ---------------- */
function openTopic(key,id){
  currentCat=key;currentTopic=id;
  const c=DATA[key], t=c.topics.find(x=>x.id===id);
  document.querySelectorAll('#side-list button').forEach(b=>b.classList.toggle('active',b.dataset.t===id));
  const steps=t.steps.map(s=>{
    const o=typeof s==='string'?{text:s}:s;
    return `<li>${o.text}${o.note?`<div class="note">💡 ${o.note}</div>`:''}</li>`;
  }).join('');
  document.getElementById('topic-content').innerHTML=`
    <span class="crumb">${c.name}</span>
    <h1>${t.title}</h1>
    <p class="lead">${t.lead}</p>
    <h2 class="step-h">Step-by-step</h2>
    <ol class="steps">${steps}</ol>`;
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ---------------- SEARCH (across all topics) ---------------- */
function searchTopics(q){
  const box=document.getElementById('search-results');
  const cats=document.getElementById('learn-cats');
  q=q.trim().toLowerCase();
  if(!q){box.style.display='none';cats.style.display='grid';return;}
  cats.style.display='none';box.style.display='block';
  const hits=[];
  Object.entries(DATA).forEach(([k,c])=>c.topics.forEach(t=>{
    if((t.title+' '+t.lead).toLowerCase().includes(q)) hits.push({k,c,t});
  }));
  box.innerHTML = hits.length ? `<div class="grid">`+hits.map(h=>
    `<div class="card" onclick="openCat('${h.k}');setTimeout(()=>openTopic('${h.k}','${h.t.id}'),50)">
      <div class="ico">${h.c.icon}</div><h3>${h.t.title}</h3>
      <p>${h.t.lead}</p><div class="meta">${h.c.name.toUpperCase()}</div></div>`).join('')+`</div>`
    : `<div class="empty"><div class="big">🔍</div>No topics match "<b>${q}</b>".</div>`;
}

/* ---------------- ISSUE TRACKER (localStorage) ---------------- */
const KEY='legacy_it_issues';
function loadIssues(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch(e){return[]}}
function saveIssues(a){try{localStorage.setItem(KEY,JSON.stringify(a))}catch(e){}}
function addIssue(){
  const title=document.getElementById('f-title').value.trim();
  if(!title){alert('Please add an issue title.');return;}
  const arr=loadIssues();
  arr.unshift({
    id:Date.now(), title,
    desc:document.getElementById('f-desc').value.trim(),
    fix:document.getElementById('f-fix').value.trim(),
    tag:document.getElementById('f-tag').value,
    date:new Date().toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'})
  });
  saveIssues(arr);
  ['f-title','f-desc','f-fix'].forEach(i=>document.getElementById(i).value='');
  renderIssues();updateStats();
}
function delIssue(id){
  if(!confirm('Delete this issue?'))return;
  saveIssues(loadIssues().filter(i=>i.id!==id));renderIssues();updateStats();
}
function renderIssues(){
  const q=(document.getElementById('issue-search').value||'').toLowerCase();
  const f=document.getElementById('issue-filter').value;
  let arr=loadIssues();
  if(f) arr=arr.filter(i=>i.tag===f);
  if(q) arr=arr.filter(i=>(i.title+i.desc+i.fix).toLowerCase().includes(q));
  const list=document.getElementById('issue-list');
  if(!arr.length){list.innerHTML=`<div class="empty"><div class="big">🗂️</div>No issues yet. Log your first one on the left.</div>`;return;}
  list.innerHTML=arr.map(i=>`
    <div class="issue">
      <div class="issue-head"><h4>${esc(i.title)}</h4><span class="tag">${esc(i.tag)}</span></div>
      ${i.desc?`<div class="desc">${esc(i.desc)}</div>`:''}
      ${i.fix?`<div class="fix"><span class="flbl">Steps to fix</span><pre>${esc(i.fix)}</pre></div>`:''}
      <div class="row-foot"><span class="date">${i.date}</span><button class="del" onclick="delIssue(${i.id})">Delete</button></div>
    </div>`).join('');
}
function esc(s){return (s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}

/* ---------------- STATS ---------------- */
function updateStats(){
  let tc=0;Object.values(DATA).forEach(c=>tc+=c.topics.length);
  document.getElementById('stat-cats').textContent=Object.keys(DATA).length;
  document.getElementById('stat-topics').textContent=tc;
  document.getElementById('stat-issues').textContent=loadIssues().length;
}

/* ---------------- INIT ---------------- */
renderCats();renderIssues();updateStats();
document.getElementById('foot-date').textContent=new Date().getFullYear()+' · Legacy Behavioral Health Center';
