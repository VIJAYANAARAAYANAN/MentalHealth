import React, { createContext, useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const playSound = async (track) => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(track, { shouldPlay: true });
    setSound(newSound);
    setIsPlaying(true);
    setCurrentTrack(track);
  };

  const playPauseHandler = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <AudioContext.Provider value={{ sound, isPlaying, currentTrack, playSound, playPauseHandler }}>
      {children}
    </AudioContext.Provider>
  );
};

export { AudioContext, AudioProvider };
