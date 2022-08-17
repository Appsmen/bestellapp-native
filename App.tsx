import { View } from "react-native";
import { WebView } from "react-native-webview";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

const App = () => {
  async function registerForPushNotificationsAsync() {
    let token;

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);

    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => console.log(token));
  }, []);

  return (
    <View style={{ width: "100%", height: "100%", paddingTop: 40 }}>
      <WebView source={{ uri: "https://bestelapp-appsmen.vercel.app" }} />
    </View>
  );
};

export default App;
