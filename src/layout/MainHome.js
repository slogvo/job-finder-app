import { ScrollView, FlatList, View, Dimensions } from "react-native"
import { useEffect, useState } from "react"
import BannerCarousel from "./BannerCarousel"
import SearchLayout from "./SearchLayout"
import LargeCategories from "../../assets/data/SmallCategories"
import SmallCategories from "../../assets/data/SmallCategories"
import RenderItem from "./RenderItem"
import Title from "./Title"
import CardCategory from "./CardCategory"


const MainHome = ({ navigation }) => {
  const [largeCategories, setLargeCategories] = useState([]);
  useEffect(() => {
    setLargeCategories(LargeCategories)
  }, [])

  const renderItem = ({ item }) => (
    <RenderItem item={item}></RenderItem>
  );

  return (
    <View style={{
      flex: 1,
      width: '100%',
      backgroundColor: "#f7f7f7",
      paddingTop: 10,
    }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        style={{
          backgroundColor: "#f7f7f7",
          position: "relative",
        }}
        stickyHeaderIndices={[0]}
      >
        <SearchLayout navigation={navigation}></SearchLayout>
        <BannerCarousel></BannerCarousel>
        <View style={{
          marginTop: 30,
          width: '100%',
        }}>
          <Title></Title>
          <View style={{
            marginTop: 10,
            width: '100%',
            paddingLeft: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }} >
            <FlatList
              style={{
                height: 210,
              }}
              contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 2 }}
              showsHorizontalScrollIndicator={false}
              data={largeCategories}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>

        <View style={{
          marginTop: 30,
          width: '100%',
        }}>
          <Title title="Việc làm nổi bật"></Title>
          <View style={{
            marginTop: 10,
            width: '100%',
            paddingHorizontal: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }} >
            {SmallCategories?.map((item) =>
              <View
                key={item.id}
                style={{
                  marginTop: 15,
                  width: '100%',
                  height: 90,
                  backgroundColor: 'red',
                  borderRadius: 16,
                  backgroundColor: "#fff",
                  padding: 10,
                  elevation: 2,
                }}>
                <CardCategory
                  img={item.companyLogo}
                  companyName={item.companyName}
                  desc={item.companyDescription}
                  salary={item.salary}
                  location={item.companyLocation}
                >
                </CardCategory>
              </View>
            )}
          </View>
        </View>
        <View style={{ marginBottom: 80 }}></View>
      </ScrollView>
    </View>
  )
}

export default MainHome