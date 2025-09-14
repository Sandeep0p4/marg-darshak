// app/(tabs)/_layout.tsx
import React from "react";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="prevention" options={{ title: "Prevention" }} />
      <Tabs.Screen name="sos" options={{ title: "SOS" }} />
      <Tabs.Screen name="chatbot" options={{ title: "Chatbot" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
