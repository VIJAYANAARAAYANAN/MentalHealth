// MiniPlayer.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AudioContext } from './AudioContext';
import { FontAwesome } from '@expo/vector-icons';

const MiniPlayer = () => {
  const { currentTrack, isPlaying, playPauseHandler, duration, position } = useContext(AudioContext);

  const formatTime = millis => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!currentTrack) {
    return null;
  }

  return (
    <View style={styles.miniPlayerContainer}>
      <Text style={styles.trackInfo}>{currentTrack.album} - {currentTrack.artist}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={playPauseHandler}>
          <FontAwesome name={isPlaying ? "pause" : "play"} size={24} color="orange" />
        </TouchableOpacity>
        <Text style={styles.timerText}>{formatTime(position)} / {formatTime(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  miniPlayerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackInfo: {
    color: 'white',
    flex: 1,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default MiniPlayer;
