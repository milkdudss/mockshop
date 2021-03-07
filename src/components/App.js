import React, { useEffect } from 'react'
import ProductsContainer from './CategoriesListReact'
import SelectedCategoryContainer from './SelectedCategory'
import SelectedProductContainer from './SelectedProduct'
import OverLay from './OverLay'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../actions/productsAction'
import { goHome, searchString } from '../actions/appActions'
import { AppBar, Toolbar, IconButton, Typography, InputBase,
   fade, makeStyles } from "@material-ui/core"
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'

   const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



function MainComponents() {
  const dispatch = useDispatch()
  
  useEffect(() => dispatch(fetchProducts()), [dispatch]);
  
  const activePage = useSelector(state => state.app.activePage)
  const inputedSearch = useSelector(state => state.app.inputedString)
  
const renderPage = () => {
  switch (activePage) {
    case "Home":
      return <ProductsContainer />;
    case "CategoryPage":
      return <SelectedCategoryContainer />;
    case "ProductPage":
      return <SelectedProductContainer />;

  }
};



  return (
  <div>
    {inputedSearch.length > 0 ? 
     <OverLay />
    :
      renderPage()
    
}
  </div>
    );
}


const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const homeClicker = () => {
    dispatch(goHome());
  }

  const inputedSearch = useSelector(state => state.app.inputedString)

  const searchHandler = (evt) => {
    const e = evt.target.value;    
   
    
    dispatch(searchString(e))
   
  }




  return (
    
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <HomeIcon onClick={() => homeClicker()} />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            MockShop
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={inputedSearch}
              onChange={searchHandler}
              
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
    
  )
}

function App() {
  return (
    <>
      <NavBar />
      <MainComponents />
    </>
  )

};

export default App;
