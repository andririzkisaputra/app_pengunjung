import color from '../json/custom-theme.json';
import { StyleSheet } from 'react-native';
export const hairlineWidth = StyleSheet.hairlineWidth;

export default {
  offlineContainer: {
    backgroundColor: color['color-primary-500'],
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex : 999,
    position: 'absolute',
    bottom: 0
  },
  offlineText: {
    color: '#fff'
  },
  container : {
    flex : 1
  },
  containerScroll : {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title : {
    fontSize : 20,
    fontFamily : 'Kanit-Bold',
    color : '#303033',
    marginLeft : 8,
    lineHeight : 28
  },
  navBottom : {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  bold : {
    fontFamily : 'Kanit-Bold'
  },
  semiBold : {
    fontFamily : 'Kanit-SemiBold'
  },
  medium : {
    fontFamily : 'Kanit-Medium'
  },
  regular : {
    fontFamily : 'Kanit-Regular'
  },
  spinner : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 16
  },
  containerList : {
    backgroundColor : 'white',
    paddingHorizontal : 16
  },
  containerListP1 : {
    backgroundColor : 'white',
    paddingHorizontal : 12
  }
}
