import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function CartScreen() {

return (

<View style={styles.container}>

{/* HEADER */}
<View style={styles.header}>

<TouchableOpacity onPress={() => router.back()}>
<Ionicons name="arrow-back" size={24} />
</TouchableOpacity>

<Text style={styles.headerTitle}>Shopping Cart</Text>

<Ionicons name="trash-outline" size={24} />

</View>


{/* IMAGE SECTION */}
<View style={styles.imageBox}>

<Image
source={require("../assets/images/burger.png")}
style={styles.bigImage}
/>

<View style={styles.discount}>
<Text style={styles.discountText}>10%{"\n"}OFF</Text>
</View>


{/* SMALL BURGER IMAGES */}
<View style={styles.smallImageRow}>

<Image
source={require("../assets/images/burger.png")}
style={styles.smallImage}
/>

<Image
source={require("../assets/images/burger.png")}
style={styles.smallImage}
/>

<Image
source={require("../assets/images/burger.png")}
style={styles.smallImage}
/>

</View>

</View>


{/* CARD */}
<View style={styles.card}>

<View style={styles.foodHeader}>
<Text style={styles.foodName}>BURGER</Text>
<Text style={styles.price}>$28</Text>
</View>

<Text style={styles.rating}>⭐ 4.9 (3k+ Rating)</Text>


{/* QUANTITY */}
<View style={styles.qtyRow}>

<TouchableOpacity style={styles.qtyBtn}>
<Ionicons name="remove" size={18}/>
</TouchableOpacity>

<Text style={styles.qty}>02</Text>

<TouchableOpacity style={styles.qtyBtn}>
<Ionicons name="add" size={18}/>
</TouchableOpacity>

</View>


{/* ADDRESS */}
<View style={styles.addressRow}>

<View style={styles.address}>
<Ionicons name="location-outline" size={20} />
<Text style={styles.addressText}>
Delivery Address{"\n"}Dhaka, Bangladesh
</Text>
</View>

<View style={styles.editBtn}>
<Ionicons name="create-outline" size={22} color="white"/>
</View>

</View>


{/* PAYMENT */}
<View style={styles.paymentRow}>

<Ionicons name="card-outline" size={22} />

<Text style={styles.paymentText}>Payment Method</Text>

<TouchableOpacity style={styles.changeBtn}>
<Text style={styles.changeText}>Change</Text>
</TouchableOpacity>

</View>


{/* SUMMARY */}
<Text style={styles.summaryTitle}>Checkout Summary</Text>

<View style={styles.summaryRow}>
<Text>Subtotal (2)</Text>
<Text>$56</Text>
</View>

<View style={styles.summaryRow}>
<Text>Delivery Fee</Text>
<Text>$6.20</Text>
</View>

<View style={styles.summaryRow}>
<Text style={styles.totalText}>Payable Total</Text>
<Text style={styles.totalPrice}>$62.2</Text>
</View>


{/* BUTTON */}
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Confirm Order</Text>
</TouchableOpacity>

</View>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#FFF4C7"
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:20
},

headerTitle:{
fontSize:18,
fontWeight:"bold"
},

imageBox:{
alignItems:"center"
},

bigImage:{
width:320,
height:200,
borderRadius:20
},

discount:{
position:"absolute",
top:10,
left:40,
backgroundColor:"#5B4CF0",
width:60,
height:60,
borderRadius:30,
justifyContent:"center",
alignItems:"center"
},

discountText:{
color:"white",
fontWeight:"bold",
textAlign:"center"
},

/* SMALL IMAGES */

smallImageRow:{
position:"absolute",
bottom:15,
flexDirection:"row",
backgroundColor:"white",
padding:10,
borderRadius:12,
gap:20
},

smallImage:{
width:80,
height:60,
borderRadius:10
},

card:{
backgroundColor:"white",
flex:1,
marginTop:-20,
borderTopLeftRadius:30,
borderTopRightRadius:30,
padding:20
},

foodHeader:{
flexDirection:"row",
justifyContent:"space-between"
},

foodName:{
fontSize:22,
fontWeight:"bold"
},

price:{
fontSize:20,
color:"#5B4CF0",
fontWeight:"bold"
},

rating:{
marginTop:5,
color:"gray"
},

qtyRow:{
flexDirection:"row",
alignItems:"center",
marginTop:10
},

qtyBtn:{
borderWidth:1,
borderColor:"#ccc",
padding:6,
borderRadius:20
},

qty:{
marginHorizontal:10
},

addressRow:{
flexDirection:"row",
marginTop:20,
alignItems:"center"
},

address:{
flexDirection:"row",
backgroundColor:"#D7F0E7",
padding:10,
borderRadius:10,
flex:1
},

addressText:{
marginLeft:10
},

editBtn:{
backgroundColor:"#8B8BEF",
padding:15,
borderRadius:10,
marginLeft:10
},

paymentRow:{
flexDirection:"row",
alignItems:"center",
marginTop:20
},

paymentText:{
marginLeft:10,
flex:1
},

changeBtn:{
borderWidth:1,
borderColor:"#5B4CF0",
paddingHorizontal:15,
paddingVertical:5,
borderRadius:20
},

changeText:{
color:"#5B4CF0"
},

summaryTitle:{
marginTop:20,
fontWeight:"bold"
},

summaryRow:{
flexDirection:"row",
justifyContent:"space-between",
marginTop:10
},

totalText:{
fontWeight:"bold"
},

totalPrice:{
color:"#5B4CF0",
fontWeight:"bold"
},

button:{
backgroundColor:"#5B4CF0",
marginTop:20,
padding:15,
borderRadius:30,
alignItems:"center"
},

buttonText:{
color:"white",
fontWeight:"bold",
fontSize:16
}

});