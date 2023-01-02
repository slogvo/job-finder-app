import React, { useEffect, useState } from 'react';

const useCategory = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    (async () => {
      const resp = await fetch('/api/category');
      const data = await resp.json();
      setCategoryList(data);
    })();
  }, []);
  return categoryList;
};

export default useCategory;
