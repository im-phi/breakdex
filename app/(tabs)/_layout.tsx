import { Tabs } from 'expo-router';

export default () => {
	return (
		<Tabs>
			<Tabs.Screen name="library" />
			<Tabs.Screen name="lab" />
			<Tabs.Screen name="create" />
			<Tabs.Screen name="battle" />
			<Tabs.Screen name="settings" />
		</Tabs>
	)
} 