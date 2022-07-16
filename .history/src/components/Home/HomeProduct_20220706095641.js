import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../../Redux/Actions/ProductAction';
import ProductCard from '../Home/ProductCard';

let {width} = Dimensions.get('window');

const HomeProduct = () => {
  const dispatch = useDispatch();

  const {products, error, Loading} = useSelector(state => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getProduct);
  }, [dispatch, error]);

  return (
    <>
		{
			loading ? <Text>Loading</Text>
		}
	</>
  );
};

export default HomeProduct;

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    marginVertical: 10,
  },
  bestText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
});
