import React, { Component } from 'react';
import { View, Dimensions, Image, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { Container, Header, CardGamer } from '../../theme';
import { Layout, Text, Spinner, Icon, Input, Button } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { request } from '../../bridge';
import { setReload } from '../../root/redux/actions';
import Carousel from 'react-native-banner-carousel';
import layout from '../../theme/styles/layout';
import styles from '../../theme/styles/styles';
import { CommonActions } from '@react-navigation/native';

const BannerWidth = Dimensions.get('window').width - 32;
const BannerHeight = 120;

class Anggota extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading : false,
      data      : [],
      nama      : ''
    }

    this.focus = false;
  }

  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} params={{
          center : 'Anggota',
          isBack : false
        }}/>
        <Layout style={[layout.container, styles.containerInner]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {
              (this.state.isLoading) ?
              (
                <View style={layout.spinner}>
                  <Spinner/>
                </View>
              ) : this._renderContainer()
            }
          </ScrollView>
        </Layout>
      </Container>
    )
  }

  _renderContainer = () => {
    return (
      <>
        <Input
          value={this.state.nama}
          label='Nama'
          placeholder='Masukan Nama Anda'
          onChangeText={this._onChangeText}
        />
        <Button size="tiny" style={{marginVertical: 10}} onPress={this._onSubmitForm}>Simpan</Button>
      </>
    )
  }

  _onChangeText = (text) => {
    this.setState({ nama : text })
  }

  _onSubmitForm = () => {
    this.setState({ isLoading: false }, () => {
      request({
        url    : 'anggotas',
        method : 'POST',
        data   : {
          'nama' : this.state.nama,
        }
      }).then((res) => {
        const commonActions = CommonActions.navigate({name : 'Master'});
        this.props.navigation.dispatch(commonActions);
      }).catch((error) => {
        this.setState({isLoading : false, isRefresh : false});
      });
    })
  }

}

const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch => ({
  setReload: (data) => dispatch(setReload(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Anggota);
