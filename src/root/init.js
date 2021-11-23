import React, { PureComponent } from 'react';
import { Platform, Linking } from 'react-native';
import { status_login } from '../bridge/storage';
import { userSet } from './redux/actions';
import { connect } from 'react-redux';

class Init extends PureComponent {

  constructor(props) {
    super(props);

  }

  UNSAFE_componentWillMount() {
    this._setUser();
  }

  _setUser = () => {
    status_login().then((data) => {
      if (data) {
        this.props.userSet(data);
      }
    });
  }

  render() {
    return (<></>)
  }

}

const mapStateToProps = state => ({state: state});
const mapDispatchToProps = dispatch => ({
  userSet: (data) => dispatch(userSet(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(Init);
