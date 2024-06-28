import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import CssA from '../../../../atoms/CommonCss/CssA';
import { useNavigation } from '@react-navigation/native';
import AccordianA from '../../../../atoms/AccordianA/AccordianA';
import ListA from '../../../../atoms/ListA/ListA';
import HelpCenterScreenstyles from './HelpCenterScreen.styles';

const HelpCenterScreen = () => {
  const [activeTab, setActiveTab] = useState('FAQ');
  const navigation = useNavigation();

  return (
    <View style={CssA.container}>
      <View style={HelpCenterScreenstyles.tabContainer}>
        <TouchableOpacity
          style={[HelpCenterScreenstyles.tab, activeTab === 'FAQ' && HelpCenterScreenstyles.activeTab]}
          onPress={() => setActiveTab('FAQ')}
        >
          <Text style={[HelpCenterScreenstyles.tabText, activeTab === 'FAQ' && HelpCenterScreenstyles.activeTabText]}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[HelpCenterScreenstyles.tab, activeTab === 'ContactUs' && HelpCenterScreenstyles.activeTab]}
          onPress={() => setActiveTab('ContactUs')}
        >
          <Text style={[HelpCenterScreenstyles.tabText, activeTab === 'ContactUs' && HelpCenterScreenstyles.activeTabText]}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      {activeTab === 'FAQ' ? (
        <AccordianA />
      ) : (
        <ListA navigation={navigation} />
      )}
    </View>
  );
};

export default HelpCenterScreen;
