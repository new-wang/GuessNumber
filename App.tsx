/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  Alert
} from 'react-native';

let number = Math.round(Math.random() * 100);
let count = 0;
const App = () => {
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    initNumber();
    console.warn('初始化',number)
  },[])
  function doGuess(){
    count ++;
    const numberValue = parseInt(text);
    if(numberValue === number){
      Alert.alert(`猜中了！你一共猜了${count}次`);
      initNumber();
    }else if(numberValue < number){
      Alert.alert('猜小了！');
    }else{
      Alert.alert('猜大了！');
    }
  }
  function initNumber(){
    number = Math.round(Math.random() * 100);
    count = 0;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput style={styles.input} value={text} onChangeText={setText} />
        <Button title="猜" onPress={doGuess} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth:2,
    borderColor: 'black',
    margin: 20,
    height: 50,
    fontSize: 20,
    paddingLeft: 10
  }
});

export default App;
