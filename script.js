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
  ]
};

const $ = id => document.getElementById(id);

const esc = v => String(v ?? "").replace(/[&<>"']/g, x => ({
  '&':'&amp;',
  '<':'&lt;',
  '>':'&gt;',
  '"':'&quot;',
  "'":'&#039;'
}[x]));

function initials(name) {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(x => x[0])
    .join("")
    .toUpperCase() || "AC";
}

function renderChampion() {
  const list = [...tournament.champions]
    .sort((a, b) => Number(b.season) - Number(a.season));

  const box = $("currentChampion");

  if (!list.length) {
    box.innerHTML = `
      <div class="champion-photo">♛</div>
      <div class="champion-info">
        <p class="small">THE ONE WHO HOLDS THE BELT</p>
        <h2 class="champion-name">—</h2>
        <p class="champion-meta">No champion recorded yet.</p>
      </div>
      <div class="season-badge">
        <span>SEASON</span>
        <strong>—</strong>
      </div>`;
  } else {
    const c = list[0];

    const photo = c.photo
      ? `<img class="champion-photo" src="${esc(c.photo)}" alt="${esc(c.winner)}">`
      : `<div class="champion-photo">${esc(initials(c.winner))}</div>`;

    const meta = [c.club, c.date, c.time]
      .filter(Boolean)
      .map(esc)
      .join(" • ");

    box.innerHTML = `
      ${photo}
      <div class="champion-info">
        <p class="small">THE ONE WHO HOLDS THE BELT</p>
        <h2 class="champion-name">${esc(c.winner)}</h2>
        <p class="champion-meta">${meta}</p>
        ${c.score ? `<div class="score">${esc(c.score)}</div>` : ""}
      </div>
      <div class="season-badge">
        <span>SEASON</span>
        <strong>${esc(c.season)}</strong>
      </div>`;
  }

  $("championList").innerHTML = list.map(c => `
    <article class="row">
      <div class="num">S${String(c.season).padStart(2, "0")}</div>

      <img
        class="history-photo"
        src="${esc(c.photo)}"
        alt="${esc(c.winner)}"
      >

      <div class="winner-block">
        <div class="winner">${esc(c.winner)}</div>
        <div class="date">${esc(c.club || "")}</div>
      </div>

      <div class="time">
        ${esc(c.score || "")}
        ${c.date ? `<div class="history-date">${esc(c.date)}</div>` : ""}
      </div>
    </article>
  `).join("");
}

renderChampion();

const style = document.createElement("style");

style.textContent = `
.row {
  grid-template-columns: 70px 64px minmax(0,1fr) 120px;
}

.history-photo {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #d8ad5d;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #171717;
}

.winner-block {
  min-width: 0;
}

.history-date {
  margin-top: 6px;
  color: #777;
  font-size: 11px;
}

@media(max-width:800px) {
  .row {
    grid-template-columns: 55px 58px minmax(0,1fr);
    gap: 12px;
  }

  .history-photo {
    width: 52px;
    height: 52px;
  }

  .time {
    grid-column: 3;
    margin-top: -4px;
  }
}
`;

document.head.appendChild(style);
