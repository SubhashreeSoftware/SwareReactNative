import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../GlobalStyles";
import CssA from '../CommonCss/CSSA';

const FlatListAstyles = StyleSheet.create({
    container: {
        ...CssA.container
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