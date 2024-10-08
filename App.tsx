import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View , Image } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [Dish, setDish] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  console.log("App Starting up")
  return (

<ScrollView>
    <View>
    <Text style={styles.welcomeText}>Please enter a dish!</Text>

      <View style={styles.mainPicture}>
      <Image style={styles.ImageSize}
      source={require('./img/Welcome.jpg')}/>
      </View>

      <Text style={styles.HeadingText}>Enter Dish:</Text>
      <TextInput style={styles.InputBoxs}
                       placeholder='Dish'
                       onChangeText={newText => setDish(newText)}/>
      <View style={styles.InputFlex}>

      <Text style={styles.HeadingText}>Enter Description:</Text>
      <TextInput style={styles.InputBoxs}
                       placeholder='Description'
                       onChangeText={newText => setDescription(newText)}/>
      <View style={styles.InputFlex}>

      <Text style={styles.HeadingText}>Enter Price:</Text>
      <TextInput style={styles.InputBoxs}
                       placeholder='Price'
                       onChangeText={newText => setPrice(newText)}/>
      <View style={styles.InputFlex}> </View>
      </View>


      <Button title='Enter'
      onPress={() => {
      console.log("Dish" + Dish +
      "Description" + Description + "Price" + Price + " ")
    }}
    />
    
  <Text style={styles.welcomeText}>Starter</Text>

  <Image style={styles.ImageSize}
      source={require('./img/Starter1.jpg')}/>

  <Text style={styles.mainText}>Warm,
   spiced gingerbread served 
   alongside a velvety tomato soup,
   creating a delightful balance of sweet and savory flavors.
   Price: R35.00</Text>

   <Image style={styles.ImageSize}
      source={require('./img/Starter2.png')}/>

  <Text style={styles.mainText}>Crispy, 
  golden cheeseballs with a gooey,
  melted center, served as a delightful appetizer or snack,
  offering a burst of cheesy goodness in every bite.
  Price: R30.00</Text>

   <Image style={styles.ImageSize}
      source={require('./img/Starter3.jpg')}/>

  <Text style={styles.mainText}>Delicate
   smoked salmon paired with a creamy avocado blend,
   accented by thinly sliced carrots,
   offering a harmonious mix of smoky, creamy, and crisp textures in a refined,
   elegant dish.
   Price: R39.00</Text>

   <Image style={styles.ImageSize}
      source={require('./img/Main1.jpg')}/>

  <Text style={styles.mainText}>Al dente spaghetti tossed with tender broccoli,
   accompanied by spicy buffalo wings and crispy potato bites,
   creating a satisfying plate that combines hearty,
   vibrant flavors with a touch of indulgence.
   Price: R50.00</Text>

   <Image style={styles.ImageSize}
      source={require('./img/Main2.jpg')}/>

  <Text style={styles.mainText}>A juicy chicken burger,
   perfectly grilled and served on a toasted bun with fresh toppings,
   paired with thick, golden fries for a classic and satisfying meal.
   Price: R45.00</Text>

   <Image style={styles.ImageSize}
      source={require('./img/Main3.jpg')}/>

  <Text style={styles.mainText}>Crispy fried chicken served alongside creamy mashed potatoes,
   topped with a sprinkle of fresh greens for a touch of color and flavor,
   creating a comforting and well-rounded dish.
   Price: R40.00</Text>

   <Image style={styles.ImageSize}
      source={require('./img/Dessert.jpg')}/>

  <Text style={styles.mainText}>A luscious blueberry pie with a golden,
   flaky crust,
   filled with sweet,
   juicy blueberries that burst with flavor in every bite.
   Price: R35.00</Text>

   <Image style={styles.ImageSize}
      source={require('./img/Dessert2.jpg')}/>

  <Text style={styles.mainText}>Rich, velvety chocolate cake drizzled with a decadent chocolate sauce,
   creating an indulgent dessert that satisfies every chocolate lover’s deepest cravings.
   Price: R35.00</Text>

   <Image style={styles.ImageSize}
      source={require('./img/Dessert3.png')}/>

  <Text style={styles.mainText}>Traditional malva pudding,
   with its caramelized, spongy texture,
   served warm and generously topped with a smooth,
   creamy custard—a comforting South African dessert with a rich, sweet finish.
   Price: R35.00</Text>

</View>
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  welcomeText: {
    paddingTop: 40,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center'
  },
    mainText: {
    paddingTop: 40,
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center'
  },

  mainPicture:{
    paddingTop: 40,
    justifyContent: 'center',
    alignContent:'center'
  },
  ImageSize:{
    width: 250,
    height: 250,
  },

  InputFlex:{
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-evenly"
  },

InputBoxs:{
  //Your style properties here
  color:"orange"
},
HeadingText:{
  //Your style properties
}
})
