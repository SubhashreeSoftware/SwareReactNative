import { StyleSheet } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from "../../../../../../GlobalStyles";

const ProfileScreenJstyles = StyleSheet.create({
    container: {
        padding: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    /** Profile */
    profile: {
        padding: Padding.p_5xl,
        backgroundColor: Color.white,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileAvatarWrapper: {
        position: 'relative',
    },
    profileAvatar: {
        width: 110,
        height: 110,
        borderRadius: 9999,
    },
    profileAction: {
        position: 'absolute',
        right: 5,
        bottom: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        borderRadius: Border.br_5xs,
        backgroundColor: '#007bff',
    },
    profileName: {
        marginTop: Margin. m_3xs,
        fontSize: FontSize.size_6xs,
        fontWeight: '600',
        color: '#414d63',
        textAlign: 'center',
    },

    /** Section */

    section: {
        paddingVertical: Padding.p_xs,

    },
    sectionBody: {
        borderRadius: Border.br_xs,
        shadowColor: Color.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        paddingLeft: Padding.p_8xs,
        paddingRight: Padding.p_8xs,
    },

    /** Row */
    row: {
     
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: Padding.p_xs,
      
        paddingBottom: Padding.p_5xl,
    },
    rowWrapper: {
        paddingLeft: Padding.p_mid,
        backgroundColor: Color.white,
        borderTopWidth: 1,
        borderColor: '#f0f0f0',
    },
    rowWrapperTwo: {
        paddingLeft: Padding.p_mid,
        backgroundColor: Color.white,

        borderColor: '#f0f0f0',
    },
    rowFirst: {
        borderTopLeftRadius: Border.br_xs,
        borderTopRightRadius: Border.br_xs,
    },
    rowLabel: {
        fontSize: FontSize.size_base,
        letterSpacing: 0.24,
        color: '#000',
        paddingLeft: Padding.p_mini,
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    rowValue: {
        fontSize: FontSize.size_base,
        fontWeight: '500',
        color: '#ababab',
        marginRight: Margin.m_9xs,
    },
    rowLast: {
        borderBottomLeftRadius: Border.br_xs,
        borderBottomRightRadius: Border.br_xs,
    },
    
    rowIcon: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        marginRight: Margin.m_xs,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProfileScreenJstyles;