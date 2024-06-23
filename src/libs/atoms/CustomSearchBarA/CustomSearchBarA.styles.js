import { StyleSheet } from 'react-native';
import { Color } from '../../../../GlobalStyles';

const CustomSearhBarAstyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.gray50,
        borderRadius: 8,
        paddingVertical: 0,
        paddingHorizontal: 10,
        marginHorizontal: 7,
        width: '95%',
        // marginTop: 8,
      },
      input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
      },
      filterButton: {
        padding: 8,
      },
    }); 

export default CustomSearhBarAstyles;