import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Icon } from '@ui-kitten/components';

export default class Rating extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      star : [
        {
          number : 1,
        },
        {
          number : 2,
        },
        {
          number : 3,
        },
        {
          number : 4,
        },
        {
          number : 5,
        },
      ]
    }
  }

  render() {
    const { count, size } = this.props;
    return (
      <View style={styles.container}>
        {this.state.star.map((item, index) => (
          <Icon style={{width : size || 14, height : size || 14, color : (item.number <= count) ? '#F6C724' : '#E4E9F2', marginLeft : 2}} name="star-fill" key={index}/>
        ))}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'flex-start'
  }
});
