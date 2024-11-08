import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import productCategories from './page/Home-page/Product-categories'
import HomePageComponent from './page/Home-page/HomePageComponent.jsx'
import SHOP_DATA from './page/Shop-page/ShopData.js'
import ShopPage from './page/Shop-page/ShopPage.jsx'
import AuthenticactionConatainer from './page/Auth/AuthenticactionConatainer.jsx'
import { Provider } from 'react-redux'
import store from './store/Store.js'

// const productCat = productCategories.sections;
const shopItems = SHOP_DATA;
const router = createBrowserRouter([{
  path:'/',
  element:<HomePageComponent />
},
{
  path:'/about',
  element:<div>About Page</div>
},
{
  path:'/shop',
  element:<ShopPage shopItems={shopItems}/>
},
{
  path:'/signin',
  element:<AuthenticactionConatainer/>
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />  */}
    <Provider store={store}> 
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
