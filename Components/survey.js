import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import questions from './questions.json';

const Survey = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const totalQuestions = questions.questions.length;

  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [currentQuestionIndex]: option });
  };

  const moveToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const moveToPreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const renderOptions = () => {
    const question = questions.questions[currentQuestionIndex];
    return question.options.map((option, index) => {
      const isSelected = answers[currentQuestionIndex] === option;
      return (
        <TouchableOpacity
          key={index}
          onPress={() => handleOptionClick(option)}
        >
          <View style={[
            styles.optionButton,
            { borderColor: isSelected ? 'white' : 'lightgrey' },
            isSelected && styles.selectedOption,
          ]}>
            <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>
              {option}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.question}>
          <Text style={styles.questionNumber}>
            {`Question : ${currentQuestionIndex + 1}/${totalQuestions}`}
          </Text>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {questions.questions[currentQuestionIndex].question}
          </Text>
        </View>
        <View style={styles.optionsContainer}>{renderOptions()}</View>
        
            <View style={styles.buttonContainer}>
        {currentQuestionIndex > 0 && (
            <TouchableOpacity onPress={moveToPreviousQuestion} style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        )}
        {answers[currentQuestionIndex] && currentQuestionIndex < totalQuestions - 1 ? (
            <TouchableOpacity onPress={moveToNextQuestion} style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        ) : null}
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#002D62',
    },
    question: {
      marginTop: 100,
      marginLeft: 20,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    questionNumber: {
      fontSize: 18,
      textAlign: 'left',
      marginBottom: 10,
      color: 'white',
    },
    questionContainer: {
      alignItems: 'center',
      marginBottom: 50,
      width: '87%',
    },
    questionText: {
      fontSize: 20,
      marginBottom: 10,
      textAlign: 'center',
      color: 'white',
    },
    optionsContainer: {
      alignContent: 'center',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      width: '90%',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingBottom: 50,
    },
    selectedOption: {
      borderColor: 'white',
      borderRadius:20,
      borderWidth:3,
      shadowColor: '#fff',
      shadowOffset: { width: 5, height: 2 },
      shadowOpacity: 4.8,
      shadowRadius: 45,
      elevation: 10,
    },
    selectedOptionText: {
      fontWeight: 'bold',
      color: 'white',
    },
    optionButton: {
      width: '90%',
      backgroundColor: '#002D62',
      borderColor: 'lightgrey',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 120,
      paddingVertical: 10,
      margin: 5,
    },
    optionText: {
      fontSize: 16,
      paddingHorizontal: 10,
      textAlign: 'center',
      color: 'grey', 
    },
   
    buttonContainer: {
        flexDirection: 'column',
        gap:20,
        textAlign:'center',
        justifyContent: 'space-around',
        width: '80%',
        position: 'absolute',
        bottom: 20,
      },
      button: {
        backgroundColor: '#0047AB',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
      },
      buttonText: {
        color: 'white',
        textAlign:'center',
        fontSize: 16,
      },
  });
  

export default Survey;
