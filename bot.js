console.log("MiniCrafter...(online)");
import mineflayer from "mineflayer";

const bot = mineflayer.createBot({
  host: "Zordiee.aternos.me",
  port: 29047,
  username: "MiniCrafter",
  auth: "offline",
  version: "1.21.4",
});

bot.on("spawn", () => {
  bot.chat("I'm Online");
});

bot.on("chat", (username, message) => {
  if (username === bot.username) return;
  const message_lower = message.toLowerCase();
  const healthChecker = ["how are you", "are you ok", "are yoy ok"];
  if (healthChecker.some((checker) => message_lower.includes(checker))) {
    bot.chat("Yeah I'm Fine");
  }
  const curse_Filter = ["fuck","sex","Nigga","ass","Asswhole","stupid","dumfuck","yourmom"]
  if (message_lower.includes("online")) {
    bot.chat("yes, I'm currently online");
  }
  else if(curse_Filter.some(checker =>message_lower.includes(checker))){
    bot.chat("what did you SAYYY ? ?? NIGGA ? I f***ed your mama")
  }
});

bot.on("kicked", console.log);
bot.on("error", console.log);
