import {React, useState} from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import EndScreen from './endpoint';
import FailedScreen from './failed';

let surveyGirlOne = [
  { id: 0, 
    questions1: 'What do you think the best way to keep love alive?',
    a1: 'Commitment and never give up',
    a2: 'Just buy her stuff',
    a3: 'Making time with her regularly',
    a4: 'Cooking with her', 
  },

];

let surveyGirlLast = [
  {
    id:0,
    questions2: 'What is your ideal date? ',
    b1: 'Coffee date',
    b2: 'Roadtrip date',
    b3: 'Beach trip',
    b4: 'Movie date'
  },
]


  let responseGirlOne = [
    {
      id: 0,
      a1: 'You are one of a kind.',
      a2: 'You seems to be materialistic person.',
      a3: 'You seem like too clingy person.',
      a4: `Your'e so sweet! `,
      
    },
    
];
  let responseLastGirlOne = [
    {
        id: 0,
        b1: `That's very sweet. `,
        b2: 'You seems to be materialistic person.',
        b3: 'You seem like too clingy person.',
        b4: `Your'e so sweet! `,
    },

];



function FirstScreen({navigation}) {

  let [sGirlOne, setSGirlOne] = useState(surveyGirlOne)


  return (
    <ImageBackground source={{uri: 'https://1stchoicedating.com/images/p213393-1.jpg'}} style={styles.container}>
        

        <View style={styles.textCon}>
        <Text style={styles.text}>1/20</Text>
        </View>
        
        
        <LinearGradient
        // Background Linear Gradient
        colors={[ 'transparent', 'rgba(255,255,255,1)']}
        style={styles.background}
        end={{ x: 0.5, y: 0.5 }}
      > 

      <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={sGirlOne}
      renderItem={({item}) => (
      
      <View style={styles.box3}>
            <View style={styles.box2}>
              <View style={styles.box1}>

                  <Text style={styles.question}>{item.questions1}</Text>

                  <View style={styles.container2}>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResponseOne') } >
                  <Text style={styles.choices}>{item.a1}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResponseTwo') } >
                  <Text style={styles.choices}>{item.a2}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResponseThree') } >
                  <Text style={styles.choices}>{item.a3}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResponseFour') } >
                  <Text style={styles.choices}>{item.a4}</Text>
                  </TouchableOpacity>

                  </View>
              </View>
          </View>
      </View>
        
        
        
        
      )} />

      </LinearGradient>








        {/* <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={sGirlOne}
      renderItem={({item}) => (
        
        <View style={styles.container1}>

        <Text style={styles.question}>{item.questions1}</Text>

        <View style={styles.container2}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResponseOne') } >
        <Text style={styles.choices}>{item.a1}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResponseTwo') } >
        <Text style={styles.choices}>{item.a2}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResponseThree') } >
        <Text style={styles.choices}>{item.a3}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ResponseFour') } >
        <Text style={styles.choices}>{item.a4}</Text>
        </TouchableOpacity>

        </View>
        

        </View>
        
        
      )} /> */}
        
    
    </ImageBackground>
  );
}

function SecondScreen({navigation}) {

  let [bGirlOne, setBGirlOne] = useState(surveyGirlLast)


  return (
    <ImageBackground source={{uri: 'https://1stchoicedating.com/images/p213393-1.jpg'}} style={styles.container}>
        

        <View style={styles.textCon}>
        <Text style={styles.text}>20/20</Text>
        </View>
        
        
        <LinearGradient
        // Background Linear Gradient
        colors={[ 'transparent', 'rgba(255,255,255,1)']}
        style={styles.background}
        end={{ x: 0.5, y: 0.5 }}
      > 

      <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={bGirlOne}
      renderItem={({item}) => (
      
      <View style={styles.box3}>
            <View style={styles.box2}>
              <View style={styles.box1}>

                  <Text style={styles.question}>{item.questions2}</Text>

                  <View style={styles.container2}>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LastResponse') } >
                  <Text style={styles.choices}>{item.b1}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} >
                  <Text style={styles.choices}>{item.b2}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button}  >
                  <Text style={styles.choices}>{item.b3}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} >
                  <Text style={styles.choices}>{item.b4}</Text>
                  </TouchableOpacity>

                  </View>
              </View>
          </View>
      </View>
        
        
        
        
      )} />

      </LinearGradient>

        
    
    </ImageBackground>
  );
}

