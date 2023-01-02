const { createContext, useState, useContext } = require('react');

const GalleryContext = createContext();

const GalleryProvider = (props) => {
  const [catList, setCatList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const toggleFavorite = (catID) => {
    const updatedArray = catList?.map((cat) => {
      if (cat.id === catID)
        return {
          ...cat,
          isFavorite: !cat.isFavorite,
        };
      return cat;
    });
    setCatList(updatedArray);
  };

  const value = { catList, setCatList, favoriteList, setFavoriteList, toggleFavorite };
  return <GalleryContext.Provider value={value} {...props} />;
};

const useGallery = () => {
  const context = useContext(GalleryContext);
  if (typeof context === 'undefined')
    throw new Error('useGallery must be used within GalleryProvider');
  return context;
};

export { useGallery, GalleryProvider };
