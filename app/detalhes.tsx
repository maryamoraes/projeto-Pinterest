import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
export default function DetalhesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Essa é a tela de Detalhes!</Text>

      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    backgroundColor: '#ff3333ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});