const { stores, members, errorMessage } = require("./const.js");

const dayText = ["일", "월", "화", "수", "목", "금", "토"];

const CommandReaderResponse = {
  RANDOM: "RANDOM",
  LADDER: "LADDER",
  HELP: "HELP",
  LIST: "LIST",
  ADD: "ADD",
  ETC: "ETC",
};

/**
 * [key]: string[] | {
 *   commands: string[],
 *   options?: {
 *     exact: boolean;
 *   }
 * }
 */
const commandReaderMap = {
  RANDOM: [".랜덤"],
  LADDER: [".사다리"],
  HELP: {
    commands: [".명령어", ".help"],
    options: {
      exact: true,
    },
  },
  LIST: [".목록"],
  ADD: [".추가"],
};

const CommandReader = (event) => {
  const validateAndReturnCommand = (commandText) => {
    for (const key of Object.keys(commandReaderMap)) {
      if (commandReaderMap[key].length === undefined) {
        for (const command of commandReaderMap[key].commands) {
          if (
            commandReaderMap[key].options?.exact
              ? commandText === command
              : commandText.startsWith(command)
          ) {
            return CommandReaderResponse[key];
          }
        }
      } else {
        for (const command of commandReaderMap[key]) {
          if (commandText.startsWith(command)) {
            return CommandReaderResponse[key];
          }
        }
      }
    }

    return CommandReaderResponse.ETC;
  };

  const commandReaderObj = new Proxy(event, {
    get: (obj, prop) => {
      if (prop === "command") {
        return validateAndReturnCommand(obj.text);
      }

      return obj[prop];
    },
  });

  return commandReaderObj;
};

const getDateText = () => {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();

  return `${month + 1}월 ${date}일 ${dayText[day]}요일`;
};

// .랜덤
const sendRandomStore = (text, say) => {
  const option = text.split(".랜덤 ")[1];

  if (/\d+분/.test(option)) {
    const optionTime = option.split("분")[0];
    const filteredStores = stores.filter((store) => store.time < optionTime);
    const storeIndex = Math.floor(Math.random() * filteredStores.length);
    const selectedStore = filteredStores[storeIndex];

    const message = {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: selectedStore.name,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: selectedStore.isRequest
              ? `업데이트 대기중`
              : `*거리:* ${selectedStore.distance}m  *예상소요시간:* ${
                  selectedStore.time + 1
                }분`,
          },
        },
      ],
    };
    say(message);
  } else {
    const storeIndex = Math.floor(Math.random() * stores.length);
    const selectedStore = stores[storeIndex];
    const message = {
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: selectedStore.name,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*거리:* ${selectedStore.distance}m  *예상소요시간:* ${
              selectedStore.time + 1
            }분`,
          },
        },
      ],
    };
    say(message);
  }
};

// .사다리
const sendRandomLadder = (text, say) => {
  try {
    const option = text.split("사다리 ")[1];
    const groupCount = option && /2/.test(option) ? 2 : 3;
    const filteredOption =
      groupCount === 3 ? option : option.replaceAll(" ", "").replace(/\d/g, "");
    const excludeMembers = filteredOption
      ?.split("/")
      .filter((member) => members.includes(member));

    const filteredMembers = members.filter(
      (member) => !excludeMembers?.includes(member)
    );
    const filteredMembersLength = filteredMembers.length;
    const groups = groupCount === 3 ? [[], [], []] : [[], []];

    for (let i = 0; i < filteredMembersLength; i++) {
      const randomIdx = Math.floor(Math.random() * filteredMembers.length);

      groups[i % groupCount].push(filteredMembers[randomIdx]);
      filteredMembers.splice(randomIdx, 1);
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
              text: `*${getDateText()}*  |  미참석 ${
                excludeMembers?.length ? "- " + excludeMembers.join(", ") : "X"
              }`,
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
            text: groups
              .map((group, index) => `*${index + 1}조 :* ${group.join(", ")}`)
              .join("\n"),
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
  } catch (e) {
    say(errorMessage);
  }
};

// .목록
const sendStoreList = (text, say) => {
  const option = text.split(".목록 ")[1];
  const category = option || "전체";

  const filteredStores =
    option && option !== "전체"
      ? stores.filter(
          ({ category, foods }) => category === option || foods.includes(option)
        )
      : stores;

  if (filteredStores.length > 0) {
    const messages =
      category === "전체"
        ? {
            blocks: [
              {
                type: "header",
                text: {
                  type: "plain_text",
                  text: "음식점 목록",
                  emoji: true,
                },
              },
              {
                type: "context",
                elements: [
                  {
                    text: `*전체*  |  ${filteredStores.length}개`,
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
                  text: filteredStores
                    .map((item) => `*${item.name}* | ${item?.category || "-"}`)
                    .join("\n"),
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
          }
        : {
            blocks: [
              {
                type: "header",
                text: {
                  type: "plain_text",
                  text: "음식점 목록",
                  emoji: true,
                },
              },
              {
                type: "context",
                elements: [
                  {
                    text: `*${category}*  |  ${filteredStores.length}개`,
                    type: "mrkdwn",
                  },
                ],
              },
              {
                type: "divider",
              },
              ...filteredStores.slice(0, 45).map((item) => ({
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*${item.name}* | ${item?.category || "-"}`,
                },
                ...(item?.url && {
                  accessory: {
                    type: "button",
                    text: {
                      type: "plain_text",
                      text: "네이버 지도",
                      emoji: true,
                    },
                    value: "click_me_123",
                    url: item.url,
                    action_id: "button-action",
                  },
                }),
              })),
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

    say(messages);
  } else {
    say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "해당 키워드를 포함하는 목록이 존재하지 않습니다.",
          },
        },
      ],
    });
  }
};

