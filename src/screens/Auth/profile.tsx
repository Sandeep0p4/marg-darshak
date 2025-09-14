import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Profile = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  const handleSave = () => {
    console.log("Profile Saved:", { name, phone, emergencyContact });
    // 🔹 Later: save to Firebase or backend
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Emergency Contact"
        keyboardType="phone-pad"
        value={emergencyContact}
        onChangeText={setEmergencyContact}
      />

      <Button title="Save Profile" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default Profile;
