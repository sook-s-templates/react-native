import { View, Text, Pressable } from 'react-native';
import { Link, router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <View className="bg-green-500 rounded-2xl px-8 py-6 mb-4">
        <Text className="text-white text-2xl font-bold">App is Running!</Text>
      </View>
      <Text className="text-slate-300 text-lg">NativeWind is working</Text>
      <Text className="text-slate-500 text-sm mt-2 mb-8">pnpm monorepo + Expo + Tailwind</Text>

      {/* 방법 1: Link 컴포넌트 */}
      <Link href="/test" asChild>
        <Pressable className="bg-blue-500 px-6 py-3 rounded-xl mb-3">
          <Text className="text-white font-semibold">Link로 이동</Text>
        </Pressable>
      </Link>

      {/* 방법 2: router.push */}
      <Pressable
        onPress={() => router.push('/test')}
        className="bg-purple-500 px-6 py-3 rounded-xl"
      >
        <Text className="text-white font-semibold">router.push로 이동</Text>
      </Pressable>
    </View>
  );
}
