import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function TestPage() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-white text-2xl font-bold mb-4">Test Page</Text>
      <Text className="text-slate-400 mb-8">라우팅 성공!</Text>

      <Pressable
        onPress={() => router.back()}
        className="bg-blue-500 px-6 py-3 rounded-xl"
      >
        <Text className="text-white font-semibold">뒤로가기</Text>
      </Pressable>
    </View>
  );
}
