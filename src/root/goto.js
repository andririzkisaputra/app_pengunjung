import React, { PureComponent } from 'react';
import { View } from 'react-native';

const IMPORT_COMPONENT = {
}

class GoTo extends PureComponent {

  constructor(props) {
    super(props);
    this.params = this.props.route.params;
  }

  render() {
    const Component = IMPORT_COMPONENT[this.params.page];
    return (<Component navigation={this.props.navigation} params={this.params.params} />);
  }

}

export default GoTo;
