import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../GlobalStyles";

const CheckboxJstyles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      checkbox: {
        height: 20,
        width: 20,
        borderRadius: Border. m_xl,
        borderWidth: 2,
        borderColor: Color.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Margin.m_3xs,
      },
      checkedCheckbox: {
        backgroundColor: Color.white,
      },
      checkmark: {
        color: Color.primarycolor,
        fontSize: FontSize.size_xs,
        fontWeight: 'bold',
      },
      label: {
        fontSize: 16,
        color: 'Color.primarycolor',
        marginRight: Margin.m_11xl,
      },
});


export default CheckboxJstyles;