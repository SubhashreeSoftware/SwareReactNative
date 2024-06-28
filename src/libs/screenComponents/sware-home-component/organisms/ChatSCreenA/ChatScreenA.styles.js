import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Padding, Margin } from '../../../../../../GlobalStyles';

const ChatScreenAStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  todayText: {
    textAlign: 'center',
    marginVertical: Margin.m_3xs,
    color: '#333',
    fontSize: FontSize.size_xs,
    // backgroundColor:'#f4f4f4',
  },
  chatList: {
    paddingHorizontal: Padding.p_3xs,
  },
  messageContainer: {
    marginVertical: Margin.m_8xs,
    padding: Padding.p_3xs,
    borderRadius: 16,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#1A6EF0',
    alignSelf: 'flex-end',
  },
  serviceMessage: {
    backgroundColor: '#f4f4f4',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: FontSize.size_sm,
    flexWrap: 'wrap',
  },
  userMessageText: {
    color: Color.white,
  },
  serviceMessageText: {
    color: Color.black,
  },
  messageTime: {
    fontSize: FontSize.size_3xs,
    color: Color.white,
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  userMessageTime: {
    color: Color.white,
  },
  serviceMessageTime: {
    color: Color.black,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // borderTopWidth: 1,
    // borderTopColor: '#ddd',
    backgroundColor: Color.white,
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: Padding.p_3xs,
    backgroundColor: '#f4f4f4',
    borderRadius: Border.br_xs,
    borderColor: '#ddd',
    borderWidth: 1,
    marginHorizontal: Margin.m_3xs,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: Border.br_xl,
    backgroundColor: Color.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreenAStyles;
