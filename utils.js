const dayText = ["일", "월", "화", "수", "목", "금", "토"];

const getDateText = () => {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();

  return `${month + 1}월 ${date}일 ${dayText[day]}요일`;
};

module.exports = {
  getDateText,
};
