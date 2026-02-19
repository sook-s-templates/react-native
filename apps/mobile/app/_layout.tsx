import "../global.css";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

// 앱 로딩 중 스플래시 화면 유지
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: '(tabs)',
};

// 커스텀 라이트 테마 (index.css의 색상 기반)
const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4E52FF',      // primary-050
    background: '#FFFFFF',   // gray-000
    card: '#FFFFFF',
    text: '#1A1C20',         // gray-090
    border: '#ECEEF0',       // gray-010
    notification: '#FF4A52', // red-050
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#4E52FF',
    background: '#1A1C20',
    card: '#30343C',
    text: '#FFFFFF',
    border: '#585C64',
    notification: '#FF4A52',
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // 폰트 로딩 (Pretendard 사용시 assets/fonts/에 폰트 파일 추가 필요)
  const [fontsLoaded] = useFonts({
    // 'Pretendard-Regular': require('../assets/fonts/Pretendard-Regular.otf'),
    // 'Pretendard-Medium': require('../assets/fonts/Pretendard-Medium.otf'),
    // 'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf'),
    // 'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // 폰트 로딩 중이면 빈 화면 (스플래시 유지)
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}>
      <View className="flex-1 bg-surface text-text-01">
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="test" options={{ title: 'Test Page' }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}
