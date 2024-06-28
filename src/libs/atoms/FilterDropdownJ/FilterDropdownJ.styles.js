import { StyleSheet } from 'react-native';
import { Color, FontSize, Margin, Padding } from "../../../../GlobalStyles";

const FileDropdownJstyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Padding.p_lgi,
        backgroundColor: '#F5FCFF',

      },
      label: {
        fontSize: FontSize.size_lg,
      },
      selectedText: {
        marginTop: 45,
        marginBottom: Margin.m_3xs,
        fontSize: FontSize.size_lg,  

      },
      
});


export default FileDropdownJstyles;