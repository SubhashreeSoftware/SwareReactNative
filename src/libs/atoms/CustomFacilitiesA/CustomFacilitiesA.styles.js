import { StyleSheet } from 'react-native';
import { FontSize, Margin } from "../../../../GlobalStyles"; 

const CustomFacilitiesAstyles = StyleSheet.create({

  headerText: {
    fontSize: FontSize.size_lg,
    fontWeight: 'bold',
  },
  facilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  facility: {
    width: '25%',
    alignItems: 'center',
    marginVertical: Margin.m_mini,
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: "center"
  },
  facilityText: {
    textAlign: 'center',
    marginTop: Margin.m_8xs,
    fontSize: FontSize.size_sm,
  },
});

export default CustomFacilitiesAstyles;
