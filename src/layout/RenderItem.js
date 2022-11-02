import { Image, Text, View } from "react-native"
import colors from "../../assets/colors/colors"

const RenderItem = ({item}) => {
  return (
    <View
      style ={{
        width: 290,
        height: 200,
        borderRadius: 16,
        backgroundColor: "#fafafa",
        padding: 15,
        elevation: 2,
        marginRight: 30,
    }}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
            <View style={{
                width: 60,
                height: 60,
                borderRadius: 8,
                elevation: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
                }}>{item.companyLogo}
            </View>
            <View style={{
            }}>
                <Text style={{
                  fontSize: 14,
                  color: colors.text,
                  marginBottom: 3,
                  fontWeight:"700"}}>
                  {item.companyName}
                </Text>
                <Text style={{
                  fontSize:15,
                  color: "#a9a9a9",
                  fontWeight:"500"
                  }}>
                  {item. companyLocation}
                </Text>
            </View>
          </View>
          <Image 
          source={require("../../assets/images/heart.png")}
          style={{
            width:25,
            height:25,
          }}
          ></Image>
        </View>
        <Text style={{
          marginTop:8, 
          fontSize:18, 
          color: colors.text, 
          fontWeight:"600"}}>
          {item.companyDescription}
        </Text>
    <View style={{marginTop: 8, flexDirection: "row", alignItems:'center', justifyContent:"space-between"}}>
        <Text style={{ 
          fontSize:15, 
          color: colors.secondary, 
          fontWeight:"500"}}>
          {item.salary}
        </Text>
        <View style={{
          width:5, 
          height:5, 
          borderRadius:10, 
          backgroundColor: colors.primary}}></View>
        <Text style={{ 
          fontSize:14, 
          color: colors.text, 
          fontWeight:"300"}}>
         Hết hạn trong {item.time_remaining} ngày
        </Text>
    </View>
    <View style={{flexDirection:'row', marginTop:10, marginTop:'auto'}}>
      {item?.skills?.map((skill,index)=>
      <View
      key={index} 
      style={{
        width: '30%', 
        height: 32, 
        borderRadius:5, 
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#f1f1f1', 
        marginRight: 8}}>
        <Text
        style={{
          fontWeight: '600',
          color: colors.text,
        }}
        >{skill}</Text>
      </View>
      )}
    </View>
    
</View>
  )
}

export default RenderItem