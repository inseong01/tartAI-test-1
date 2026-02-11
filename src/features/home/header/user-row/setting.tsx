import UserButton from '@/src/components/button/user';
import MoreSVG from '@/src/components/icons/more-svg';

import { Alert } from 'react-native';

export default function SettingButton() {
  const handlePress = () => {
    Alert.alert('미구현 기능입니다.');
  };

  return (
    <UserButton handlePress={handlePress}>
      <MoreSVG />
    </UserButton>
  );
}
