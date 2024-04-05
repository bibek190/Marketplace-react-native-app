import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Login from "./../../assets/login.png";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Image source={Login} className="w-full h-[400px] object-cover " />
      <View className="p-10 bg-white mt-[-20px] rounded-t-3xl shadow-sm ">
        <Text className="text-[40px] font-bold text-center p-5">
          E-MarketPlace
        </Text>
        <Text className="text-[18px]  text-center text-slate-500 p-3">
          Buy & Sell any thing you like and make real money.
        </Text>
        <Text className="text-[18px]  text-center text-slate-5 ">
          Trade with ease
        </Text>
        <TouchableOpacity
          onPress={onPress}
          className="p-3 bg-blue-500 rounded-full mt-20"
        >
          <Text className="text-center text-white text-[18px]">
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
