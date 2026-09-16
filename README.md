# ANDANTE CUP — Website v3

GitHub Pages website for the ANDANTE CUP.

## How to update the tournament

Open `script.js` on GitHub and press the ✏️ Edit button.

### Add a champion
Example:
`{ season: 1, winner: "David", date: "20 September 2026", time: "20:00", score: "4 : 2" },`

The newest season automatically becomes **CURRENT CHAMPION**.

### Add a champion photo
Upload the image into the repository, for example `champion-photo.jpg`, then add:
`photo: "champion-photo.jpg"`

### Add players
Example:
`{ name: "David", status: "CONFIRMED" },`

After every change:
1. Save/Commit changes.
2. Wait a short moment.
3. Refresh the website.

No database or paid hosting is required.
