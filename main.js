document.querySelector("container").addEventListener(`click`, function (e) {
  const isPiece = e.target.className.includes("h.keys")
  const isPractice = e.target.className.includes("h.keys2")
  const isGroup = e.target.className.includes("h.keys3")
  if (isPiece) {
    const selection = `#` + e.target.id + `p.`
    console.log(selection)
    document.querySelector(selection).classList.add(`p.lyrics`)
    document.querySelector(selection).classList.remove(`p.lyrics2`)
    document.querySelector(selection).classList.remove(`p.lyrics3`)
  } else if (isPractice) {
    const selection = `#` + e.target.id + `p/`
    console.log(selection)
    document.querySelector(selection).classList.add(`p.lyrics2`)
    document.querySelector(selection).classList.remove(`p.lyrics1`)
    document.querySelector(selection).classList.remove(`p.lyrics3`)
  } else if (isGroup) {
    const selection = `#` + e.target.id + `p%`
    console.log(selection)
    document.querySelector(selection).classList.add(`p.lyrics3`)
    document.querySelector(selection).classList.remove(`p.lyrics1`)
    document.querySelector(selection).classList.remove(`p.lyrics2`)
  } else !e
})
