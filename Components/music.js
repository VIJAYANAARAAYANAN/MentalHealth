import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { audioFiles, songs } from '../audiofiles/audiofiles'; 
import { AntDesign } from '@expo/vector-icons';

const Music = ({ route, navigation }) => {
  const { item } = route.params; 
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [outputDevice, setOutputDevice] = useState('Speaker'); 

  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('../src/fonts/Montserrat-Medium.ttf'),
    'Montserrat-ExtraBold': require('../src/fonts/Montserrat-ExtraBold.ttf')
  });

  useEffect(() => {
    return sound ? () => {
      sound.unloadAsync().catch(error => console.error('Error unloading sound:', error));
    } : undefined;
  }, [sound]);

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    }
  }, [sound]);

  useEffect(() => {
    async function loadNewSong() {
      try {
        if (sound) {
          await sound.unloadAsync();
        }
        const { sound: newSound } = await Audio.Sound.createAsync(
          audioFiles[item.fileKey],
          { shouldPlay: true }
        );
        setSound(newSound);
        setIsPlaying(true);
        
      } catch (error) {
        console.error('Error loading new sound:', error);
      }
    }

    loadNewSong(); // Load new song when item changes
  }, [item]); // Trigger effect when item changes

  const onPlaybackStatusUpdate = status => {
    if (status.isLoaded) {
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
    }
  };

  const playPauseHandler = async () => {
    try {
      if (sound) {
        if (isPlaying) {
          await sound.pauseAsync();
        } else {
          await sound.playAsync();
        }
        setIsPlaying(!isPlaying);
       
      } else {
        const { sound: newSound } = await Audio.Sound.createAsync(
          audioFiles[item.fileKey],
          { shouldPlay: true }
        );
        setSound(newSound);
        setIsPlaying(true);
   
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const skipForward = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      await sound.setPositionAsync(status.positionMillis + 10000);
    }
  };

  const skipBackward = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      await sound.setPositionAsync(status.positionMillis - 10000);
    }
  };

  const playNextSong = async () => {
    const keys = Object.keys(audioFiles);
    const currentIndex = keys.indexOf(item.fileKey);
    const nextIndex = (currentIndex + 1) % keys.length; 
    const nextSongKey = keys[nextIndex];
    navigation.setParams({ item: songs.find(song => song.fileKey === nextSongKey) });
  };

  const playPreviousSong = async () => {
    const keys = Object.keys(audioFiles);
    const currentIndex = keys.indexOf(item.fileKey);
    const previousIndex = (currentIndex - 1 + keys.length) % keys.length; // Ensure positive index
    const previousSongKey = keys[previousIndex];
    navigation.setParams({ item: songs.find(song => song.fileKey === previousSongKey) }); // Update item in navigation params
  };

  const formatTime = millis => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const onSlidingComplete = async value => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  

  

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.albumCover} />
      <View style={{ display: 'flex' }}>
        <Text style={styles.title}>{item.album}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
      </View>
      <Slider
        style={styles.progressBar}
        value={position}
        maximumValue={duration}
        onSlidingComplete={onSlidingComplete}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="darkgrey"
        thumbTintColor="orange"
      />
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime(position)}</Text>
        <Text style={styles.timerText}>{formatTime(duration)}</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.songcontrolButton} onPress={playPreviousSong}>
          <FontAwesome name="step-backward" size={24} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playcontrolButton} onPress={playPauseHandler}>
          <FontAwesome name={isPlaying ? "pause" : "play"} size={30} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.songcontrolButton} onPress={playNextSong}>
          <FontAwesome name="step-forward" size={24} color="orange" />
        </TouchableOpacity>
      </View>
      <View style={styles.outputDeviceContainer}>
      <View style={{display:"flex",flexDirection:'row'}}>
      <MaterialCommunityIcons name="speaker-bluetooth" size={26} color="orange" />
        <Text style={styles.outputDeviceText}>Speaker</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',gap:20}}>
      <AntDesign name="sharealt" size={24} color="orange" />
      <MaterialCommunityIcons name="dots-vertical" size={27} color="orange" />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000133',
  },
  albumCover: {
    width: '80%',
    height: '45%',
    marginTop: '20%',
    marginVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    color: 'orange',
    fontFamily: 'Montserrat-ExtraBold',
    marginTop: 10,
    textAlign: 'left',
  },
  artist: {
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    fontFamily: 'Montserrat-Medium',
    marginBottom: 0,
  },
  progressBar: {
    width: '90%',
    height: '5%',
    marginTop: 20,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "80%",
    marginBottom: 10,
  },
  timerText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },
  controls: {
    flexDirection: 'row',
    marginTop: 0,
    alignContent: 'center',
    alignItems: 'center',
  },
  playcontrolButton: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center', 
    justifyContent: 'center', 
    marginHorizontal: 10,
  },
  songcontrolButton: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outputDeviceContainer: {
    width:'80%',
    display:'flex',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',   
    marginTop: 20,
  },
  outputDeviceText: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-betweem',
    color: 'white',
    marginLeft: 10,
    fontFamily: 'Montserrat-Medium',
  },
});

export default Music;
