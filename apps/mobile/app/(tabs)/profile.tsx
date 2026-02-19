import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-white text-2xl font-bold">Profile</Text>
      <Text className="text-slate-400 mt-2">내 프로필</Text>
    </View>
  );
}
