import { Stack } from 'expo-router';
import {useColorScheme} from "react-native";
import CustomHeader from "@/components/CustomHeader";

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
      <Stack>
        <Stack.Screen name="index" options={{ header : ()=> <CustomHeader/> }} />
      </Stack>
  );
}
