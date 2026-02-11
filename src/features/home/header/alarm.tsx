import UserButton from '@/src/components/button/user';
import BellSVG from '@/src/components/icons/bell-svg';

import { Alert } from 'react-native';

export default function AlarmButton() {
  const handlePress = () => {
    Alert.alert('미구현 기능입니다.');
  };

  return (
    <UserButton handlePress={handlePress}>
      <BellSVG />
    </UserButton>
  );
}
