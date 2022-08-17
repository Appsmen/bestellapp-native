const axios = require("axios");
// hardcoded get current thorugh app console.log
const token = "ExponentPushToken[yhAmMXG3oG_e2CMZgdfvt9]";
const payload = Array(25).fill(Array(100).fill(token));

payload.forEach((chunk) =>
  axios
    .post("https://exp.host/--/api/v2/push/send", [
      {
        to: chunk,
        badge: 2,
        body: "You've got mail",
        title: "test",
      },
    ])
    .then((b) => console.log(b.data.data[0]))
    .catch((e) => console.log(e.response))
);
