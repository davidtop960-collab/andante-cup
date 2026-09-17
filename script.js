/*
  ANDANTE CUP — EDIT ONLY THE DATA BELOW.
  After changing it: GitHub → script.js → ✏️ Edit → Commit changes.
*/

const tournament = {
  champions: [
    {
      season: 1,
      winner: "Рустам",
      club: "Paris Saint-Germain F.C.",
      photo: "rustam.jpg"
    },
    {
  season: 2,
  winner: "Dava",
  club: "Manchester City",
  date: "23.08.2026",
  score: "1:0",
  photo: "dava.jpg"
}
  ],
};

const $ = id => document.getElementById(id);
const esc = v => String(v ?? "").replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[x]));

function initials(name){
  return String(name).split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase() || "AC";
}

function renderChampion(){
  const list = [...tournament.champions].sort((a,b)=>Number(b.season)-Number(a.season));
  const box = $("currentChampion");

  if(!list.length){
    box.innerHTML = `
      <div class="champion-photo">♛</div>
      <div class="champion-info">
        <p class="small">THE ONE WHO HOLDS THE BELT</p>
        <h2 class="champion-name">—</h2>
        <p class="champion-meta">No champion recorded yet.</p>
      </div>
      <div class="season-badge"><span>SEASON</span><strong>—</strong></div>`;
  } else {
    const c=list[0];
    const photo=c.photo
      ? `<img class="champion-photo" src="${esc(c.photo)}" alt="${esc(c.winner)}">`
      : `<div class="champion-photo">${esc(initials(c.winner))}</div>`;

    const meta = [
      c.club,
      c.date,
      c.time
    ].filter(Boolean).map(esc).join(" • ");

    box.innerHTML = `
      ${photo}
      <div class="champion-info">
        <p class="small">THE ONE WHO HOLDS THE BELT</p>
        <h2 class="champion-name">${esc(c.winner)}</h2>
        <p class="champion-meta">${meta}</p>
        ${c.score ? `<div class="score">${esc(c.score)}</div>` : ""}
      </div>
      <div class="season-badge"><span>SEASON</span><strong>${esc(c.season)}</strong></div>`;
  }

  $("championList").innerHTML = list.length ? list.map(c=>`
    <article class="row">
      <div class="num">S${String(c.season).padStart(2,"0")}</div>
      <div class="winner">${esc(c.winner)}</div>
      <div class="date">${esc(c.club || "")}</div>
      <div class="time">${esc(c.score || "")}</div>
    </article>`).join("") :
    `<div class="empty">THE FIRST CHAMPION HAS NOT BEEN CROWNED YET.</div>`;
}

renderChampion();
