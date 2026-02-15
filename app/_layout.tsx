import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PretendardRegular: require('@/assets/fonts/Pretendard-Regular.otf'),
    PretendardSemiBold: require('@/assets/fonts/Pretendard-SemiBold.otf'),
    PretendardBold: require('@/assets/fonts/Pretendard-Bold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='index' />
    </Stack>
  );
}
