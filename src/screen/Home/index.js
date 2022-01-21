import React, { useEffect } from "react";
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
    FlatList,
    TextInput
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../constants'

import dummyData from "../../constants/dummyData";
import HorizontalFoodCard from "../../components/HorizontalFoodCard";
import VerticalFoodCard from "../../components/VerticalFoodCard";

const Section = ({title,onPress,children}) => {
    return (
        <View>
            <View style={{
                flexDirection : "row",
                marginHorizontal : SIZES.padding,
                marginTop : 30,
                marginBottom : 30
            }}>

                <Text style={{
                    ...FONTS.h3,
                    flex : 1,
                }}>
                    {title}
                </Text>

                <TouchableOpacity onPress={onPress}>
                 <Text style={{
                  ...FONTS.body3,  color : COLORS.primary
                }}>Show All</Text>   
                </TouchableOpacity>

            </View>

            {children}
        </View>
    )
}




const Home = ({ navigation }) => {
    const [selectedCategoryId,setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [menuList,setMenuList] = React.useState([])
    const [recommends,setRecommends] = React.useState([])
    const [popular,setPopular] = React.useState([])
    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId,selectedMenuType)
    },[])

    const handleChangeCategory = (categoryId,menuTypeId) => {
        let selectedRecommend = dummyData.menu.find(a => a.name === "Recommended")
        let selectedPopular = dummyData.menu.find(a => a.name == "Popular")
     
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))
        setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))
        setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
    }


   const renderSearch = () => {
       return (
           <View style={{
               flexDirection : "row",
               height : 40,
               alignItems : "center",
               marginHorizontal : SIZES.padding,
               marginVertical : SIZES.base,
               paddingHorizontal : SIZES.radius,
               borderRadius : SIZES.radius,
               backgroundColor : COLORS.lightGray2
           }}>

               <Image
                source={icons.search}
                style={{
                    height : 20,
                    width : 20,
                    tintColor : COLORS.black
                }}
               />

               <TextInput style={{
                   flex : 1,
                   marginLeft : SIZES.radius,
                   ...FONTS.body3
               }}
                placeholder="search food"
                editable={false}
               />

              <TouchableOpacity >
                  <Image
                    source={icons.filter}
                    style={{
                        height : 20,
                        width : 20,
                        tintColor : COLORS.black
                    }}
                  />
              </TouchableOpacity>

           </View>
       )
   }

   const renderMenuTypes = () => {
       return (
           <FlatList
            horizontal
            data={dummyData.menu}
            keyExtractor={item => `${item.id}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                marginTop : 30,
                marginBottom : 20
            }}
            renderItem={({item,index}) => (
                <TouchableOpacity style={{
                    marginLeft : SIZES.padding,
                    marginRight : index == dummyData.menu.length -1 ? SIZES.padding : 0
                }}
                onPress={() => {
                    setSelectedMenuType(item.id),
                    handleChangeCategory(selectedCategoryId,item.id)
                }}
                >
                    <Text style={{
                        ...FONTS.h3,
                        color  :selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                        
                    }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )}
           />
       )
   }

   const renderRecommendedSection = () => {
       return (
           <Section title={"Recommended"} onPress={() => console.log("Show all recomended")}>
               <FlatList
                data={recommends}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => (
                <HorizontalFoodCard
                    containerStyle={{
                        height : 180,
                        width : SIZES.width * 0.85,
                        paddingRight : SIZES.radius,
                        marginLeft : index == 0 ? SIZES.padding : 18,
                        marginRight : index == recommends.length -1 ? SIZES.padding : 0,
                        alignItems : "center"
                        
                    }}  

                    imageStyle={{
                        marginTop : 35,
                        height : 150,
                        width : 150
                    }}
                    item={item}
                    onPress={() => console.log("HorizontalFoodCard")}
                
                />
            )}

               />
           </Section>
       )
   }

   const renderFoodCategories = () => {
       return (
       <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item,index}) => (
            <TouchableOpacity
                style={{
                    flexDirection : "row",
                    height : 55,
                    marginTop : SIZES.padding,
                    marginLeft : index == 0 ? SIZES.padding : SIZES.radius,
                    marginRight : index == dummyData.categories.length -1 ? SIZES.padding: 0,
                    paddingHorizontal : 8,
                    borderRadius : SIZES.radius,
                    backgroundColor : selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
                }}
                onPress={() => {
                    setSelectedCategoryId(item.id)
                    handleChangeCategory(item.id,selectedMenuType)
                }}
            >
                <Image
                    source={item.icon}
                    style={{
                        marginTop : 5,
                        height : 50,
                        width : 50        
                    
                    }}
                />

                <Text
                    style={{
                        ...FONTS.h3,
                        alignSelf : "center",
                        marginRight : SIZES.base,
                        color : selectedCategoryId == item.id ? COLORS.white : COLORS.darkgray,
                    }}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        )}

       />
       )
   }

   const renderPopularSection = () => {
       return (
           <Section
            title="Popular Near You"
            onPress={() => console.log("Show all Popular")}
           >
               <FlatList
                data={popular}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => (
               <VerticalFoodCard
                containerStyle={{
                    marginLeft : index == 0 ? SIZES.padding : 18,
                    marginRight : index == popular.length -1 ? SIZES.padding : 0
                }}
                item={item}
                onPress={() => console.log("Vertical Food Card")}
               />
            )}

               />

           </Section>
       )
   }

   const renderDeliveryTo = () => {
       return(
           <View style={{
               marginTop : SIZES.padding,
               marginBottom : SIZES.padding,
               marginHorizontal : SIZES.padding,
           }}>
               <Text style={{
                   ...FONTS.body3,
                   color : COLORS.primary
               }}>
                   DELIVERY TO
               </Text>
               <TouchableOpacity style={{
                   flexDirection : "row",
                   marginTop : SIZES.base,
                   alignItems : "center"
               }}>
                   <Text style={{
                       ...FONTS.h3
                   }}>{dummyData?.myProfile?.address}</Text>
                   <Image
                    source={icons.down_arrow}
                    style={{
                        marginLeft : SIZES.base,
                        height : 20,
                        width : 20
                    }}
                   />
               </TouchableOpacity>
           </View>
       )
   }
    return (
        <SafeAreaView style={styles.container}>

        {renderSearch()}

        <FlatList 
            data={menuList}
            keyExtractor={item => `${item.id}`}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
                <View>
                    {renderDeliveryTo()}
                    {renderFoodCategories()}

                    {renderPopularSection()}

                    {renderRecommendedSection()}


                    {renderMenuTypes()}
                </View>
            }
            renderItem={({item,index}) => {
                return (
                   <HorizontalFoodCard
                    containerStyle={{
                        height : 130,
                        alignItems : "center",
                        marginHorizontal : SIZES.padding,
                        marginBottom : SIZES.radius,
                    }}
                    imageStyle={{
                        marginTop :20,
                        height : 110,
                        width : 110
                    }}
                    item={item}
                    onPress={() => console.log("HorizontalFoodCard")}
                   />
                )
            }}
            ListFooterComponent={
                <View style={{height : 150}}></View>
            }
        />

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
 
        backgroundColor : "white",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home