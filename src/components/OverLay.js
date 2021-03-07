import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    makeStyles,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
  } from '@material-ui/core';

import Button from '@material-ui/core/Button';

import { clearSearch } from '../actions/appActions'

  const useStyles = makeStyles((theme) => ({
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
    button: {
        '& > *': {
          margin: theme.spacing(1),
          float: "right",
        },
      },
  }));

const OverLay = () => {
   
const dispatch = useDispatch();
const styles = useStyles();
const inputedValue = useSelector(state => state.app.inputedString)
const products = useSelector(state => state.products.fetchedProducts)

const searchProducts = products.filter(product => product.title.toLowerCase().indexOf(inputedValue.toLowerCase()) !==-1 || product.description.toLowerCase().indexOf(inputedValue.toLowerCase()) !== -1 
|| product.category.toLowerCase().indexOf(inputedValue.toLowerCase()) !== -1);

const clearSearchClicker = () => {
    dispatch(clearSearch());
}

    return (
        <div>
            <div> 
                <div className={styles.button}>
                <Button onClick={() => clearSearchClicker()}>Clear Search Results</Button>
                </div>
                <div>
                <h1>Search Results for</h1>
                <p>"{inputedValue}"</p>
                </div>
                
            </div>
            <div className={styles.container}>
                
                { inputedValue.length > 2 ? 
                searchProducts.map(product => {
                return (
                <div >
                <Card key={product.id} className={styles.root}>
                    <CardActionArea >
                        <CardMedia image={product.image} className={styles.media}/>
                        <CardContent>
                        <Typography className={styles.title}>
                            {product.title}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                
                </div> 
                )})
                
                
                : <div></div>
                }
            </div>

        </div>
    )
}

export default OverLay
