import { StyleSheet } from 'react-native';
import { Color, Padding } from "../../../../../../GlobalStyles";

const FlatlistJstyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
       
      },
      item: {
        backgroundColor: 'whitesmoke',
        padding: 10,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        
    
      },
      image: {
        width: 70,
        height: 70,
        borderRadius: 15,
        backgroundColor: "#ffebcd"
        
      },
      title: {
        fontSize: 19,
        fontWeight: "bold",
        paddingLeft: 10,
      },
      header: {
        fontWeight: "bold",
        fontSize: 25,
      },
      titleitem :{
        flexDirection: 'column',
      },
      subtitle:{
        color: '#696969',
        fontSize: 14,
        paddingLeft: 10,
      },
      time: {
        paddingBottom: 45,
      },
});


export default FlatlistJstyles;