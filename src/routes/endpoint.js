import {React, useState} from 'react';
import { View, Text, Image, TouchableOpacity,FlatList, Linking, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let mSuccessMessage = [
  { id: 0, 
    name: 'Kamilla',
    address: 'Ukraine',
    message1: 'Wow! You really know how to talk to a lady.',
    message2: 'Are you ready to take it to the next level and really talk to her?',
  },
  
];


const Stack = createNativeStackNavigator();

function End() {

    let [successMessage, setSuccessMessage] = useState(mSuccessMessage)
  
    return (
    
        <View style={{flex: 1, backgroundColor: 'white',}}> 
    
        <View style={styles.propic}>
            <View style={styles.border}>
            <Image
          source={require('../../assets/img/pic.png')}
          //borderRadius style will help us make the Round Shape Image
          style={{ width: 150, height: 150, borderRadius: 200 / 2, borderColor: 'white',
          borderWidth: 2.5, }}
        />
            </View>
         
         {/* <View>
         <Text style={styles.textTitle}>Kamilla</Text>
         </View> */}
        </View>
    
    
    <FlatList
          numColumns={1}
          keyExtractor={(item) => (item.id)}
          data={successMessage}
          renderItem={({item}) => (
    
    <View> 
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',}}>
         <Text style={styles.textTitle}>{item.name}</Text>
         <Text style={{fontSize:19.5, color: '#FF2400'}}>{item.address}</Text> 
         </View>

          
          <View style={styles.box3}>
                <View style={styles.box2}>
                  <View style={styles.box1}>
    
                      <View style={styles.messageMainBox}>
                            
                          <View style={styles.messageBox1}>
                           <Text style={styles.messageBoxText1} > {item.message1} </Text>
                            </View>
                            
                            <View style={styles.messageBox2} >
                           <Text style={styles.messageBoxText2}> {item.message2} </Text>
                            </View>
                      
    
                      </View>
                  </View>
              </View>
          </View>
    </View>
          
            
            
          )} />
    
            <TouchableOpacity 
            style={{flex:1, alignContent: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column',
            marginBottom: 40,
            }}
            onPress={() => Linking.openURL('https://1stchoicedating.com/women/info213393.htm')}
            >
    
              <View style={{borderColor: '#89CFF0', borderWidth: 2.2,
            marginLeft: 80,
            marginRight: 80,}}>
              <View style={{borderColor: 'white', borderWidth: 2.4}}>
              <View style={{
                alignContent: 'center', 
                justifyContent: 'center', 
                backgroundColor: '#89CFF0', maxWidth: '100%',
        height: 50, }}>
              <Text style={{
                textAlign: 'center', 
                color: 'white', 
                fontSize: 14.5,
                fontWeight: '400' }}>START THE REAL CONVERSATION</Text>
              </View>
              </View> 
              </View>
              
              
              
            </TouchableOpacity>
    
    
          
    
      </View>
          
        
        
      );
    }

export default End;

const styles = StyleSheet.create({
  propic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 60,
    marginBottom: 58,
  },
  border: {
    borderColor: '#FF2400',
    borderWidth: 2.5,
    width: 155,
    height: 155, 
    borderRadius: 200 / 2,
  },
  textTitle: {
    fontSize: 40,
    color: '#FF2400',
    fontWeight: 'bold',
  },
  box3: {
    marginLeft: 80,
    marginRight: 80,
    marginTop: 46,
    borderColor: '#89CFF0',
    borderWidth:2.2,
    marginBottom:25,
  },
  box2: {
    borderColor: 'white',
    borderWidth:2.4,
  },
  box1: {
    borderColor: '#89CFF0',
    paddingTop: 15,
    borderWidth: 2.2,
    backgroundColor: 'white',
    paddingBottom: 15
  },
  messageMainBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageBox1: {
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 10,
  },  
  messageBoxText1: {
    color: '#89CFF0',
    fontSize: 18.5,
    fontWeight: '800',
    textAlign: 'center'
  },
  messageBox2: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  messageBoxText2: {
    color: '#89CFF0',
    fontSize: 18.5,
    fontWeight: '800',
    textAlign: 'center'
  },


});