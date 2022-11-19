import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'

const useProduct = () => {
  const [listProducts, setListProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchProducts = useCallback(async (type, text) => {
    try {
      setLoading(true)
      const resp = await fetch(`/api/product?type=${type || 0}&s=${text || ''}`);
      const data = await resp.json();
      setListProducts(data || []);
    }
    catch (err) {
      console.log(err);
    }
    finally {
      setLoading(false);
    }
  }, []);

  const resetList = () => {
    setListProducts([""]);
  }

  return [listProducts, isLoading, fetchProducts, resetList];
}
export default useProduct


