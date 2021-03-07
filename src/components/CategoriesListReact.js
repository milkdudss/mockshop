import React from 'react'


import { setCategory } from '../actions/appActions'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CircularProgress from "@material-ui/core/CircularProgress";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        width: 150,
        height: 200,
        padding: 20,
    },
    media: {
      height: 140,
    },
    flex: {
      display: 'flex',
      justifyContent: 'center',
    }

  });



const ProductsContainer = ({ }) => {
   

   const classes = useStyles();
   const dispatch = useDispatch();

   


   const product = useSelector(
    state => state.products?.category
    );

    const state = useSelector(state => state.products);




    const cardClickHandler = categoryName => {
       dispatch(setCategory(categoryName));
   }



    return (
        <div className={classes.flex}>
            {state.loading === false ? (
                Object.keys(product).map((categoryName, index) => {
                    return (
                        <Card key={index} className={classes.root}>
                            <CardActionArea onClick={() => cardClickHandler(categoryName)}>
                                <CardMedia
                                    className={classes.media}
                                    image={product[categoryName][0].image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })
            ) : (
                <CircularProgress size={24} />
            )}
        </div>

    )
}






export default ProductsContainer;
