const imgClasses = ['img/1.png','img/2.png','img/3.png','img/4.png','img/5.png','img/6.png','img/7.png','img/8.png','img/9.png','img/10.png'];

const detailPages = [
  'detailpage/UN-Human-Rights-Knowledge-Gateway.html',
  'detailpage/Analysing-the-Role-of-Pauses-in-Literary-Text-using-Deep-learning-and-Emotion-Analysis.html',
  'detailpage/The-Tempest-A-network-analysis-of-character-emotions-and-political-dynamics.html',
  'detailpage/Aldo-Leopolds-Digital-Edition.html',
  'detailpage/How-does-geographical-background-affect-education.html',
  'detailpage/ArtRe-Public-Art-Re-qualification.html',
  'detailpage/Silent-Spring.html',
  'detailpage/Arne-Naess-LOD.html',
  'detailpage/i-o-i.html',
  'detailpage/An-E-day.html',
];

const homePage = document.getElementById('homePage');
const skillPage = document.getElementById('skillPage');
const homeLink = document.getElementById('homeLink');

function showHome(pushState, scrollY) {
  skillPage.style.display = 'none';
  homePage.style.display = '';
  homeLink.style.display = 'none';
  if (pushState !== false) history.pushState({page:'home'}, '', location.pathname);
  if (scrollY !== undefined) {
    requestAnimationFrame(() => window.scrollTo({top: scrollY, behavior: 'instant'}));
  }
}

function showSkillPage(skillName, pushState) {
  document.getElementById('skillTitle').textContent = skillName;

  const grid = document.getElementById('skillGrid');
  grid.innerHTML = '';

  document.querySelectorAll('.card').forEach((card, idx) => {
    const skills = (card.dataset.skills || '').split(',').map(s => s.trim());
    if (!skills.includes(skillName)) return;
    const title = card.querySelector('h3').textContent;
    const desc = card.querySelector('p').textContent;
    const date = card.querySelector('.card-date').textContent;
    const tag = card.dataset.category;

    const el = document.createElement('div');
    el.className = 'skill-card';
    el.innerHTML = `<div class="skill-card-inner">
      <div class="sk-meta"><span class="sk-tag">${tag}</span></div>
      <img class="sk-img" src="${imgClasses[idx]}" alt="${title}">
      <h3>${title}</h3>
      <div class="sk-date">${date}</div>
      <p>${desc}</p>
      <span class="card-skill-tag">${skills[0]}</span>
    </div>`;
    el.addEventListener('click', () => { window.location.href = detailPages[idx]; });
    grid.appendChild(el);
  });

  homePage.style.display = 'none';
  skillPage.style.display = 'block';
  homeLink.style.display = 'block';
  window.scrollTo(0, 0);
  if (pushState !== false) history.pushState({page:'skill',skill:skillName}, '', 'skill-'+encodeURIComponent(skillName));
}

// Browser back/forward
window.addEventListener('popstate', (e) => {
  const state = e.state;
  if (!state || state.page === 'home') { showHome(false, state && state.scrollY); }
  else if (state.page === 'skill') { showSkillPage(state.skill, false); }
});

// Initial state
const urlParams = new URLSearchParams(location.search);
const skillParam = urlParams.get('skill');
const redirectPath = sessionStorage.getItem('404_redirect');

if (redirectPath) {
  // 404.html 트릭으로 넘어온 경우 (새로고침 or 직접 URL 접속)
  sessionStorage.removeItem('404_redirect');
  const match = redirectPath.match(/^\/skill-(.+)$/);
  if (match) {
    const skillName = decodeURIComponent(match[1]);
    showSkillPage(skillName);
    history.replaceState({page:'skill',skill:skillName}, '', redirectPath);
  } else {
    history.replaceState({page:'home'}, '', location.pathname);
  }
} else if (skillParam) {
  // detail 페이지 skill 태그 클릭으로 넘어온 경우
  showSkillPage(skillParam);
  history.replaceState({page:'skill',skill:skillParam}, '', 'skill-'+encodeURIComponent(skillParam));
} else {
  history.replaceState({page:'home'}, '', location.pathname);
}

