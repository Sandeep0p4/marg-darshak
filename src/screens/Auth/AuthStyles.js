import { colors, fonts, buttonStyles, textStyles } from '../theme/theme';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.heading}>Login</Text>
      <TouchableOpacity style={[buttonStyles, { backgroundColor: colors.primary }]}>
        <Text style={{ color: '#fff' }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
});
