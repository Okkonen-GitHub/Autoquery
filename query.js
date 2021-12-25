
const get_syllable = () => {
  let s = document.querySelector("body > div.main.page > div.middle > div.canvasArea > div.round > div.syllable");
  return s ? s.innerHTML.toUpperCase() : console.log("Shits fucked [CAN'T FIND THE SYLLABLE]");
}

const get_turn = () => {
  let turn = document.querySelector("body > div.main.page > div.bottom > div.round > div.selfTurn");
  if (turn.getAttribute("hidden") === null) { // check if it's user's turn
    return true;
  } else {
    return false;
  }
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const main = async () => {

  await sleep(2000);
  
  let syllable = get_syllable()
  setInterval(() => {
    let temp = get_syllable() // if the syllable has changed and it's users turn, then query
    if (syllable !== temp && get_turn()) {
      syllable = temp;
      console.log(syllable);
      let query = window.open(
        `https://www.thefreedictionary.com/words-containing-${syllable}`,
        'query',
        'width=400, height=400, toolbar=0, menubar=0, scrollbars=0, resizable=1, location=0'
      )
    }
  }, 1000);
}

main();
