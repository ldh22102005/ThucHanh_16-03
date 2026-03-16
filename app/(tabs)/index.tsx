import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      {/* Header nền vàng */}
      <View style={styles.topSection}>

        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/avata.png")}
            style={styles.avatar}
          />

          <View>
            <Text style={styles.locationText}>Your Location</Text>

            <View style={styles.locationRow}>
              <Ionicons name="location-outline" size={16} color="#5B4CF0" />
              <Text style={styles.location}>Savar, Dhaka</Text>
            </View>

          </View>

          <Ionicons name="notifications-outline" size={24} />
        </View>

        {/* Search */}
        <View style={styles.searchBox}>

          <Ionicons name="search" size={20} color="white" />

          <TextInput
            placeholder="Search your food"
            placeholderTextColor="#eee"
            style={styles.searchInput}
          />

          <Ionicons name="options-outline" size={20} color="white" />

        </View>

      </View>

      {/* Categories */}
      <View style={styles.categories}>

        <View style={styles.activeCategory}>
          <Text style={styles.categoryIcon}>🍕</Text>
          <Text>PIZZA</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>🍔</Text>
          <Text>BURGER</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>🍹</Text>
          <Text>DRINK</Text>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryIcon}>🍚</Text>
          <Text>RICE</Text>
        </View>

      </View>

      {/* Banner */}
      <View style={styles.banner}>

        <View>
          <Text style={styles.bannerTitle}>BURGER</Text>
          <Text style={styles.bannerSub}>Today&apos;s Hot offer</Text>
          <Text style={styles.rating}>⭐ 4.9 (3k+ Rating)</Text>
        </View>

        <View>

          <Image
            source={require("../../assets/images/burger.png")}
            style={styles.burgerImage}
          />

          <View style={styles.discount}>
            <Text style={styles.discountText}>10%{"\n"}OFF</Text>
          </View>

        </View>

      </View>

      {/* Popular */}
      <View style={styles.popularHeader}>
        <Text style={styles.popularText}>Popular Items</Text>
        <Text style={{ color: "gray" }}>View All</Text>
      </View>

      {/* Food List */}
      <View style={styles.foodRow}>

        <TouchableOpacity
          style={styles.foodCard}
          onPress={() => router.push("/cart")}
        >
          <Image
            source={require("../../assets/images/burger.png")}
            style={styles.food}
          />
          <Text style={styles.foodText}>BURGER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.foodCard}>
          <Image
            source={require("../../assets/images/pizza.png")}
            style={styles.food}
          />
          <Text style={styles.foodText}>PIZZA</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff"
},

topSection:{
backgroundColor:"#FFF4C7",
padding:20,
borderBottomLeftRadius:30,
borderBottomRightRadius:30,
marginBottom:20
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:20
},

avatar:{
width:40,
height:40,
borderRadius:20
},

locationText:{
fontSize:12,
color:"gray"
},

locationRow:{
flexDirection:"row",
alignItems:"center"
},

location:{
marginLeft:5,
fontWeight:"bold"
},

searchBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#5B4CF0",
padding:12,
borderRadius:25
},

searchInput:{
marginLeft:10,
color:"white",
flex:1
},

categories:{
flexDirection:"row",
justifyContent:"space-around",
paddingHorizontal:20,
marginBottom:20
},

activeCategory:{
backgroundColor:"#3ecf8e",
padding:15,
borderRadius:10,
alignItems:"center",
width:80
},

category:{
backgroundColor:"#eee",
padding:15,
borderRadius:10,
alignItems:"center",
width:80
},

categoryIcon:{
fontSize:20,
marginBottom:5
},

banner:{
backgroundColor:"#111",
borderRadius:15,
padding:15,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginHorizontal:20,
marginBottom:20
},

bannerTitle:{
color:"yellow",
fontSize:20,
fontWeight:"bold"
},

bannerSub:{
color:"white"
},

rating:{
color:"white"
},

burgerImage:{
width:200,
height:150,
resizeMode:"contain"
},

discount:{
position:"absolute",
top:20,
left:10,
backgroundColor:"#5B4CF0",
width:50,
height:50,
borderRadius:25,
justifyContent:"center",
alignItems:"center"
},

discountText:{
color:"white",
fontSize:10,
fontWeight:"bold",
textAlign:"center"
},

popularHeader:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:10,
paddingHorizontal:20
},

popularText:{
fontWeight:"bold",
fontSize:16
},

foodRow:{
flexDirection:"row",
justifyContent:"space-between",
paddingHorizontal:20
},

foodCard:{
alignItems:"center"
},

food:{
width:180,
height:130,
borderRadius:10
},

foodText:{
marginTop:5,
fontWeight:"bold"
}

});