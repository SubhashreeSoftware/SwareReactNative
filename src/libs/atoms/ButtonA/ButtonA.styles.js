import { StyleSheet } from 'react-native';
import { Color, FontSize, Padding, Margin } from '../../../../GlobalStyles';

const ButtonAstyles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: Margin.m_xl,
    borderWidth: 1,
  borderRadius: 25,
  borderColor: "#FFF2C1",
    marginTop: Margin.m_xl,
    width: "100%"
   

  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    //elevation: 1,
    width: "100%",    
    height: 40,
  },
  text: {
    color: "#E8A905",
    fontSize: FontSize.size_base,
  },
});

export default ButtonAstyles;
