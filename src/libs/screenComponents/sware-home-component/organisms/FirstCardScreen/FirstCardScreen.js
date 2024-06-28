import { View } from 'react-native';
import CssA from '../../../../atoms/CommonCss/CssA';
import CamCardA from '../CamCardA/CamCardA';

export default function FirstCardScreen() {

  return (
    <View style={CssA.container}>
      <CamCardA />
    </View>
  );
}
