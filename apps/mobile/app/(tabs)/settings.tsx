import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-white text-2xl font-bold">Settings</Text>
      <Text className="text-slate-400 mt-2">설정 화면</Text>
    </View>
  );
}
