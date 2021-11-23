import color from '../json/custom-theme.json';
import { Dimensions, StyleSheet } from 'react-native';

const DeviceWidth   = Dimensions.get('window').width;
const ImgHeight     = 165;
const ImgWidthMin   = 4;
const ImgWidthMax   = (DeviceWidth/2) -32;
const ImgWidthMini  = (DeviceWidth/4)-ImgWidthMin;
const ImgHeihgtMini = ImgHeight/2;
const ImgHeihgtMini2= ImgHeight/2 - ImgWidthMin;

export default {
  containerInner : {
    paddingHorizontal : 16
  },
  containerHome : {
    marginTop : 16
  },
  containerHeader : {
    flexDirection : 'row',
    alignItems : 'center',
    marginBottom : 12
  },
  iconRekomen : {
    height: 22,
    width : 22,
    marginRight : 6,
    color : 'red'
  },
  containerList : {
    marginVertical : 16,
    backgroundColor : 'white',
    paddingHorizontal : 16,
    paddingVertical : 10,
    borderRadius : 12
  },
  containerInnerList : {
    flexDirection : 'row',
    alignItems : 'center',
    flex : 1
  },
  listItemImg : {
    marginRight : 16,
    width : 130,
    height : 160,
    borderRadius : 12
  },
  listItemImgOrder : {
    marginRight : 16,
    width : 90,
    height : 120,
    borderRadius : 12
  },
  containerItem  : {
    flexDirection : 'column',
    justifyContent : 'space-between',
    flex : 1
  },
  listTitle : {
    fontSize : 17
  },
  containerListGame : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  imgListGame : {
    width : 40,
    height : 40,
    resizeMode : 'contain'
  },
  imgListGameOrder : {
    width : 30,
    height : 30,
    resizeMode : 'contain'
  },
  imgListGameOrderSearch : {
    width : 35,
    height : 35,
    resizeMode : 'contain'
  },
  listDesc : {
    lineHeight : 20,
    height : 40
  },
  containerCoin : {
    marginTop : 14,
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'center'
  },
  iconCoin : {
    height: 22,
    width : 22,
    marginRight : 6,
    backgroundColor : color['color-primary-500'],
    borderRadius : 11,
    justifyContent : 'center',
    alignItems : 'center'
  },
  btnFollow : {
    backgroundColor : color['color-primary-500'],
    paddingHorizontal : 14,
    paddingVertical : 2,
    borderRadius : 4
  },
  btnFollowing : {
    backgroundColor : '#eef4f9',
    paddingHorizontal : 14,
    paddingVertical : 2,
    borderRadius : 4
  },
  textFollow : {
    color : 'white'
  },
  iconCoinProfile : {
    height: 30,
    width : 30,
    borderRadius : 18,
  },
  iconCoinInnerProfile : {
    height: 24,
    width : 24,
  },
  iconCoinInner : {
    height: 17,
    width : 17,
    backgroundColor : '#ff9e11',
    borderRadius : 18,
    justifyContent : 'center',
    alignItems : 'center'
  },
  iconStar : {
    height: 14,
    width : 14,
    color : color['color-primary-500']
  },
  coin : {
    color : '#ff9e11'
  },
  pageIndicator : {
    position : 'absolute',
    right : 10
  },
  indicatorActive : {
    backgroundColor : 'white'
  },
  headerIcon : {
    width : 23,
    height : 23,
    color : '#303033'
  },
  containerRating : {
    position : 'absolute',
    bottom : 8,
    left : 8,
    backgroundColor : 'rgba(0,0,0,0.5)',
    borderRadius : 6,
    flexDirection : 'row',
    alignItems  : 'center',
    paddingHorizontal : 6
  },
  containerRatingStatic : {
    alignSelf: 'flex-start',
    borderRadius : 6,
    flexDirection : 'row',
    alignItems  : 'center'
  },
  iconStarMargin : {
    marginRight : 4
  },
  sumRating : {
    color : 'white'
  },
  textCoin : {
    color : 'white',
    lineHeight : 16.5
  },
  containerSearchHome : {
    backgroundColor : '#eef4f9',
    paddingHorizontal : 16,
    paddingVertical : 8,
    borderRadius : 18,
    marginBottom : 16,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  iconSearch : {
    width : 20,
    height : 20,
    marginRight : 8,
    color : '#303033',
  },
  iconSearchPage : {
    width : 20,
    height : 20,
  },
  iconSearchPageGame : {
    width : 28,
    height : 28,
  },
  containerGridGame : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    flexWrap : 'wrap',
    marginHorizontal : -16
  },
  containerGame : {
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    marginHorizontal : 16,
    marginBottom : 16
  },
  containerImgGame : {
    backgroundColor : '#eef4f9',
    borderRadius : 30,
    marginBottom : 6,
    justifyContent : 'center',
    alignItems : 'center',
    width : 85,
    height : 85,
  },
  iconGameSearch : {
    backgroundColor : '#eef4f9',
    borderRadius : 14,
    padding : 3
  },
  imgGame : {
    width : 70,
    height : 70,
    resizeMode : 'contain'
  },
  iconMore : {
    width : 40,
    height : 40,
    color : '#f6c724'
  },
  iconController : {
    color : '#f6c724'
  },
  loginPage : {
    marginBottom : '40%'
  },
  loginHeader : {
    flexDirection : 'column',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  loginImg : {
    width : 200,
    height : 200
  },
  loginText : {
    textAlign : 'center',
    marginVertical : 20
  },
  loginInputContainer : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  loginCodeCountryContainer : {
    marginLeft : 8,
    flexDirection : 'row',
    alignItems : 'center'
  },
  loginImgCountry : {
    width : 30,
    height : 19,
    borderWidth : 1,
    borderColor : '#d0d0d0'
  },
  loginTextCountry  : {
    paddingLeft : 4,
    fontSize : 18
  },
  loginInput : {
    borderRadius : 18,
    paddingVertical : 16,
    flex : 1
  },
  registerInput : {
    borderRadius : 18,
    paddingVertical : 10,
    flex : 1
  },
  searchInput : {
    borderRadius : 90,
    marginRight : 20,
    flex : 1
  },
  containerHeaderSearch : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  searchTextInput : {
    paddingVertical : 0,
    fontSize : 18
  },
  loginTextInput : {
    paddingVertical : 4,
    fontSize : 18
  },
  loginUnderlineStyleBase: {
    width: 40,
    height: 60,
    borderWidth: 0,
    borderBottomWidth: 2,
    fontSize : 30,
    fontWeight : 'normal',
    fontFamily : 'Kanit-Bold',
    color : '#303033',
  },
  loginUnderlineStyleHighLighted: {
    borderColor: color['color-primary-500'],
  },
  containerIconSearch : {
    marginRight : 10
  },
  pinContainer : {
    marginTop : '10%',
    marginHorizontal : 16
  },
  btnKirim : {
    textAlign : 'right'
  },
  pTopContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  pContainerAvatar : {
    flexDirection : 'row',
    alignItems : 'center',
    flex  :1
  },
  pAvatar : {
    width : 70,
    height : 70,
  },
  pAvatarContainer : {
    width : 70,
    height : 70,
    borderRadius : 70,
    backgroundColor : '#eef4f9',
    justifyContent : 'center',
    alignItems : 'center'
  },
  pAvatarIcon : {
    color : '#E4E9F2',
  },
  pContainerText : {
    marginLeft : 12,
    flex : 1
  },
  pContainerInfoBottom : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-around',
    marginVertical : 24
  },
  pInfoTextFol : {
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  },
  pContainerInfoLevel : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : color['color-danger-500'],
    borderRadius : 18,
    paddingVertical : 6
  },
  pIconLevel : {
    height : 18,
    width : 18,
    marginRight : 4,
    color : 'white'
  },
  pTextLevel : {
    color : 'white'
  },
  pContainerMenu : {
    paddingVertical : 8,
    paddingHorizontal : 0,
    marginVertical : 16,
    marginHorizontal : 16,
    borderRadius : 12
  },
  pContainerMenu2 : {
    paddingVertical : 8,
    paddingHorizontal : 0,
    marginBottom : 16,
    marginHorizontal : 16,
    borderRadius : 12
  },
  iconRightMenu : {
    height : 18,
    width : 18
  },
  pEditJk : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding:12,
    backgroundColor : '#F7F9FC',
    borderWidth : 1,
    borderColor : '#E4E9F2',
    borderRadius : 18
  },
  textInputCustom : {
    fontSize : 18,
    flex : 1,
  },
  inputCustom : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor : '#F7F9FC',
    borderWidth : 1,
    borderColor : '#E4E9F2',
    borderRadius : 18
  },
  paddingIcon : {
    paddingRight : 8
  },
  between : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  flexStart : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'flex-start'
  },
  columnCenter : {
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  },
  cIconSkill : {
    height : 28,
    width : 28,
    backgroundColor : color['color-danger-500'],
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 30,
    marginRight : 6,
    marginVertical : 4
  },
  cIconSkillInput : {
    marginRight : 0,
    marginVertical : 0
  },
  iconSkill : {
    height : 14,
    width : 14,
    color : 'white'
  },
  imgSkill : {
    width : '100%',
    height : 140,
    borderRadius :8,
    marginVertical : 16
  },
  containerComment : {
    marginLeft : -16,
    marginRight : -8
  },
  containerComment2 : {
    marginLeft : -16,
    marginRight : -16
  },
  containerMenu2 : {
    marginLeft : -16,
    marginRight : -16,
    paddingHorizontal : 16
  },
  avatarComment : {
    tintColor : null,
    width : 40,
    height : 40
  },
  avatarUser : {
    tintColor : null,
    width : 50,
    height : 50
  },
  containerArrowOnline : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center'
  },
  iconOnline : {
    width : 10,
    height :10,
    borderRadius : 10,
    backgroundColor : color['color-success-600'],
    borderWidth : 1,
    borderColor : '#E4E9F2'
  },
  containerBottomBtn : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    marginHorizontal : 14
  },
  btnChat : {
    width : '48%'
  },
  btnOrder : {
    width : '48%'
  },
  btnChatText : {
    fontFamily : 'Kanit-SemiBold',
    fontWeight : 'normal',
    fontSize : 18,
    color : 'white'
  },
  ml4 : {
    marginLeft : 4
  },
  iconMenu : {
    width : 18,
    height : 18
  },
  buttonSubmit : {
    marginVertical : 10
  },
  buttonSubmit2 : {
    width : '100%'
  },
  containerInputMt : {
    marginBottom : 10,
  },
  containerImgAccount : {
    height : ImgHeight,
    width : DeviceWidth,
    marginTop : 4,
    flexDirection : 'row',
    alignItems : 'center'
  },
  bigImgAccount : {
    height : ImgHeight,
    width : ImgWidthMax,
    backgroundColor : '#eef4f9',
    marginRight : ImgWidthMin,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 6
  },
  imgBig : {
    height : ImgHeight,
    width : ImgWidthMax,
    borderRadius : 6
  },
  miniImgAccountLeft1 : {
    height : ImgHeihgtMini2,
    width : ImgWidthMini,
    backgroundColor : '#eef4f9',
    marginRight : ImgWidthMin,
    marginBottom : 4,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 6
  },
  miniImgLeft1 : {
    height : ImgHeihgtMini2,
    width : ImgWidthMini,
    borderRadius : 6
  },
  miniImgAccountLeft2 : {
    height : ImgHeihgtMini,
    width : ImgWidthMini,
    backgroundColor : '#eef4f9',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 6
  },
  miniImgLeft2 : {
    height : ImgHeihgtMini,
    width : ImgWidthMini,
    borderRadius : 6
  },
  miniImgAccountRight1 : {
    height : ImgHeihgtMini2,
    width : ImgWidthMini,
    backgroundColor : '#eef4f9',
    marginRight : ImgWidthMin,
    marginBottom : 4,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 6
  },
  miniImgRight1 : {
    height : ImgHeihgtMini2,
    width : ImgWidthMini,
    borderRadius : 6
  },
  miniImgAccountRight2 : {
    height : ImgHeihgtMini,
    width : ImgWidthMini,
    backgroundColor : '#eef4f9',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 6
  },
  miniImgRight2 : {
    height : ImgHeihgtMini,
    width : ImgWidthMini,
    borderRadius : 6
  },
  iconCameraAccount : {
    width : 30,
    height : 30,
    color : '#d1dae0'
  },
  iconCameraAccountBig : {
    width : 40,
    height : 40,
    color : '#d1dae0'
  },
  containerTextCover : {
    position : 'absolute',
    top : 2,
    right : 8
  },
  textCover : {
    color : '#d1dae0'
  },
  containerInputGame : {
    marginBottom : 14,
    marginTop : 4
  },
  containerGameAtProcess : {
    marginTop : 8,
    marginHorizontal : -16
  },
  containerCheckedGame : {
    position : 'absolute',
    top : 0,
    right : 0,
    borderRadius : 16,
    borderWidth : 2,
    borderColor : 'white'
  },
  containerTagDel : {
    position : 'absolute',
    top : 2,
    right : -8,
    borderRadius : 16,
    borderWidth : 2,
    borderColor : 'white'
  },
  iconCheckedGame : {
    width : 16,
    height : 16,
    color : color['color-primary-500'],
  },
  btnAdd : {
    marginRight : 8,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 8,
    backgroundColor : color['color-primary-500'],
    paddingVertical : 3,
    paddingHorizontal : 8,
  },
  textAdd : {
    color : 'white'
  },
  iconTagDel : {
    width : 14,
    height : 14,
    color : color['color-danger-500'],
  },
  containerTags : {
    marginBottom : 24,
    marginTop : 10,
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent : 'flex-start',
    alignItems: 'center'
  },
  itemTags : {
    paddingVertical : 2,
    paddingHorizontal : 16,
    backgroundColor : '#eef4f9',
    borderRadius : 16,
    marginRight : 14,
    marginBottom : 6
  },
  listOrder : {
    paddingHorizontal : 0,
    paddingVertical : 8,
  },
  listOrderRight : {
    marginRight : 0
  },
  divider : {
    height : 8,
    marginVertical : 8,
    marginHorizontal : -20
  },
  containerQty : {
    flexDirection : 'row',
    alignItems : 'center',
    paddingVertical : 2
  },
  iconQtyAdd : {
    height : 16,
    width : 16,
    color : color['color-danger-500']
  },
  iconQtyAddDisabled : {
    color : '#eef4f9'
  },
  textQty : {
    marginHorizontal : 20
  },
  containerFilter : {
    marginVertical : 8,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  containerFilterBtn : {
    backgroundColor : color['color-danger-500'],
    paddingHorizontal : 14,
    paddingVertical : 2,
    borderRadius : 8,
    flexDirection : 'row',
    alignItems : 'center'
  },
  iconArrow : {
    height : 14,
    width : 14,
    marginLeft : 4,
    marginTop : 4,
    color : 'white'
  },
  containerFilterBtnDisabled : {
    backgroundColor : '#eef4f9',
  },
  containerFilterRight : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  textBtnfilter : {
    color : 'white'
  },
  containerLevelSearch : {
    backgroundColor : color['color-primary-500'],
    paddingHorizontal : 8,
    marginVertical : 2,
    alignSelf : 'flex-start',
    borderRadius : 6
  },
  textBtnfilterDisabled : {
    color : '#303033'
  },
  badgeLevel : {
    backgroundColor : '#eef4f9',
    paddingHorizontal : 8,
    borderRadius : 6,
    marginRight : 8,
    marginBottom : 8
  },
  badgeLevelSelected : {
    backgroundColor : color['color-primary-500']
  },
  containerLevel  : {
    flexDirection : 'row',
    flexWrap : 'wrap'
  },
  iconChat : {
    width : 50,
    height : 50,
    tintColor : null
  },
  bubleChat : {
    backgroundColor : 'white',
    borderWidth : 1,
    borderColor : '#eef4f9',
    paddingVertical : 14,
    paddingHorizontal : 14,
    marginVertical : 6,
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
    borderBottomRightRadius : 20,
    alignSelf: 'flex-start',
  },
  isMe : {
    borderBottomLeftRadius : 20,
    borderBottomRightRadius : 0,
    alignSelf: 'flex-end',
    backgroundColor : color['color-primary-100']
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
  },
  containerInputChat : {
    padding : 8,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  iconChatSend : {
    width : 38,
    height : 38,
    color : color['color-info-500']
  },
  iconChatSendDis : {
    color : '#d1dae0'
  }
}
