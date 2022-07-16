import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';

let {width} = Dimensions.get('window');

const HomeScreen = () => {
  const [BannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      'https://images.unsplash.com/photo-1654115350627-8385ee13453d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1654115350627-8385ee13453d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1654115350627-8385ee13453d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View>
        <Swiper
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={4}
          style={{
            height: width / 2,
          }}>
          {BannerData.map(item => {
            return (
              <Image
                key={item}
                resizeMode="contain"
                source={{uri: item}}
                style={styles.banner}
              />
            );
          })}
        </Swiper>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
