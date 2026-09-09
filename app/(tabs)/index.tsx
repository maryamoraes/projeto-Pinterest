import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const shareOptions = [
  { id: 1, name: 'Copiar link', icon: 'link-outline', color: '#444' },
  { id: 2, name: 'WhatsApp', icon: 'logo-whatsapp', color: '#25D366' },
  { id: 3, name: 'Mensagens', icon: 'chatbubble-outline', color: '#34C759' },
  { id: 4, name: 'Facebook', icon: 'logo-facebook', color: '#1877F2' },
  { id: 5, name: 'Email', icon: 'mail-outline', color: '#ffffff', iconColor: '#000' },
  { id: 6, name: 'X', icon: 'close-outline', color: '#000' },
  { id: 7, name: 'Instagram', icon: 'logo-instagram', color: '#E4405F' },
  { id: 8, name: 'Mais', icon: 'ellipsis-horizontal', color: '#444' },
];

export default function HomeScreen() {
  const [salvo, setSalvo] = useState(false);


  function toggleSalvar() {
    setSalvo(!salvo);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra de Topo */}
      <View style={styles.header}>
        <Pressable style={styles.topButton}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </Pressable>
        <Pressable style={styles.topButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Card do Pin */}
        <View style={styles.imageCard}>
          <Image 
            source={require('./assets/quadro')} 
            style={styles.image} 
          />
          
          {}
          <Pressable
            style={[styles.checkButton, salvo && styles.checkButtonActive]}
            onPress={toggleSalvar}
          >
            <Ionicons name="checkmark" size={18} color="#fff" />
          </Pressable>
        </View>

        {}
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {}
        <View style={styles.divider} />

        {}
        <Text style={styles.shareTitle}>Compartilhar link do Pin</Text>

        {}
        <View style={styles.shareGrid}>
          {shareOptions.map((item) => (
            <Pressable key={item.id} style={styles.shareItem}>
              <View style={[styles.iconCircle, { backgroundColor: item.color }]}>
                <Ionicons
                  name={item.icon as any}
                  size={24}
                  color={item.iconColor || '#fff'}
                />
              </View>
              <Text style={styles.shareText} numberOfLines={1}>
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
    zIndex: 10,
  },
  topButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  imageCard: {
    width: '85%',
    height: 380,
    borderRadius: 24,
    overflow: 'hidden',
    marginTop: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  checkButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkButtonActive: {
    backgroundColor: '#8B5CF6', 
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#555',
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#222',
    marginVertical: 20,
  },
  shareTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 20,
  },
  shareGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  shareItem: {
    width: '25%', 
    alignItems: 'center',
    marginBottom: 20,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  shareText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});