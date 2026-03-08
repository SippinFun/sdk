function generateMeme() {
  const memes = [
    "When the meme hits before the pump.",
    "Community stronger than charts.",
    "Timeline domination mode activated.",
    "Just Sippin things."
  ];

  return memes[Math.floor(Math.random() * memes.length)];
}

module.exports = generateMeme;
