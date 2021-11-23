import React, { PureComponent } from 'react';
import { View, RefreshControl, TouchableOpacity, Image } from 'react-native';
import { Layout, List, Spinner, Text, Icon } from '@ui-kitten/components';
import { connect } from 'react-redux';
import layout from './styles/layout';
import styles from './styles/styles';
import t from '../lang';

class CardGamer extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {

  }

  render() {
    let { nickname, game, desc, img_cover, game_cover, rating, coin, kode_order, status, color, order_date, level, role } = this.props.data;
    let { onPress, isOrder, isSearch } = this.props;

    if (isOrder) {
      return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.containerList}>
          <View style={styles.containerInnerList}>
            <Image style={styles.listItemImgOrder} source={{uri : img_cover}}/>
            <View style={styles.containerItem}>
              <View style={styles.pTopContainer}>
                <Text numberOfLines={1} style={layout.bold}>{kode_order || '-'}</Text>
                <Text numberOfLines={1} style={layout.medium} status={color} category="p2">{status}</Text>
              </View>
              <Text numberOfLines={1} style={layout.medium}>{nickname || '-'}</Text>
              <View style={[styles.containerListGame, {marginVertical : 2}]}>
                <Image style={styles.imgListGameOrder} source={{uri : game_cover}} />
                <Text numberOfLines={1} style={{marginLeft : 4}} category="p2">{game || '-'}</Text>
              </View>
              <View style={[styles.pTopContainer, {marginTop : 14}]}>
                <View style={[styles.containerCoin, {marginTop : 0}]}>
                  <View style={styles.iconCoin}>
                    <View style={styles.iconCoinInner}>
                      <Text category="c2" style={[layout.bold, styles.textCoin]}>C</Text>
                    </View>
                  </View>
                  <Text numberOfLines={1} style={[layout.bold, styles.coin]}>{(coin > 0 ? coin : 'Free') || 'Free'}</Text>
                </View>
                <Text numberOfLines={1} appearance="hint" category="p2">{order_date || '-'}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    }

    return (
      <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[styles.containerList, (isSearch ? {marginHorizontal : 16} : null)]}>
        <View style={styles.containerInnerList}>
          <>
            {
              // <Image style={styles.listItemImg} source={{uri : img_cover}}/>
            }

            {
              // <Image style={[styles.listItemImgOrder, { width : 95, height : 125 }]} source={{uri : img_cover}}/>
            }
            {
              // (rating) ?
              // (
              //   <View style={styles.containerRating}>
              //     <Icon style={[styles.iconStar, styles.iconStarMargin]} name="star-fill"/>
              //     <Text category="s2" style={[layout.bold, styles.sumRating]}>{rating}</Text>
              //   </View>
              // ) : null
            }
          </>
          <View style={styles.containerItem}>
            <Text numberOfLines={1} style={[layout.bold, styles.fontSize]}>{nickname || '-'}</Text>
            <View style={[styles.containerListGame, {marginVertical : 3}]}>
              <Image style={styles.imgListGame} source={{uri : game_cover}} />
              <Text numberOfLines={1} style={[layout.medium, {marginLeft : 4}]}>{game || '-'}</Text>
            </View>
            {
              // (isSearch) &&
              // (<Text category="c2">{level}</Text>)
            }
            <View style={styles.containerLevelSearch}>
              <Text category="c2" style={styles.textBtnfilter}>{level}</Text>
            </View>
            {
              (role) && <Text category="c2">Role : {role}</Text>
            }

            <Text category="c2" appearance="hint" numberOfLines={2} style={[styles.listDesc, { textAlignVertical : 'bottom', height: 'auto' }]}>{desc || '-'}</Text>

            {
              // <View style={[styles.containerCoin, (isSearch ? { marginTop : 10} : null)]}>
              //   <View style={styles.iconCoin}>
              //     <View style={styles.iconCoinInner}>
              //       <Text category="c2" style={[layout.bold, styles.textCoin]}>C</Text>
              //     </View>
              //   </View>
              //   <Text numberOfLines={1} style={[layout.bold, styles.coin]}>{(coin > 0 ? coin : 'Free') || 'Free'}</Text>
              //   <Text numberOfLines={1} category="c2" appearance="hint" style={layout.medium}>/Match</Text>
              // </View>
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }

}

export default CardGamer;
