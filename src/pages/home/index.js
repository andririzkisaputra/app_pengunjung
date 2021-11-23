import React, { Component } from 'react';
import { View, Dimensions, Image, ScrollView, RefreshControl, TouchableOpacity, FlatList } from 'react-native';
import { Container, Header, CardGamer } from '../../theme';
import { Layout, Text, Spinner, Icon, Input, Button} from '@ui-kitten/components';
import { connect } from 'react-redux';
import { request } from '../../bridge';
import { setReload } from '../../root/redux/actions';
import Carousel from 'react-native-banner-carousel';
import layout from '../../theme/styles/layout';
import styles from '../../theme/styles/styles';
import { DataTable } from 'react-native-paper';

const BannerWidth = Dimensions.get('window').width - 32;
const BannerHeight = 120;

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading      : false,
      nomor_anggota  : '',
      total          : 0,
      tahun          : 0,
      bulan          : 0,
      hari           : 0,
      data           : []
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    request({
      url    : 'kehadirans',
      method : 'GET',
    }).then((res) => {
      this.setState({
        data      : res.data,
        isLoading : false,
        isRefresh : false
      });
    }).catch((error) => {
      this.setState({isLoading : false, isRefresh : false});
    });
  }

  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} params={{
          center : 'Kehadiran',
          isBack : false
        }}/>
        <Layout style={[layout.container, styles.containerInner]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={this.state.isLoading ? layout.container : null}
            refreshControl={
               <RefreshControl refreshing={this.state.isRefresh} onRefresh={this._onRefresh} />
            }
          >
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical:5}}>
          <View style={{width: '45%', alignItems: 'flex-start', height: 80, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, backgroundColor: '#20a8d8'}}>
            <Text style={[layout.bold, {color: 'white'}]}>{this.state.data.total}</Text>
            <Text style={[{color: 'white'}]}>{'Total Kunjungan'}</Text>
          </View>
          <View style={{width: '45%', alignItems: 'flex-start', height: 80, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, backgroundColor: '#63c2de'}}>
            <Text style={[layout.bold, {color: 'white'}]}>{this.state.data.tahun}</Text>
            <Text style={[{color: 'white'}]}>{'Kunjungan Tahun Ini'}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical:5}}>
          <View style={{width: '45%', alignItems: 'flex-start', height: 80, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, backgroundColor: '#f6ca04'}}>
            <Text style={[layout.bold, {color: 'white'}]}>{this.state.data.bulan}</Text>
            <Text style={[{color: 'white'}]}>{'Kunjungan Bulan Ini'}</Text>
          </View>
          <View style={{width: '45%', alignItems: 'flex-start', height: 80, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, backgroundColor: '#f86c6b'}}>
            <Text style={[layout.bold, {color: 'white'}]}>{this.state.data.hari}</Text>
            <Text style={[{color: 'white'}]}>{'Kunjungan Tahun Hari Ini'}</Text>
          </View>
        </View>
        {this._renderForm()}
        {this._renderTabel()}
      </>
    )
  }

  _renderForm = ()=> {
    return (
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <Text style={[layout.bold]}>Form Tamu</Text>
        <Input
          value={this.state.nomor_anggota}
          label='Nomor Anggota'
          placeholder='Masukan Nomor Anggota'
          onChangeText={this._onChangeNomorAnggota}
          keyboardType="numeric"
        />
        <Button size="tiny" style={{marginVertical: 10}} onPress={this._onSubmitForm}>Simpan</Button>
      </View>
    )
  }

  _onChangeNomorAnggota = (text) => {
    this.setState({ nomor_anggota : text })
  }

  _renderTabel = () => {
    return (
      <FlatList
        style={{alignContent: 'center', flex: 1}}
        style={[layout.containerList, { backgroundColor : 'transparent' }]}
        data={this.state.data.kehadiran}
        contentContainerStyle={(this.state.data.kehadiran?.length > 0) ? null : layout.container}
        renderItem={this._renderItem}
      />
    )
  }

  _renderItem = ({item}) => {
    return (
      <>
      <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 7}}>
        <Image
          style={{width: 70, height: 70}}
          source={{
            uri: 'https://www.kindpng.com/picc/m/690-6904538_men-profile-icon-png-image-free-download-searchpng.png',
          }}
        />
        <View style={{marginHorizontal: 10}}>
          <Text>{item.nama}</Text>
          <Text>{item.nomor_anggota}</Text>
          <Text appearance="hint" category="c2">{item.created_at_f}</Text>
        </View>
      </View>
      </>
    )
  }

  _onSubmitForm = () => {
    request({
      url    : 'kehadirans',
      method : 'POST',
      data   : {
        'nomor_anggota' : this.state.nomor_anggota,
      }
    }).then((res) => {
      this._onRefresh();
    }).catch((error) => {
      this.setState({isLoading : false, isRefresh : false});
    });
  }

  _onRefresh = () => {
    this.setState({ isRefresh : true, nomor_anggota : '' }, ()=> {
      this.getData();
    })
  }

}

const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch => ({
  setReload: (data) => dispatch(setReload(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
