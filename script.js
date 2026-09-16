/*
  ANDANTE CUP — EDIT ONLY THE DATA BELOW.
  After changing it: GitHub → script.js → ✏️ Edit → Commit changes.
*/

const tournament = {
  // =========================
  // 1. CHAMPIONS
  // Newest season should have the highest season number.
  // score and photo are optional.
  // =========================
  champions: [
    // Example:
    // { season: 1, winner: "David", date: "20 September 2026", time: "20:00", score: "4 : 2", photo: "champion-photo.jpg" },
  ],

  // =========================
  // 2. PLAYERS
  // Put the current tournament players here.
  // =========================
  players: [
    // { name: "David", status: "CONFIRMED" },
    // { name: "Andrei", status: "CONFIRMED" },
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
  }else{
    const c=list[0];
    const photo=c.photo ? `<img class="champion-photo" src="${esc(c.photo)}" alt="${esc(c.winner)}">` : `<div class="champion-photo">${esc(initials(c.winner))}</div>`;
    box.innerHTML = `
      ${photo}
      <div class="champion-info">
        <p class="small">THE ONE WHO HOLDS THE BELT</p>
        <h2 class="champion-name">${esc(c.winner)}</h2>
        <p class="champion-meta">${esc(c.date)} • ${esc(c.time)}</p>
        ${c.score ? `<div class="score">${esc(c.score)}</div>` : ""}
      </div>
      <div class="season-badge"><span>SEASON</span><strong>${esc(c.season)}</strong></div>`;
  }

  $("championList").innerHTML = list.length ? list.map(c=>`
    <article class="row">
      <div class="num">S${String(c.season).padStart(2,"0")}</div>
      <div class="winner">${esc(c.winner)}</div>
      <div class="date">${esc(c.date)}</div>
      <div class="time">${esc(c.time)}${c.score ? " • " + esc(c.score) : ""}</div>
    </article>`).join("") :
    `<div class="empty">THE FIRST CHAMPION HAS NOT BEEN CROWNED YET.</div>`;
}

function renderPlayers(){
  const p=tournament.players || [];
  $("playerGrid").innerHTML=p.length ? p.map((x,i)=>`
    <article class="player">
      <div class="player-number">PLAYER ${String(i+1).padStart(2,"0")}</div>
      <div class="player-name">${esc(x.name)}</div>
      <div class="player-status">${esc(x.status || "CONFIRMED")}</div>
    </article>`).join("") :
    `<div class="empty">PLAYERS WILL BE ANNOUNCED SOON.</div>`;
}


renderChampion();
renderPlayers();
