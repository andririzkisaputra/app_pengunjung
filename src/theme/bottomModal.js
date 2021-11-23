import React, { PureComponent } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity, StyleSheet, View, Dimensions, LogBox } from 'react-native';
import { Layout, Modal, Text, Icon } from '@ui-kitten/components';
import layout from './styles/layout';
import stylesx from './styles/styles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

LogBox.ignoreLogs(['EventEmitter']);

export default class BottomModal extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { visible, title, onClose } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onClose}>
        <Modal
          style={styles.container}
          backdropStyle={styles.backdrop}
          visible={(visible) ? visible : false} >
            { this.renderModalElement() }
        </Modal>
      </TouchableWithoutFeedback>
    );
  }

  renderModalElement = () => {
    const { title, onClose } = this.props;
    return (
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.continerInner} onPress={onClose} activeOpacity={1}>
          <Text category="h6" style={layout.bold}>{title || 'Title'}</Text>
          <Icon style={styles.closeIcon} name="x-lg"/>
        </TouchableOpacity>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height : windowHeight + 16
  },
  closeIcon : {
    width : 14,
    height : 14
  },
  continerInner : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  modalContainer: {
    position : 'absolute',
    bottom : 0,
    marginHorizontal : 8,
    width : windowWidth-16,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical : 14,
    paddingHorizontal : 20
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
