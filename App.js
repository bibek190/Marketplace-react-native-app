import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Apps/Screens/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_Z2VudWluZS1tYWxhbXV0ZS05Ni5jbGVyay5hY2NvdW50cy5kZXYk">
      <View className="flex-1  bg-white">
        <StatusBar style="auto" />
        <SignedIn>
          <Text className="mt-20">You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "lightblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
