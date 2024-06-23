import { StyleSheet } from 'react-native';

const FlatListAstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Color.white,
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      icon: {
        width: 40,
        height: 40,
        marginRight: 16,
      },
      textContainer: {
        flex: 1,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      description: {
        fontSize: 14,
        color: '#666',
      },
      rightContainer: {
        alignItems: 'flex-end',
      },
      amount: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      date: {
        fontSize: 14,
        color: '#666',
      },
});


export default FlatListAstyles;