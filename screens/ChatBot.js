import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/Colors';
import run from '../genAI'; // Import the genAI function

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const scrollViewRef = useRef();

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    const userMessage = { sender: 'user', text: message };
    // setChatHistory([...chatHistory, userMessage]);

    setMessage(''); // Clear the input field immediately

    try {
      const response = await run(message);
      const botMessage = { sender: 'bot', text: response };
      setChatHistory((prevChatHistory) => [...prevChatHistory, userMessage, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = { sender: 'bot', text: 'Error processing your request' };
      setChatHistory((prevChatHistory) => [...prevChatHistory, userMessage, errorMessage]);
    }

    scrollViewRef.current?.scrollToEnd({ animated: true }); // Scroll to the end of the chat
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        <Text style={styles.heading}>PayaniChatBot</Text>
        <View style={styles.chatContainer}>
          {chatHistory.map((chat, index) => (
            <Text key={index} style={chat.sender === 'user' ? styles.userMessage : styles.botMessage}>
              {chat.text}
            </Text>
          ))}
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.bgColor,
  },
  scrollView: {
    flex: 1,
    marginBottom: 60, // Adjust to make space for the input field
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 20,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primaryColor,
    color: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.secondaryColor,
    color: Colors.black,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  button: {
    backgroundColor: Colors.primaryColor,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default ChatBot;