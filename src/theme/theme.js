// src/theme/theme.js

export const colors = {
  primary: '#1E90FF',       // Main blue color
  secondary: '#FFA500',     // Accent orange
  background: '#F5F5F5',    // App background
  text: '#333333',           // Main text
  success: '#28a745',       // Success alerts
  danger: '#dc3545',        // Error alerts
};
export const fonts = {
  regular: 'System',
  bold: 'System-Bold',
  light: 'System-Light',
};
export const buttonStyles = {
  borderRadius: 8,
  paddingVertical: 12,
  paddingHorizontal: 20,
  alignItems: 'center',
  justifyContent: 'center',
};
export const textStyles = {
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  subheading: {
    fontSize: 18,
    color: colors.text,
  },
  body: {
    fontSize: 14,
    color: colors.text,
  },
};
