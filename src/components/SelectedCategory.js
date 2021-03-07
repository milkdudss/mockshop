import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

import { setProductID } from '../actions/appActions';

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
      height: 140,
    },
  });

  const SelectedCategoryContainer = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    
    const selectedCategory = useSelector(state => state.app.selectedCategoryName);
   

    const products = useSelector(
      state => state.products.category[selectedCategory]
    );
    
    const cardClickHandler = product => {
      dispatch(setProductID(product));
  }
  
  
    return (
      <>
        <div className={styles.categoryTitle}>
          <Typography className={styles.titleCase}>
            {selectedCategory}
          </Typography>
        </div>
        <div className={styles.container}>
          {products.map((product, index) => (
            <Card key={product.id} className={styles.root}>
              <CardActionArea onClick={() => cardClickHandler(product.id)}>
                <CardMedia image={product.image} className={styles.media}/>
                <CardContent>
                  <Typography className={styles.title}>
                    {product.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}

        </div>
      </>
    )
  }

  export default SelectedCategoryContainer