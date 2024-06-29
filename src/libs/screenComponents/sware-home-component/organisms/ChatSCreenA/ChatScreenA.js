import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreenAStyles from './ChatScreenA.styles';

const messages = [
  { id: '1as', text: 'Hello, good morning.', sender: 'service', time: '08:41' },
  { id: '2ac', text: 'I am a Customer Service. Is there anything I can help you with? 😊', sender: 'service', time: '08:41' },
  { id: '3as', text: 'Hi, I\'m having problems with my payment.', sender: 'user', time: '08:42' },
  { id: '4ac', text: 'Can you help me?', sender: 'user', time: '08:42' },
  { id: '5as', text: 'Of course...', sender: 'service', time: '08:43' },
  { id: '6ac', text: 'Can you tell me the problem you are having? so I can help solve it 😊', sender: 'service', time: '08:43' },
];

const ChatScreenA = () => {
  const [isSendButton, setIsSendButton] = useState(false);

  const renderItem = ({ item }) => (
    <View
      style={[
        ChatScreenAStyles.messageContainer,
        item.sender === 'user'
          ? ChatScreenAStyles.userMessage
          : ChatScreenAStyles.serviceMessage,
      ]}
    >
      <Text
        style={[
          ChatScreenAStyles.messageText,
          item.sender === 'user'
            ? ChatScreenAStyles.userMessageText
            : ChatScreenAStyles.serviceMessageText,
        ]}
      >
        {item.text}
      </Text>
      <Text style={ChatScreenAStyles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={ChatScreenAStyles.container}>
      <Text style={ChatScreenAStyles.todayText}>Today</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={ChatScreenAStyles.chatList}
      />
      <View style={ChatScreenAStyles.inputContainer}>
          <TextInput
            placeholder="Type a message..."
            style={ChatScreenAStyles.textInput}
            onFocus={() => setIsSendButton(true)}
            onChangeText={(text) => setIsSendButton(text.length > 0)}
          />
        <TouchableOpacity style={ChatScreenAStyles.sendButton}>
          <Icon
            name={isSendButton ? 'send' : 'mic'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreenA;
