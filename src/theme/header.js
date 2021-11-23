import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { TopNavigation, TopNavigationAction, Icon, Text, Input, Avatar } from '@ui-kitten/components';
import { connect } from 'react-redux';
import styles from './styles/styles';
import layout from './styles/layout';
import t from '../lang';

const BackIcon = (style) => (
  <Icon style={[style.style, {color : styles.headerIcon.color, height: 20, width : 20}]} name='chevron-left' />
);

class Header extends PureComponent {

    constructor(props) {
      super(props)

      this.state = {

      }

    }

    componentDidMount = () => {

    }

    render() {
      const params      = this.props.params;
      this.center       = (params.center) ? params.center : t('pHome');
      this.right        = (params.right) ? params.right : false;
      this.rightSearch  = (params.rightSearch) ? params.rightSearch : false;
      this.isBack       = (params.isBack) ? true : false;
      const page        = this.center;

      if (page == t('pSearch')) {
        return (
          <TopNavigation
            alignment='start'
            accessoryLeft={
              <View style={styles.containerHeaderSearch}>
                { this._backAction() }
                <Input
                  style={styles.searchInput}
                  textStyle={styles.searchTextInput}
                  placeholder={t('pSearch')}
                  accessoryRight={this.rightSearch}
                  value={params.keyword}
                  onChangeText={params.changeText}
                  onSubmitEditing={params.actSearch}
                  autoFocus
                  returnKeyType='search'
                />
                { this.right() }
              </View>
            }
          />
        );
      }else if (page == t('pChatDetail')) {
        return (
          <TopNavigation
            accessoryLeft={(this.isBack) ? this._backAction() : null}
            title={(props) => {
              return (
                <View style={styles.titleContainer}>
                  {
                    (params?.imgCenter) ?
                    (
                      <Avatar
                        style={styles.logo}
                        source={{uri : params?.imgCenter}}
                      />
                    ) :
                    (
                      <Icon style={[styles.logo, { width : 40, height : 40 }, styles.pAvatarIcon]} name="person-circle"/>
                    )
                  }
                  <Text {...props}>{params?.titleCenter || t('pChatDetail')}</Text>
                </View>
              )
            }}
          />
        )
      }else {
        return (
          <TopNavigation
            title={() => <Text style={layout.title}>{this.center}</Text>}
            alignment='start'
            accessoryLeft={(this.isBack) ? this._backAction() : null}
            accessoryRight={this.right}
          />
        );
      }
    }

    _backAction = () => {
      return (<TopNavigationAction onPress={() => this.props.navigation.pop()} icon={BackIcon}/>)
    }
}

const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
