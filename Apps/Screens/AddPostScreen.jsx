import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
// import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function AddPostScreen() {
  const db = getFirestore(app);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = async () => {
    const querySnapShot = await getDocs(collection(db, "cities"));
    querySnapShot.forEach((doc) => {
      console.log("docs:", doc.data);
      setCategoryList((categoryList) => [...categoryList, doc.data()]);
    });
  };

  return (
    <View>
      <Text>AddPostScreen</Text>
    </View>
  );
}
