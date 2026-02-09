import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface UserIconProps {
  children: ReactNode;
}

export default function UserIcon({ children }: UserIconProps) {
  return <View style={styles.box}>{children}</View>;
}

const styles = StyleSheet.create({
  box: {
    padding: 2,
  },
});
