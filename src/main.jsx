import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import productCategories from './page/Home-page/Product-categories'
import HomePageComponent from './page/Home-page/HomePageComponent.jsx'
import SHOP_DATA from './page/Shop-page/ShopData.js'
import ShopPage from './page/Shop-page/ShopPage.jsx'
import SignUpIn from './page/SignUpIn/SignUp.jsx'

const productCat = productCategories.sections;
const shopItems = SHOP_DATA;
const router = createBrowserRouter([{
  path:'/',
  element:<HomePageComponent productCategories={productCat}/>
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
  element:<SignUpIn />
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />  */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
