import { View, Text } from 'react-native';

export default function MessagesScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-900">
      <Text className="text-white text-2xl font-bold">Messages</Text>
      <Text className="text-slate-400 mt-2">메시지 목록</Text>
    </View>
  );
}
