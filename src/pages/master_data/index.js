import React, { Component } from 'react';
import { View, Dimensions, Image, ScrollView, RefreshControl, TouchableOpacity, FlatList } from 'react-native';
import { Container, Header, CardGamer, Empty } from '../../theme';
import { Layout, Text, Spinner, Icon, Input, Button, ListItem, Modal, Card } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { request } from '../../bridge';
import { setReload } from '../../root/redux/actions';
import Carousel from 'react-native-banner-carousel';
import layout from '../../theme/styles/layout';
import styles from '../../theme/styles/styles';
import { DataTable } from 'react-native-paper';

const BannerWidth = Dimensions.get('window').width/1.5;
const BannerHeight = 120;

class Master extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading      : true,
      isVisible      : false,
      isProcess      : false,
      isConfirm      : false,
      isModal        : false,
      nomor_anggota  : '',
      edit           : '',
      next           : 0,
      page           : 0,
      perpage        : 5,
      minData        : 0,
      maxData        : 5,
      data           : []
    }

    this.focus = false;
  }

  componentDidMount = () => {
    this.getData()
  }


  componentWillUnmount = () => {
     if (this.focus) {
       this.focus = false;
       this.props.navigation.removeListener();
     }
   }

  getData = () => {
    request({
      url    : 'anggotas',
      method : 'GET',
    }).then((res) => {
      this.setState({
        data      : (res.data) ? res.data : [],
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
          center : 'Master Data',
          isBack : false
        }}/>
        <Layout style={[layout.container, styles.containerInner]}>
            {
              (this.state.isLoading) ?
              (
                <View style={layout.spinner}>
                  <Spinner/>
                </View>
              ) : this._renderContainer()
            }
        </Layout>
        <Modal
          visible={this.state.isModal}
          backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          onBackdropPress={() => this._onModelClick()}
        >
          <Card disabled={true}>
            <Text>Edit</Text>
            <Input
              value={this.state.nama}
              label='Nama'
              placeholder='Masukan Nomor Anggota'
              onChangeText={this._onChangeNama}
            />
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginVertical: 10, width: BannerWidth}}>
              <Button status='basic' style={{marginHorizontal: 3}} onPress={() => this._onModelClick()} size="small">Tutup</Button>
              <Button style={{marginHorizontal: 3}} onPress={() => this._onEditClick()} size="small">Simpan</Button>
            </View>
          </Card>
        </Modal>
      </Container>
    )
  }

  _onChangeNama = (text) => {
    this.setState({ nama : text })
  }

  _renderContainer = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{alignContent: 'center', flex: 1}}
          style={[layout.containerList, { backgroundColor : 'transparent' }]}
          data={this.state.data}
          refreshControl={
             <RefreshControl refreshing={this.state.isRefresh} onRefresh={this._onRefresh} />
          }
          contentContainerStyle={(this.state.data?.length > 0) ? null : layout.container}
          ListEmptyComponent={<Empty />}
          renderItem={this._renderItem}
        />
      </View>
    )
  }

  _renderConfirm = () => {
    return (
        <View>
          <ListItem
            style={styles.listOrder}
            title={() => <Text appearance="hint">Game</Text>}
            accessoryRight={(style) => <Text style={styles.listOrderRight}>{'Hapus'}</Text>}
          />
          <Button style={{marginVertical : 8}} onPress={this._orderSubmit}>Order</Button>
       </View>
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
      <View style={{position: 'absolute', bottom: 10, right: 0, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => this._onModelEditClick(item)}>
          <Icon style={[styles.style, styles.iconMenu, {color: 'green', marginHorizontal: 5}]} name='pen'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onDeleteClick(item)}>
          <Icon style={[styles.style, styles.iconMenu, {color: 'red', marginHorizontal: 5}]} name='trash'/>
        </TouchableOpacity>
      </View>
      </>
    )
  }

  _onModelEditClick = (item) => {
    this.setState({
      edit    : item,
      nama    : item.nama,
      isModal : !this.state.isModal
    });
  }

  _onModelClick = () => {
    this.setState({
      isModal : !this.state.isModal
    });
  }

  _onEditClick = () => {
    this.setState({ isLoading: true, isModal : false }, () => {
      request({
        url    : 'anggota/update?id='+this.state.edit.anggota_id,
        method : 'PUT',
        data   : {
          'nama' : this.state.nama
        }
      }).then((res) => {
        this.getData();
      }).catch((error) => {
        this.setState({isLoading : false, isRefresh : false});
      });
    })
  }

  _onDeleteClick = (item) => {
    this.setState({ isLoading: true }, () => {
      request({
        url    : 'anggota/delete?id='+item.anggota_id,
        method : 'DELETE',
      }).then((res) => {
        this.getData();
      }).catch((error) => {
        this.setState({isLoading : false, isRefresh : false});
      });
    })
  }

  _renderForm = ()=> {
    return (
      <View style={{marginVertical: 10, marginHorizontal: 10}}>
        <Text style={[layout.bold]} category="h5">Form Tamu</Text>
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

  _onRefresh = () => {
    this.setState({ isRefresh : true }, ()=> {
      this.getData();
    })
  }

}

const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch => ({
  setReload: (data) => dispatch(setReload(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Master);
