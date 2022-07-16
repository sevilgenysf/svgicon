import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';

import Swiper from 'react-native-swiper';
import React from 'react';

let {width} = Dimensions.get('window');

const Banner = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.swiper}>
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
          <View style={{height: 20}}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    zIndex: 0,
  },
  swiper: {
    width: width,
    marginTop: '5%',
    alignItems: 'center',
  },
  banner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
