import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../assets/colors/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Candidate from '../layout/Candidate';

const ReceivingDetailScreen = ({ route, navigation }) => {
  const candidates = route?.params?.recruitmentDetail;
  const { userId } = candidates;
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
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons name="ios-arrow-back-sharp" size={28} color={colors.darkGray} />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                color: colors.text,
                fontWeight: 'bold',
              }}
            >
              Các ứng cử viên
            </Text>
            <Text style={{ width: 20 }}></Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            marginTop: 10,
          }}
        >
          {candidates?.length > 0 &&
            candidates.map((item) => (
              <Candidate
                key={item.id}
                id={item.id}
                username={item.username}
                file={item.file}
                phoneNumber={item.phoneNumber}
                userId={item.userId}
                email={item.email}
                navigation={navigation}
                jobId={item.jobId}
                status={item.status}
              />
            ))}
        </View>
        <View style={{ marginBottom: 80 }} />
      </ScrollView>
    </View>
  );
};

export default ReceivingDetailScreen;
