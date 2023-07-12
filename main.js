const { App } = require("@slack/bolt");
const dotenv = require("dotenv");

const { stores, 명령어 } = require("./const.js");
const {
  sendRandomStore,
  sendRandomLadder,
  sendStoreList,
  sendStoreInfo,
  addStore,
  CommandReader,
  CommandReaderResponse,
} = require("./utils.js");

dotenv.config();

const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.event("message", async ({ event, say }) => {
  const cr = CommandReader(event);

  switch (cr.command) {
    case CommandReaderResponse.RANDOM:
      sendRandomStore(text, say);
      break;
    case CommandReaderResponse.LADDER:
      sendRandomLadder(text, say);
      break;
    case CommandReaderResponse.HELP:
      say(명령어);
      break;
    case CommandReaderResponse.LIST:
      sendStoreList(text, say);
      break;
    case CommandReaderResponse.ADD:
      addStore(text, say);
      break;
    default:
      const store = stores.find(({ name }) => text.startsWith(`.${name}`));

      if (store) {
        sendStoreInfo(store, say);
      }
      break;
  }
});

// Start your app
(async () => {
  await app.start(3000);

  console.log("⚡️ Bolt app is running!");
})();
