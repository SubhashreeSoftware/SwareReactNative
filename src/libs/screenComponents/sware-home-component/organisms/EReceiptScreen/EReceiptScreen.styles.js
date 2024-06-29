import { StyleSheet } from "react-native";
import { Border, Color, FontSize } from "../../../../../../GlobalStyles";

const EReceiptScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white, 
  },
  button: {
    alignItems: 'center', 
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primaryBlue,
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSize.size_base, 
  },
});

export default EReceiptScreenStyles;
