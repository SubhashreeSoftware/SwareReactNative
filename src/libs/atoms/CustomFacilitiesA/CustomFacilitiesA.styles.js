import { StyleSheet } from 'react-native';
import { FontSize } from "../../../../GlobalStyles"; 

const CustomFacilitiesAstyles = StyleSheet.create({
  container: {
    width: '100%',
  },
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
    width: '22%',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  facilityText: {
    textAlign: 'center',
    fontSize: 12,
  },
});

export default CustomFacilitiesAstyles;
