import { StyleSheet } from "react-native";
import { Border, Color, FontSize } from "../../../../../../GlobalStyles";

const EReceiptScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white, 
  },
  button: {
    // justifyContent: 'center',
    // alignItems: 'center', 
    borderRadius: Border.br_3xs,
    // width: '100%',
    // backgroundColor: Color.primaryBlue,
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSize.size_base, 
  },
});

export default EReceiptScreenStyles;
