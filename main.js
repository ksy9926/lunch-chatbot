const { App } = require("@slack/bolt");
const dotenv = require("dotenv");

const { stores, 명령어 } = require("./const.js");
const {
  sendRandomStore,
  sendRandomLadder,
  sendStoreList,
  sendStoreInfo,
  addStore,
} = require("./utils.js");

dotenv.config();

const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.event("message", async ({ event, say }) => {
  const text = event.text;
  console.log("text:", text);

  if (text.startsWith(".랜덤")) {
    sendRandomStore(text, say);
  } else if (text.startsWith(".사다리")) {
    sendRandomLadder(text, say);
  } else if (text === ".명령어" || text === ".help") {
    say(명령어);
  } else if (text.startsWith(".목록")) {
    sendStoreList(text, say);
  } else if (text.startsWith(".추가")) {
    addStore(text, say);
  } else {
    const store = stores.find(({ name }) => text.startsWith(`.${name}`));

    if (store) {
      sendStoreInfo(store, say);
    }
  }
});

// Start your app
(async () => {
  await app.start(3000);

  console.log("⚡️ Bolt app is running!");
})();
