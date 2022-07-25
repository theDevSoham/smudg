import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useRef, useContext } from 'react'
import tw from 'tailwind-react-native-classnames'
import CategoryIcon from '../assets/svg/CategoryIcon'
import BottomSheet from './BottomSheet';
import { StateContext } from '../Context/StateContext';
import RBSheet from "react-native-raw-bottom-sheet";

export default function Categories({item}) {

    const categoryItems = [
        'All',
        'Prep',
        'Primer',
        'Corrector',
        'Eye-liner',
        'Face Cream',
        'Face Wash',
        'Face Cream',
        'Face Wash'
      ]
    const brandItems = [
        'All',
        'Nykaa',
        'Smudg',
        'Maybelline'
      ]

    const typeItems = [
        'All',
        'Lipstick',
        'Foundation',
        'Blush',
      ]

    const refRBSheet = useRef();
    const {categories, brands, types} = useContext(StateContext);
    const [category] = categories;
    const [brand] = brands;
    const [type] = types;
    const [isOpen, setIsOpen] = useState('Category');

    const closeBottomSheet = () => {
        refRBSheet.current.close()
    }
  return (
    <View style={[tw`my-4`, styles.categories]}>

    <TouchableOpacity onPress={() => 
        {
            setIsOpen('Category');
            refRBSheet.current.open()
        }}>
        <View style={styles.categoryButton}>
            <CategoryIcon />
            <Text>Category: </Text>
            <Text style={{fontWeight: 'bold'}}>{category}</Text>
        </View>
    </TouchableOpacity>

    {item !== "Tutorials" && <TouchableOpacity onPress={() => 
        {
            setIsOpen('Brand');
            refRBSheet.current.open()
        }}>
        <View style={styles.categoryButton}>
            <CategoryIcon />
            <Text>Brand: </Text>
            <Text style={{fontWeight: 'bold'}}>{brand}</Text>
        </View>
    </TouchableOpacity>}

    {item === "Tutorials" && <TouchableOpacity onPress={() => 
        {
            setIsOpen('Type');
            refRBSheet.current.open()
        }}>
        <View style={styles.categoryButton}>
            <CategoryIcon />
            <Text>Type: </Text>
            <Text style={{fontWeight: 'bold'}}>{type}</Text>
        </View>
    </TouchableOpacity>}


    <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "#B5B5B5"
          },
          draggableIcon: {
            backgroundColor: "#B5B5B5"
          },
          container: {
            backgroundColor: "#FFFFFF"
          }
        }}
        animationType="slide"
        height={500}
      >
        {isOpen == 'Category' && <BottomSheet name="Category" data={categoryItems} close={() => closeBottomSheet()} isOpen={isOpen}/>}

        {isOpen == 'Brand' && <BottomSheet name="Brand" data={brandItems} close={() => closeBottomSheet()} isOpen={isOpen}/>}

        {isOpen == 'Type' && <BottomSheet name="Type" data={typeItems} close={() => closeBottomSheet()} isOpen={isOpen}/>}
      </RBSheet>

    </View>
  )
}

const styles = StyleSheet.create({
    categories: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30, 
        backgroundColor: '#F9F9F9',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    categoryButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#8F8F8F',
        padding: 10,
        borderRadius: 32,
        zIndex: 1,
    },

    modal: {
        backgroundColor : "#00BCD4",
        height: "60%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})