import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { router } from "expo-router";

export default function ProfileScreen(){

const [darkMode,setDarkMode] = useState(false);

return(

<View style={styles.container}>

{/* Header */}
<View style={styles.header}>

<TouchableOpacity onPress={()=>router.back()}>
<Ionicons name="arrow-back" size={24}/>
</TouchableOpacity>

<Text style={styles.title}>Profile</Text>

<View style={{width:24}}/>

</View>


{/* Avatar */}
<View style={styles.avatarSection}>

<Image
source={require("../../assets/images/avata.png")}
style={styles.avatar}
/>

<TouchableOpacity style={styles.editBtn}>
<Ionicons name="create-outline" size={16} color="white"/>
</TouchableOpacity>

</View>


<Text style={styles.name}>Rakibul Hasan</Text>
<Text style={styles.email}>rakibhbrand@gmail.com</Text>


{/* Menu */}
<View style={styles.menu}>

<MenuItem icon="home-outline" text="Home"/>

<MenuItem icon="card-outline" text="My Card"/>

<View style={styles.menuRow}>
<View style={styles.menuLeft}>
<Ionicons name="moon-outline" size={22}/>
<Text style={styles.menuText}>Dark Mood</Text>
</View>

<Switch
value={darkMode}
onValueChange={()=>setDarkMode(!darkMode)}
/>

</View>

<MenuItem icon="location-outline" text="Track Your Order"/>

<MenuItem icon="settings-outline" text="Settings"/>

<MenuItem icon="help-circle-outline" text="Help Center"/>

</View>


{/* Logout */}
<TouchableOpacity style={styles.logout}>
<Text style={styles.logoutText}>Log Out</Text>
<Ionicons name="log-out-outline" size={18} color="white"/>
</TouchableOpacity>

</View>

);
}


type MenuItemProps = {
  icon: any;
  text: string;
};

function MenuItem({ icon, text }: MenuItemProps) {

  return (

    <View style={styles.menuRow}>

      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={22} />
        <Text style={styles.menuText}>{text}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} />

    </View>

  );
}


const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#FFF4C7",
paddingTop:40
},

header:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
paddingHorizontal:20
},

title:{
fontSize:18,
fontWeight:"bold"
},

avatarSection:{
alignItems:"center",
marginTop:20
},

avatar:{
width:120,
height:120,
borderRadius:60
},

editBtn:{
position:"absolute",
right:110,
bottom:5,
backgroundColor:"#5B4CF0",
padding:8,
borderRadius:20
},

name:{
textAlign:"center",
fontSize:20,
fontWeight:"bold",
marginTop:10
},

email:{
textAlign:"center",
color:"gray",
marginBottom:20
},

menu:{
backgroundColor:"white",
marginHorizontal:20,
borderRadius:20,
padding:10
},

menuRow:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
padding:15
},

menuLeft:{
flexDirection:"row",
alignItems:"center"
},

menuText:{
marginLeft:15,
fontSize:16
},

logout:{
backgroundColor:"#5B4CF0",
margin:20,
padding:15,
borderRadius:30,
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
gap:10
},

logoutText:{
color:"white",
fontWeight:"bold",
fontSize:16
}

});