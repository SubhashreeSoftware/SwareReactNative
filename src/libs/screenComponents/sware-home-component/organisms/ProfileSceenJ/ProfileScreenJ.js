import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Switch,
    Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileScreenJstyles from './ProfileScreenJ.styles';


export default function ProfileScreenJ() {
    const [form, setForm] = useState({
        darkMode: false,
        emailNotifications: true,
        pushNotifications: false,
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={ProfileScreenJstyles.container}>
                <View style={ProfileScreenJstyles.profile}>
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}>
                        <View style={ProfileScreenJstyles.profileAvatarWrapper}>
                            <Image
                                alt=""
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                                }}
                                style={ProfileScreenJstyles.profileAvatar} />

                            <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}>
                                <View style={ProfileScreenJstyles.profileAction}>
                                    <FeatherIcon
                                        color="#fff"
                                        name="edit-3"
                                        size={15} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={ProfileScreenJstyles.profileName}>Andrew Ainsley</Text>
                    </View>
                </View>

                <ScrollView>
                    
                    <View style={ProfileScreenJstyles.section}>
                        <View style={ProfileScreenJstyles.sectionBody}>
                            <View style={[ProfileScreenJstyles.rowWrapper, ProfileScreenJstyles.rowFirst]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={[ProfileScreenJstyles.row, {paddingTop: 20}]}>
                                    <Icon name='book' size={20} color="gray" style={ProfileScreenJstyles.icon} />
                                    <Text style={ProfileScreenJstyles.rowLabel}>My Booking</Text>
                                    <View style={ProfileScreenJstyles.rowSpacer} />
                                    <FeatherIcon
                                        color="gray"
                                        name="chevron-right"
                                        size={19} />
                                </TouchableOpacity>
                            </View>
                            <View style={ProfileScreenJstyles.rowWrapperTwo}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={ProfileScreenJstyles.row}>
                                    <Icon name='payment' size={20} color="gray" style={ProfileScreenJstyles.icon} />
                                    <Text style={ProfileScreenJstyles.rowLabel}>Payments</Text>
                                    <View style={ProfileScreenJstyles.rowSpacer} />
                                    <FeatherIcon
                                        color="gray"
                                        name="chevron-right"
                                        size={19} />
                                </TouchableOpacity>
                            </View>
                            <View style={ProfileScreenJstyles.rowWrapper}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={[ProfileScreenJstyles.row, {paddingTop: 20}]}>
                                    <Icon name='person' size={20} color="gray" style={ProfileScreenJstyles.icon} />
                                    <Text style={ProfileScreenJstyles.rowLabel}>Profile</Text>
                                    <View style={ProfileScreenJstyles.rowSpacer} />
                                    <FeatherIcon
                                        color="gray"
                                        name="chevron-right"
                                        size={19} />
                                </TouchableOpacity>
                                
                            </View>
                            
                            <View style={ProfileScreenJstyles.rowWrapperTwo}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={ProfileScreenJstyles.row}>
                                    <Icon name='notifications' size={20} color="gray" style={ProfileScreenJstyles.icon} />
                                    <Text style={ProfileScreenJstyles.rowLabel}>Notification</Text>
                                    <View style={ProfileScreenJstyles.rowSpacer} />
                                    <FeatherIcon
                                        color="gray"
                                        name="chevron-right"
                                        size={19} />
                                </TouchableOpacity>  
                            </View>

                            <View style={ProfileScreenJstyles.rowWrapperTwo}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={ProfileScreenJstyles.row}>
                                    <Icon name='security' size={20} color="gray" style={ProfileScreenJstyles.icon} />
                                    <Text style={ProfileScreenJstyles.rowLabel}>Security</Text>
                                    <View style={ProfileScreenJstyles.rowSpacer} />
                                    <FeatherIcon
                                        color="gray"
                                        name="chevron-right"
                                        size={19} />
                                </TouchableOpacity>  
                            </View>

                            <View style={ProfileScreenJstyles.rowWrapperTwo}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={ProfileScreenJstyles.row}>
                                    <Icon name='language' size={20} color="gray" style={ProfileScreenJstyles.icon} />
                                    <Text style={ProfileScreenJstyles.rowLabel}>Language</Text>
                                    <View style={ProfileScreenJstyles.rowSpacer} />
                                    <Text style={ProfileScreenJstyles.rowValue}>English(US)</Text>
                                    <FeatherIcon
                                        color="gray"
                                        name="chevron-right"
                                        size={19} />
                                </TouchableOpacity>
                            </View>
                            <View style={[ProfileScreenJstyles.rowWrapperTwo,{marginTop:-9}]}>
                                <View
                                    style={ProfileScreenJstyles.row}>
                                <Icon name='visibility' size={20} color="gray" style={ProfileScreenJstyles.icon} />
                                <Text style={ProfileScreenJstyles.rowLabel}>Dark Mode</Text>
                                    <View style={ProfileScreenJstyles.rowSpacer} />
                                    <Switch
                                        onValueChange={emailNotifications =>
                                            setForm({ ...form, emailNotifications })
                                        }
                                        style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                                        value={form.emailNotifications} />
                                </View>
                            </View>
                              
                            <View style={[ProfileScreenJstyles.rowWrapperTwo,{marginTop:-9}]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={ProfileScreenJstyles.row}>
                                    <Icon name='help-center' size={20} color="gray" style={ProfileScreenJstyles.icon} />
                                    <Text style={ProfileScreenJstyles.rowLabel}>Help Center</Text>
                                    <View style={ProfileScreenJstyles.rowSpacer} />
                                    <FeatherIcon
                                        color="gray"
                                        name="chevron-right"
                                        size={19} />
                                </TouchableOpacity>  
                            </View>
                            
                            <View style={ProfileScreenJstyles.rowWrapperTwo}>
                                <TouchableOpacity
                                    onPress={() => {
                                        // handle onPress
                                    }}
                                    style={ProfileScreenJstyles.row}>
                                    <Icon  name="group" size={20} color="gray" style={ProfileScreenJstyles.icon} />
                                    <Text style={ProfileScreenJstyles.rowLabel}>Invite Friends</Text>
                                    <View style={ProfileScreenJstyles.rowSpacer} />
                                    <FeatherIcon
                                        color="#bcbcbc"
                                        name="chevron-right"
                                        size={19} />
                                </TouchableOpacity>  
                            </View>
                            
                            <View style={[ProfileScreenJstyles.rowWrapperTwo, {marginTop: 5}]}>
                                <View
                                    style={ProfileScreenJstyles.row}>
                                    <Icon name='logout' size={25} color="red" style={ProfileScreenJstyles.icon} />
                                    <Text style={[ProfileScreenJstyles.rowLabel, {color: 'red'}]}>Logout</Text>
                                    
                                </View>  
                            </View>
                            

                        </View>
                    </View>
                    
                    
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

