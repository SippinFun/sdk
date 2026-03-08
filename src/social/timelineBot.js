const generateMeme = require("../meme-engine/memeGenerator");

function postTimeline() {
  const meme = generateMeme();

  console.log("Posting to timeline...");
  console.log(`🔥 ${meme}`);
}

module.exports = postTimeline;
