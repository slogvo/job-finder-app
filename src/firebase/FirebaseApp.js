import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import colors from '../../assets/colors/colors';
import { TextInput } from 'react-native-gesture-handler';

const FirebaseApp = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    firestore()
      .collection('users')
      .onSnapshot((snapshot) => {
        let posts = [];
        snapshot.forEach((doc) => {
          posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        console.log('posts: ', posts);
        setUsers(posts);
      });
  }, []);
  const handleAddUser = () => {
    firestore()
      .collection('users')
      .add({
        createdAt: firestore.FieldValue.serverTimestamp(),
        name: 'Hoang Long 2k1',
        female: 'Male',
      })
      .then(() => {
        console.log('User added!');
      });
  };
  return (
    <View style={{ padding: 25 }}>
      {users?.length > 0 && users.map((item) => <Text key={item.id}>{item.name}</Text>)}
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: colors.text,
            fontWeight: '500',
          }}
        >
          User
        </Text>
        <TextInput
          style={{
            marginTop: 8,
            borderWidth: 1,
            width: '100%',
            borderRadius: 4,
            height: 50,
            borderColor: colors.border,
            fontWeight: '400',
            paddingLeft: 15,
          }}
          placeholder="Enter username"
        />
        <TouchableOpacity
          style={{
            width: '100%',
            height: 50,
            backgroundColor: colors.primary,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
            marginTop: 25,
          }}
          onPress={handleAddUser}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: 'bold',
            }}
          >
            Add user
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirebaseApp;
