const SippinAgent = require("../src/agent/agent");
const postTimeline = require("../src/social/timelineBot");

const agent = new SippinAgent("Sippin");

console.log(agent.speak());
console.log(agent.chargeTimeline());

postTimeline();
