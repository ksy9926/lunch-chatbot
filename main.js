const { App } = require("@slack/bolt");
const dotenv = require("dotenv");

dotenv.config();

console.log({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

const app = new App({
  token: process.env.BOT_TOKEN,
  signingSecret: process.env.SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

const menus = [
  { store: "가람 부대찌개" },
  { store: "강강술래" },
  { store: "고갯마루" },
  { store: "그윽 떡볶이" },
  { store: "그옛날손짜장" },
  { store: "남도구들" },
  { store: "나이스샤워" },
  { store: "내가왕이라면" },
  { store: "네모징어" },
  { store: "닭갈비두목" },
  { store: "담소" },
  { store: "대게마을" },
  { store: "돝고기" },
  { store: "돈까스해" },
  { store: "마포만두" },
  { store: "만월" },
  { store: "바스버거" },
  { store: "쁘라텟타이" },
  { store: "비비큐" },
  { store: "사보텐" },
  { store: "삼식이 감자탕" },
  { store: "세겹" },
  { store: "수미초밥" },
  { store: "안기덮밥마라탕" },
  { store: "오사무식당" },
  { store: "온미반" },
  { store: "원당골" },
  { store: "웨이웨이" },
  { store: "육시리" },
  { store: "이태리 부대찌개" },
  { store: "이화수 전통육개장" },
  { store: "일미집" },
  { store: "짬뽕지존" },
  { store: "조선파스타" },
  { store: "진궁" },
  { store: "차알" },
  { store: "천하돈까스" },
  { store: "청담막식당" },
  { store: "타코벨" },
  { store: "텐핑거" },
  { store: "파이어벨" },
  { store: "핑크솔" },
  { store: "하노이스토리" },
  { store: "호천당" },
  { store: "홍낭자와 김도령" },
  { store: "홍수계찜닭" },
  { store: "후라토 식당" },
  { store: "Chai797" },
];

const members = [
  "켄",
  "에디",
  "카이트",
  "노아",
  "존",
  "데이브",
  "샐리",
  "스카이",
  "주디",
  "히나",
];

app.message(".랜덤메뉴", ({ _, say }) => {
  const menuIndex = Math.floor(Math.random() * menus.length);
  say(menus[menuIndex].store);
});

app.message(".사다리", ({ _, say }) => {
  const groups = [[], [], []];
  const shuffledNames = members.sort(() => Math.random() - 0.5);
  for (let i = 0; i < shuffledNames.length; i++) {
    groups[i % 3].push(shuffledNames[i]);
  }

  const message = `1조: ${groups[0].join(", ")}\n2조: ${groups[1].join(
    ", "
  )}\n3조: ${groups[2].join(", ")}`;
  say(message);
});

// Start your app
(async () => {
  await app.start(3000);

  console.log("⚡️ Bolt app is running!");
})();
