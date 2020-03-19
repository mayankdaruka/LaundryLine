import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import AppIntroSlider from 'react-native-app-intro-slider';
export default class HowThisWorks extends React.Component {

  _onDone = () => {
    this.props.navigation.navigate('WasherDryer');
  };

  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100
        }}>
        <Icon 
        name= {item.icon}
        type= {item.type}
        color='black'
        size = {250}
        iconStyle = {{paddingTop: 90, paddingBottom: 30}}/>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  render() {
      return (
        <View 
        style={{
          position: 'absolute',
          bottom: 0,
        }}>
        <Text style = {{alignSelf: 'center', fontFamily: 'Trebuchet MS', fontWeight: 'bold', fontSize: 25, paddingBottom: 30}}>How This Works</Text>
        <AppIntroSlider
          slides={slides}
          renderItem={this._renderItem}
          onDone={this._onDone}
        />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    fontWeight: "bold",
    fontFamily: "Trebuchet MS",
    padding: 15
  }
});

const slides = [
  {
    key: 's1',
    text: 'A simple & intuitive application to simplify the process of doing laundry in college dorms.',
    backgroundColor: '#20d2bb',
    icon: 'tumble-dryer',
    type:'material-community'
  },
  {
    key: 's2',
    text: 'The code provided by your Resident Assistant gives you access to the status of the laundry machines on your floor.',
    icon: 'numeric',
    type: 'material-community',
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    text: 'A laundry machine colored green is available while a laundry machine colored red is full and running.',
    backgroundColor: '#7C4AE7',
    icon: 'traffic-light',
    type: 'material-community'
  },
  {
    key: 's4',
    text: 'Simply tap on the icon of the laundry machine you\'re using to mark it occupied and untap it once you\'re done to mark it available!',
    icon: 'hand-pointing-down',
    type: 'material-community',
    backgroundColor: '#f6437b',
  },
  {
    key: 's5',
    text: 'Be respectful of others and enjoy!',
    icon: 'local-laundry-service' ,
    type: 'material',
    backgroundColor: '#30AB5B',
  },
];