homeLink.addEventListener('click', (e) => { e.preventDefault(); showHome(); });

// Card clicks → navigate to detail pages
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = detailPages[parseInt(card.dataset.idx)];
  });
});

// Card skill tags → navigate to skill page
document.querySelectorAll('.card .card-skill-tag').forEach(tag => {
  tag.style.cursor = 'pointer';
  tag.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    showSkillPage(tag.textContent.trim());
  });
});


// ── Category Filter ──
(function() {
  const buttons = document.querySelectorAll('.categories button');
  const cards = document.querySelectorAll('.card');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      clearSearchFilter();
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card => { card.style.display = (f==='all'||card.dataset.category===f)?'':'none'; });
    });
  });
})();

// ── Search Filter ──
const allCards = document.querySelectorAll('.card');
const filterBanner = document.getElementById('filterBanner');
const filterKeyword = document.getElementById('filterKeyword');
const clearFilterBtn = document.getElementById('clearFilter');

function applySearchFilter(q, idx) {
  allCards.forEach((c,i) => { c.style.display = idx.includes(i)?'':'none'; });
  filterKeyword.textContent = q;
  filterBanner.classList.add('visible');
  document.querySelectorAll('.categories button').forEach(b => b.classList.remove('active'));
}
function clearSearchFilter() {
  allCards.forEach(c => { c.style.display=''; });
  filterBanner.classList.remove('visible');
  const a = document.querySelector('.categories button[data-filter="all"]');
  if(a){document.querySelectorAll('.categories button').forEach(b=>b.classList.remove('active'));a.classList.add('active');}
}
clearFilterBtn.addEventListener('click', clearSearchFilter);

// ── Fullscreen Search ──
(function() {
  const toggle=document.getElementById('searchToggle'), overlay=document.getElementById('searchOverlay'),
    closeBtn=document.getElementById('searchClose'), input=document.getElementById('searchInput'),
    res=document.getElementById('searchResults');
  const cards=document.querySelectorAll('.card'), cd=[];
  cards.forEach((c,i)=>{
    const t=c.querySelector('h3').textContent,
      d=c.querySelector('p').textContent,
      cat=c.dataset.category,
      dt=c.querySelector('.card-date').textContent,
      skills=(c.dataset.skills||'').split(',').map(s=>s.trim()).filter(Boolean);
    cd.push({title:t,desc:d,category:cat,date:dt,idx:i,skills});
  });
  function open(){overlay.classList.add('open');document.body.style.overflow='hidden';setTimeout(()=>input.focus(),250);}
  function close(){overlay.classList.remove('open');document.body.style.overflow='';input.value='';res.innerHTML='';}
  function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}
  function doSearch(){const raw=input.value.trim(),q=raw.toLowerCase();res.innerHTML='';if(!q)return;
    const m=cd.filter(d=>d.title.toLowerCase().includes(q)||d.desc.toLowerCase().includes(q)||d.skills.some(s=>s.toLowerCase().includes(q)));
    if(!m.length){res.innerHTML='<div class="search-no-results">No matching results.</div>';return;}
    m.forEach(mm=>{const it=document.createElement('div');it.className='search-result-item';
      it.innerHTML=`<div class="search-result-title">${mm.title}</div><div class="search-result-meta">${cap(mm.category)} · ${mm.date}</div>`;
      it.addEventListener('click',()=>{close();window.location.href=detailPages[mm.idx];});
      res.appendChild(it);});
  }
  input.addEventListener('input',doSearch);
  toggle.addEventListener('click',()=>{overlay.classList.contains('open')?close():open();});
  closeBtn.addEventListener('click',close);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open'))close();});
})();
