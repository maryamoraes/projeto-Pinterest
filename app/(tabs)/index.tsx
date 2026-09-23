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

import { router } from 'expo-router';

export default function HomeScreen() {
  const [salvo, setSalvo] = useState(false);


  function toggleSalvar() {
    setSalvo(!salvo);
  }

  return (
    <SafeAreaView style={styles.container}>
      {}
      <View style={styles.header}>
        <Pressable style={styles.topButton}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </Pressable>
        <Pressable style={styles.topButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {}
        <View style={styles.imageCard}>
          <Image 
            source={require('../../assets/images/quadro.jpg')}
            style={styles.image}
            resizeMode="contain" 
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
        <Text style={styles.shareTitle}>...</Text>

        <Pressable 
          onPress={() => router.push('/detalhes')} 
          style={styles.detalhesButton}
          >
          <Text style={styles.detalhesButtonText}>Ver detalhes</Text>
        </Pressable>

        
            
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
    width: 280,          
    aspectRatio: 1,
    borderRadius: 24,
    overflow: 'hidden',
    marginTop: 10,
    position: 'relative',
    backgroundColor: '#111',
    alignSelf: 'center',  
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

  detalhesButton: {
  backgroundColor: '#ff3333ff',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 12,
  marginBottom: 10,
},
detalhesButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
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