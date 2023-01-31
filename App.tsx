import { ConfigurationProvider } from "contexts/configuration";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const queryClient = new QueryClient();
  /* TODO: check splash screen */
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ConfigurationProvider>
        <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </QueryClientProvider>
        </SafeAreaProvider>
      </ConfigurationProvider>
    );
  }
}
