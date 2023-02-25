import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GoBackFilter = ({ value, onChangeText, navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 25 }}>
      <View
        style={{
          width: '100%',
          paddingBottom: 10,
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
            }}
          >
            <AntDesign name="closecircle" size={28} color={colors.darkGray} />
          </View>
        </TouchableOpacity>
        <View style={{ width: '85%' }}>
          <Image
            source={require('../../assets/images/icons/search-symbol.png')}
            style={{
              position: 'absolute',
              width: 20,
              height: 20,
              left: 20,
              zIndex: 10,
              top: 16,
            }}
          />
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 15,
              paddingLeft: 50,
              borderRadius: 80,
              color: colors.text,
              backgroundColor: '#F7F7F7',
              fontSize: 15,
            }}
            placeholder="Nhập từ khóa tìm kiếm"
          />
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            setFilter(!filter);
            if (filter === true) {
              onChange(0);
            }
          }}
        >
          {filter === false ? (
            <View
              style={{
                backgroundColor: colors.primary,
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
            >
              <Image
                source={require('../../assets/images/icons/filter.png')}
                style={{
                  width: 30,
                  height: 30,
                  zIndex: 100,
                }}
              />
            </View>
          ) : (
            <View
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
              }}
            >
              <AntDesign name="closecircle" size={25} color={colors.darkGray} />
            </View>
          )}
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default GoBackFilter;
