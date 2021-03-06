import React, { Component } from 'react'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View,
  Button
} from 'native-base'

export default class SideMenu extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let list = [{
      title: "Match",
      onPress: () => {
        this.props.navigator.replace("Match")
      }
    }, {
      title: "History",
      onPress: ()=> {
        this.props.navigator.replace("History")
      }
    }, {
      title: "This Tester",
      onPress: ()=> {
        this.props.navigator.replace("This Tester")
      }
    }]

    return (
      <Container>
        <Header/>
        <View>
          <List dataArray={list} renderRow={(item) =>
              <ListItem button onPress={item.onPress.bind(this)}>
                <Text>{item.title}</Text>
              </ListItem>
            }/>
        </View>
      </Container>
    )
  }
}
