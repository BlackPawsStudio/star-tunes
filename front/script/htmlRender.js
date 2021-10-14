const popup = `
  hui
`
const insertTile = (color) => {
  let res = ``;
  const range = color ? 7 : 6;
  for (let i = 0; i < range; i++) {
    res += color?
    `<div class="w-tile tile">${soundData[0][i].note}</div>`:
    `<div class="b-tile tile">${soundData[1][i].note}</div>`;
  }
  return res;
}

const getPiano = () => `
<div id="piano">
  <div id="piano-w">
    ${insertTile(true)}
  </div>
  <div id="piano-b">
    ${insertTile(false)}
  </div>
</div>
`