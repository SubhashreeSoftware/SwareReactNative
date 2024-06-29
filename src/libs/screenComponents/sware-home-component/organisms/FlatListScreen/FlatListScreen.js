import { View } from 'react-native';
import CssA from '../../../../atoms/CommonCss/CssA';
import FlatListA from '../FlatListA/FlatListA';

export default function FlatListScreen() {

  return (
    <View style={CssA.container}>
      <FlatListA />
    </View>
  );
}
