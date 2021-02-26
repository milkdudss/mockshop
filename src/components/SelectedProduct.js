import React, {useState} from 'react'

import { useSelector, useDispatch } from 'react-redux';
import {
  makeStyles,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';


const useStyles = makeStyles({
    categoryTitle: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 16,
    },
    container: {
      maxWidth: 540,
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      flexWrap: 'wrap',
    },
    titleCase: {
      textTransform: 'capitalize'
    },
    root: {
      width: 200,
      height: 200,
      padding: 30,
    },
    media: {
      height: 300,
      width: 200,
      right: 30,
    },
    title: {
      fontSize: 24
    },
    price: {
      fontSize: 24
    },
    inputSelector: {
      minWidth: 100,
      maxWidth: 100
    },
  });

  export default function SelectedProductContainer({ selectedProductID }) {
    const styles = useStyles();
    const selectedProduct = useSelector(state => state.products.productsById[selectedProductID][0]);
    const [value, setValue] = useState('');

    const handleChange = e => setValue(e.target.value)
    console.log(selectedProduct.category)

    return (
        <>
        <div className={styles.container}>
          <img src={selectedProduct.image} className={styles.media} />
          <h1 className={styles.title}>{selectedProduct.title}</h1>
          <p>{selectedProduct.description}</p>
          <h1 className={styles.price}>price: ${selectedProduct.price}</h1>
          <div className={styles.container}>
            {selectedProduct.category !== 'jewelery' && selectedProduct.category !== 'electronics' ? (
            <div>
              <FormControl className={styles.inputSelector}>
                <InputLabel>Size</InputLabel>
                <Select onChange={handleChange} >
                  <MenuItem value={1}>S</MenuItem>
                  <MenuItem value={2}>M</MenuItem>
                  <MenuItem value={3}>L</MenuItem>
                  <MenuItem value={4}>XL</MenuItem>
                </Select>
              </FormControl>
            </div>
            ) : (<div></div>
            )}
            <div>
              <TextField 
                required
                defaultValue="1"
                label="Quantity"
                type="number" 
                className={styles.inputSelector}    
              />
            </div>
          </div>
         
            <Button  >
              Add To Cart
            </Button>
          
        </div>
        </>
    )
  }