function LastResponseScreen({navigation}) {

  let [reGirlOne, setREGirlOne] = useState(responseLastGirlOne)


  return (
    <ImageBackground source={{uri: 'https://1stchoicedating.com/images/p213393-1.jpg'}} style={styles.container}>
        

        <View style={styles.textCon}>
        <Text style={styles.text}>20/20</Text>
        </View>
        
        
        <LinearGradient
        // Background Linear Gradient
        colors={[ 'transparent', 'rgba(255,255,255,1)']}
        style={styles.background}
        end={{ x: 0.5, y: 0.5 }}
      > 

      <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={reGirlOne}
      renderItem={({item}) => (
      
        <View style={styles.box6}>
        <View style={styles.box5}>
            <View style={styles.box4}>
                <Text style={styles.question}>{item.b1}</Text>
            </View>
        </View>
      </View>
        
        
        
        
      )} />


          <TouchableOpacity style={{ alignItems:'center', justifyContent:'center'}} onPress={() => navigation.navigate('End')}>
                
                <View style={{ marginBottom: 38}}>
                    <Text style={{color: '#89CFF0', fontSize: 18.7, fontWeight: '400'}}> SEE HOW YOU DID! </Text>
                </View>
                
          </TouchableOpacity>


      </LinearGradient>

        
    
    </ImageBackground>
  );
}

function ResponseOneScreen({navigation}) {

  let [rGirlOne, setRGirlOne] = useState(responseGirlOne)


  return (
    <ImageBackground source={{uri: 'https://1stchoicedating.com/images/p213393-1.jpg'}} style={styles.container}>
        



        <LinearGradient
        // Background Linear Gradient
        colors={[ 'transparent', 'rgba(255,255,255,1)']}
        style={styles.background1}
        end={{ x: 0.5, y: 0.5 }}
      > 

      <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={rGirlOne}
      renderItem={({item}) => (
        
        <View style={styles.box6}>
          <View style={styles.box5}>
              <View style={styles.box4}>
                  <Text style={styles.question}>{item.a1}</Text>
              </View>
          </View>
        </View>

        
        
        

      )} />
    

          <TouchableOpacity style={{ alignItems:'center', justifyContent:'center'}} onPress={() => navigation.navigate('Last')}>
                
                <View style={{ marginBottom: 38}}>
                    <Text style={{color: '#89CFF0', fontSize: 18.7, fontWeight: '400'}}>NEXT</Text>
                </View>
                
          </TouchableOpacity>

      </LinearGradient>

  

        
        
    </ImageBackground>
  );
}

function ResponseTwoScreen() {

  let [rGirlOne, setRGirlOne] = useState(responseGirlOne)


  return (
    <ImageBackground source={{uri: 'https://1stchoicedating.com/images/p213393-1.jpg'}} style={styles.container}>
        
        <LinearGradient
        // Background Linear Gradient
        colors={[ 'transparent', 'rgba(255,255,255,1)']}
        style={styles.background1}
        end={{ x: 0.5, y: 0.5 }}
      > 

      <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={rGirlOne}
      renderItem={({item}) => (
        
        <View style={styles.box6}>
          <View style={styles.box5}>
              <View style={styles.box4}>
                  <Text style={styles.question}>{item.a2}</Text>
              </View>
          </View>
        </View>

        
        
        

      )} />
    

          <TouchableOpacity style={{ alignItems:'center', justifyContent:'center'}}>
                
                <View style={{ marginBottom: 27}}>
                    <Text style={{color: '#89CFF0', fontSize: 18.7, fontWeight: '400'}}>NEXT</Text>
                </View>
                
          </TouchableOpacity>

      </LinearGradient>
        
    </ImageBackground>
  );
}

function ResponseThreeScreen() {

  let [rGirlOne, setRGirlOne] = useState(responseGirlOne)


  return (
    <ImageBackground source={{uri: 'https://1stchoicedating.com/images/p213393-1.jpg'}} 
    style={styles.container}>
        
        <LinearGradient
        // Background Linear Gradient
        colors={[ 'transparent', 'rgba(255,255,255,1)']}
        style={styles.background1}
        end={{ x: 0.5, y: 0.5 }}
      > 

      <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={rGirlOne}
      renderItem={({item}) => (
        
        <View style={styles.box6}>
          <View style={styles.box5}>
              <View style={styles.box4}> 
              <Text style={styles.question}>{item.a3}</Text>
              </View>
          </View>
        </View>

        
        
        

      )} />
    

          <TouchableOpacity style={{ alignItems:'center', justifyContent:'center'}}>
                
                <View style={{ marginBottom: 27}}>
                    <Text style={{color: '#89CFF0', fontSize: 18.7, fontWeight: '400'}}>NEXT</Text>
                </View>
                
          </TouchableOpacity>

      </LinearGradient>
      
        
    </ImageBackground>
  );
}

