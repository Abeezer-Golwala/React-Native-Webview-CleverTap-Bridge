import React from 'react';
import type {Node} from 'react';
import { WebView } from 'react-native-webview';
import {
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const CleverTap = require('clevertap-react-native');
CleverTap.onUserLogin({'Name': 'Abeezer', 
'Identity': '7789', 
'Email' : 'hello@react.com',
'MSG-push':true,
'MSG-email':true,
'MSG-sms':true,
'MSG-whatsapp':true});
CleverTap.setDebugLevel(3);
CleverTap.createNotificationChannel("abtest","abtest","Clevertap test",3,true);
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (

        <View style={{ flex: 1,  }}>
          <Button onPress={CleverTap.recordEvent('AbeezerPushEvent')} title="Push event"/>
          <WebView
            source={{
              uri: 'http://abclevertaptest.000webhostapp.com/'
            }}
            javaScriptEnabled={true}
            onMessage={event => {
              // const test = JSON.parse(event.nativeEvent);
              // const test2 = {"Product_Viewed",{"key2":"value4"}}
              // const test = event.nativeEvent.data;
              const test = JSON.parse(event.nativeEvent.data);
              // CleverTap.recordEvent(test.key);
              // console.log("Webviewtest"+test);
              // var eveprops;
              // for (let i = 0; i < Object.keys(test).length; i++)
              // {
              //   eveprops +=Object.values(Object.values(test)[0])[i];
              // }
              
              alert(Object.keys(test)[0]+"\n"+Object.keys(test).length+"\n"+JSON.stringify(Object.values(test)[0]));
              // alert(Object.values(Object.values(test)[0])[0]);
              // alert(test.key.key2);
              CleverTap.recordEvent(
                'Product Viewed 3', {'Product Name': 'Dairy Milk',
                                                     'Category': 'Chocolate',
                                                     'Amount': 20.00
                                                    });
             CleverTap.recordEvent(JSON.parse(test));
              alert(typeof(test));
              alert(test);
            // const obj2= (test2.map((object)=>alert(object)=>CleverTap.recordEvent(JSON.stringify(test))));
              // alert(JSON.stringify(test2));
            }
          }
            style={{ marginTop: 20 }}
          />
      </View>
  );
};
export default App;