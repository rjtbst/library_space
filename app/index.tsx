import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={s.root}>
      <Text style={s.text}>LibrarySpace 📚</Text>
      <Text style={s.sub}>Expo Router is working!</Text>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  text: { fontSize: 24, fontWeight: '700', color: '#1A3560' },
  sub:  { fontSize: 14, color: '#64748B', marginTop: 8 },
});