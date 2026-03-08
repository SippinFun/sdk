const phrases = [
  "Memes are the strongest currency.",
  "Charging the timeline.",
  "Another meme, another victory.",
  "Sippin never sleeps.",
  "The meme war has begun."
];

function randomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

module.exports = {
  randomPhrase
};