// .${가게이름}
const sendStoreInfo = (store, say) => {
  if (store.isRequest) {
    say({
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: store.name + " (준비중입니다.)",
            emoji: true,
          },
        },
      ],
    });
  } else {
    const message = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: store.name,
            emoji: true,
          },
        },
        {
          type: "context",
          elements: [
            {
              text: `*${store.category}*  |  ${store.foods.join(", ")}`,
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
            text: `${store.menus
              .map((menu) => `${menu.name} - ${menu.price.toLocaleString()}원`)
              .join("\n")}`,
          },
          accessory: {
            type: "image",
            image_url: store.thumbnail,
            alt_text: "store_thumbnail",
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*거리:* ${store.distance}m  *예상소요시간:* ${
              store.time + 1
            }분`,
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "네이버 지도",
              emoji: true,
            },
            value: "click_me_123",
            url: store.url,
            action_id: "button-action",
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
  }
};

const addStore = (text, say) => {
  const option = text.split(".추가 ")[1];

  if (option && stores.map(({ name }) => name).includes(option)) {
    say({
      blocks: [
        {
          type: "context",
          elements: [
            {
              text: `이미 존재하고 있는 식당입니다.`,
              type: "mrkdwn",
            },
          ],
        },
      ],
    });
  } else if (option) {
    stores.push({
      name: option,
      distance: 0,
      time: 0,
      category: "",
      foods: [""],
      menus: [],
      url: "",
      thumbnail: "",
      isRequest: true,
      x: 0,
      y: 0,
    });

    say({
      blocks: [
        {
          type: "context",
          elements: [
            {
              text: `추가되었습니다. 추가적인 정보는 곧 업데이트 예정입니다.`,
              type: "mrkdwn",
            },
          ],
        },
      ],
    });
  }
};

module.exports = {
  addStore,
  sendRandomStore,
  sendRandomLadder,
  sendStoreList,
  sendStoreInfo,
  CommandReader,
  CommandReaderResponse,
};
