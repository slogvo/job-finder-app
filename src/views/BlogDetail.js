import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import firestore from '@react-native-firebase/firestore';

const BlogDetail = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [blog, setBlog] = useState();

  useEffect(() => {
    firestore()
      .collection('blogs')
      .onSnapshot((snapshot) => {
        let blogs = [];
        snapshot.forEach((doc) => {
          blogs.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        let blog = blogs.find((item) => item.id === itemId);
        setBlog(blog);
      });
  }, [itemId]);

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        persistentScrollbar={true}
        style={{
          backgroundColor: '#fff',
          position: 'relative',
        }}
        stickyHeaderIndices={[0]}
      >
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#fff',
            elevation: 10,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 25,
              paddingTop: 15,
              width: '100%',
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back-sharp" size={28} color={colors.darkGray} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: colors.text,
                fontWeight: 'bold',
              }}
            >
              Bài viết
            </Text>
            <Entypo name="dots-three-vertical" size={20} color={colors.text} />
          </View>
        </View>
        <View style={{ marginTop: 25, paddingHorizontal: 25 }}>
          <Text style={{ fontSize: 20, lineHeight: 28, fontWeight: '800', color: colors.text }}>
            {blog?.title}
          </Text>
          <Text style={{ marginTop: 10, fontSize: 13, fontWeight: '500' }}>Đội ngũ admin</Text>
          <Image
            source={{ uri: blog?.image }}
            style={{
              marginTop: 15,
              borderRadius: 16,
              width: '100%',
              height: 200,
              resizeMode: 'cover',
            }}
          />
          <Text style={{ marginTop: 25, lineHeight: 22, color: colors.text2 }}>
            {blog?.content}
          </Text>
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default BlogDetail;

const styles = StyleSheet.create({});