function ResponseFourScreen() {

  let [rGirlOne, setRGirlOne] = useState(responseGirlOne)


  return (
    <ImageBackground source={{uri: 'https://1stchoicedating.com/images/p213393-1.jpg'}} 
    style={styles.container}>
        
        <LinearGradient
        // Background Linear Gradient
        colors={[ 'transparent', 'rgba(255,255,255,1)']}
        style={styles.background1}
        end={{ x: 0.5, y: 0.5 }}
      > 

      <FlatList
      numColumns={1}
      keyExtractor={(item) => (item.id)}
      data={rGirlOne}
      renderItem={({item}) => (
        
        <View style={styles.box6}>
          <View style={styles.box5}>
              <View style={styles.box4}> 
              <Text style={styles.question}>{item.a4}</Text>
              </View>
          </View>
        </View>

        
        
        

      )} />
    

          <TouchableOpacity style={{ alignItems:'center', justifyContent:'center'}}>
                
                <View style={{ marginBottom: 35}}>
                    <Text style={{color: '#89CFF0', fontSize: 18.7, fontWeight: '400'}}>NEXT</Text>
                </View>
                
          </TouchableOpacity>

      </LinearGradient>
        
    </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Failed" component={FailedScreen}
        options={{ headerTitle: () => (
          <Image style={{ marginHorizontal:40 , width: 190, height: 48, }} source={{uri: 'https://1stchoicedating.com/img/1st-choice-dating-logo.png'}} />
          ), headerStyle: {
            backgroundColor: '#FF2400',
          },
          }} 
        />
      <Stack.Screen name="Home" component={FirstScreen} 
        options={{ headerTitle: () => (
        <Image style={{ marginLeft:98, width: 190, height: 48, }} source={{uri: 'https://1stchoicedating.com/img/1st-choice-dating-logo.png'}} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} 
        />
      <Stack.Screen name="Last" component={SecondScreen} 
        options={{ headerTitle: () => (
        <Image style={{ marginLeft:47, width: 190, height: 48, }} source={{uri: 'https://1stchoicedating.com/img/1st-choice-dating-logo.png'}} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} 
        />
        <Stack.Screen name="LastResponse" component={LastResponseScreen} 
        options={{ headerTitle: () => (
        <Image style={{ marginLeft:47, width: 190, height: 48, }} source={{uri: 'https://1stchoicedating.com/img/1st-choice-dating-logo.png'}} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }} 
        />
      <Stack.Screen name="ResponseOne" component={ResponseOneScreen} 
        options={{ headerTitle: () => (
        <Image style={{ marginLeft:43, width: 190, height: 48, }} 
        source={{uri: 'https://1stchoicedating.com/img/1st-choice-dating-logo.png'}} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }}  
        />
        <Stack.Screen name="ResponseTwo" component={ResponseTwoScreen} 
        options={{ headerTitle: () => (
        <Image style={{ marginLeft:43, width: 190, height: 48, }} source={{uri: 'https://1stchoicedating.com/img/1st-choice-dating-logo.png'}} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }}  
        />
        <Stack.Screen name="ResponseThree" component={ResponseThreeScreen} 
        options={{ headerTitle: () => (
        <Image style={{ marginLeft:42, width: 190, height: 48, }} source={{uri: 'https://1stchoicedating.com/img/1st-choice-dating-logo.png'}} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }}  
        />
        <Stack.Screen name="ResponseFour" component={ResponseFourScreen} 
        options={{ headerTitle: () => (
        <Image style={{ marginLeft:42, width: 190, height: 48, }} source={{uri: 'https://1stchoicedating.com/img/1st-choice-dating-logo.png'}} />
        ), headerStyle: {
          backgroundColor: '#FF2400',
        },
        }}  
        />
        <Stack.Screen name="End" component={EndScreen}
        options={{ headerTitle: () => (
          <Image style={{ marginHorizontal:40 , width: 190, height: 48, }} source={{uri: 'https://1stchoicedating.com/img/1st-choice-dating-logo.png'}} />
          ), headerStyle: {
            backgroundColor: '#FF2400',
          },
          }} 
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom:0,
    height: 340,
  },
  textCon: {
    marginTop: 20,
    marginRight: 10,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 17,
    color: 'gray',
    fontWeight: '400'
  },
  container1: {
    marginTop: 400,
    padding: 14,
    backgroundColor: 'white'
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#89CFF0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 40,
    margin: 6
  },
  question: {
    color: '#89CFF0',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  choices: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  box3: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
    borderColor: '#89CFF0',
    borderWidth:2.2,
  },
  box2: {
    borderColor: 'white',
    borderWidth:2.4,
  },
  box1: {
    borderColor: '#89CFF0',
    borderWidth: 2.2,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 9,
    backgroundColor: 'white',
    paddingBottom: 10
  },
  box6: {
    marginLeft: 70,
    marginRight: 70,
    marginTop: 180,
    borderColor: '#89CFF0',
    borderWidth:2.2,
  },
  box5: {
    borderColor: 'white',
    borderWidth:2.4,
  },
  box4: {
    borderColor: '#89CFF0',
    borderWidth: 2.2,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 13,
    backgroundColor: 'white',
    paddingBottom: 14
  },
  background1: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom:0,
    height: 340,
  },
});