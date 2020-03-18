import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Firebase, { db } from './config/FireBase';


class ChangingWasher extends React.Component {
  available = require('./Washer_GREEN.png')
  taken = require('./Washer_RED.png');

  constructor(props) {
    super(props);
    this.state = {
      status: this.props.occupied
    }
    console.log(this.props.occupied)
  }

  renderImage = () => {
    var imgSource = !this.props.occupied ? this.available : this.taken;
    return (
      <Image style = {{width: 105, height: 105, alignSelf: 'center'}} 
        source={ imgSource }
      />
    );
  }

  handleUpdate = () => {
    const value = this.props.washName
    if (value == 1) {
      db.collection('codes').doc(this.props.code).update({
        w1: !this.state.status
      })
    } else if (value == 2) {
      db.collection('codes').doc(this.props.code).update({
        w2: !this.state.status
      })
    } else if (value == 3) {
      db.collection('codes').doc(this.props.code).update({
        w3: !this.state.status
      })
    } else if (value == 4) {
      db.collection('codes').doc(this.props.code).update({
        w4: !this.state.status
      })
    } 
    this.setState({status: !this.state.status})
  }


  render(){
    return (
      <View>
          <TouchableOpacity onPress={this.handleUpdate}>
            {this.renderImage()}
          </TouchableOpacity>
        </View>
    );
  }
}

export default ChangingWasher;