const personality = require("./personality");

class SippinAgent {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name}: ${personality.randomPhrase()}`;
  }

  chargeTimeline() {
    return `${this.name} is charging the timeline with meme energy ⚡`;
  }
}

module.exports = SippinAgent;
