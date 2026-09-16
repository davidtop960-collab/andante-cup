// Add each finished tournament here.
const champions = [
  // { season: 1, winner: "PLAYER NAME", date: "20 September 2026", time: "20:00" },
];
const list=document.getElementById('championList'),cw=document.getElementById('currentWinner'),cm=document.getElementById('currentMeta'),cs=document.getElementById('currentSeason');
if(!champions.length){list.innerHTML='<div class="empty">THE FIRST CHAMPION HAS NOT BEEN CROWNED YET.</div>'}else{const s=[...champions].sort((a,b)=>b.season-a.season),c=s[0];cw.textContent=c.winner;cm.textContent=`${c.date} • ${c.time}`;cs.textContent=c.season;list.innerHTML=s.map(c=>`<article class="row"><div class="num">S${String(c.season).padStart(2,'0')}</div><div class="winner">${e(c.winner)}</div><div class="date">${e(c.date)}</div><div class="time">${e(c.time)}</div></article>`).join('')}
function e(v){return String(v).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[x]))}
