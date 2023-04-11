const { App } = require("@slack/bolt");
const dotenv = require("dotenv");

const { menus, members } = require("./const.js");
const { getDateText } = require("./utils.js");

dotenv.config();

const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

app.event("message", async ({ event, say }) => {
  const text = event.text;

  if (text.startsWith(".랜덤")) {
    const option = text.split(".랜덤 ")[1];
    if (/\d+분/.test(option)) {
      const optionTime = option.split("분")[0];
      const filteredMenus = menus.filter((menu) => menu.time <= optionTime);
      const menuIndex = Math.floor(Math.random() * filteredMenus.length);
      const selectedMenu = filteredMenus[menuIndex];

      const message = {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: selectedMenu.store,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*거리:* ${selectedMenu.distance}m  *예상소요시간:* ${selectedMenu.time}분`,
            },
          },
        ],
      };
      say(message);
    } else {
      const menuIndex = Math.floor(Math.random() * menus.length);
      const selectedMenu = menus[menuIndex];
      const message = {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: selectedMenu.store,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*거리:* ${selectedMenu.distance}m  *예상소요시간:* ${selectedMenu.time}분`,
            },
          },
        ],
      };
      say(message);
    }
  } else if (text.startsWith(".사다리")) {
    const excludeMembers = text.split("사다리 ")[1].split("/");

    const groups = [[], [], []];
    const shuffledNames = members
      .filter((member) => !excludeMembers.includes(member))
      .sort(() => Math.random() - 0.5);
    for (let i = 0; i < shuffledNames.length; i++) {
      groups[i % 3].push(shuffledNames[i]);
    }

    const message = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `:ladder: 점심 사다리 :ladder:`,
            emoji: true,
          },
        },
        {
          type: "context",
          elements: [
            {
              text: `*${getDateText()}*  |  휴가자 X`,
              type: "mrkdwn",
            },
          ],
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text:
              "*1조 :* " +
              `${groups[0].join(", ")}\n` +
              "*2조 :* " +
              `${groups[1].join(", ")}\n` +
              "*3조 :* " +
              `${groups[2].join(", ")}\n`,
          },
        },
        {
          type: "divider",
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: ":pushpin: 버그 제보 및 기능 요청은 *Dave* 에게 문의해주세요. | 다른 명령어 보기 👉 `.명령어`",
            },
          ],
        },
      ],
    };

    say(message);
  } else if (text === ".명령어") {
    const message = {
      blocks: [
        {
          type: "section",
          text: {
            text: "[주변 식당]\n`.랜덤` - 근처 식당을 랜덤하게 추천\n`.랜덤 ${n}분` - n분 이내 식당을 랜덤하게 추천 (ex. `.랜덤 3분`)",
            type: "mrkdwn",
          },
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            text: "[사다리 타기]\n`.사다리`\n- 서비스개발팀 사다리 타기\n`.사다리 ${닉네임}/${닉네임}`\n- 미참석자 제외 사다리 타기 (ex `.사다리 데이브`, `.사다리 데이브/샐리`)",
            type: "mrkdwn",
          },
        },
      ],
    };

    say(message);
  }
});

// Start your app
(async () => {
  await app.start(3000);

  console.log("⚡️ Bolt app is running!");
})();
