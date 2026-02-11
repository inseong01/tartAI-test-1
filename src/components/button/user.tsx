import { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface UserButtonProps {
  handlePress: () => void;
  children: ReactNode;
}

export default function UserButton({ handlePress, children }: UserButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress} activeOpacity={1}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
});
