import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CartProvider } from './context/CartContext/CartProvider'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Cart } from './components/Cart/Cart'
import { Footer } from './components/Footer/Footer'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import {Login} from './components/Login/Login'
import { MainLayout } from './layouts/Mainlayout'
import { AdminLayout } from './layouts/Adminlayout'

function App() {
  return (
    <>
    <BrowserRouter> 
    <CartProvider>      
      <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ItemListContainer titulo={"Bienvenidos"}/>} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer titulo={"Productos por categoría"}/>} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />    
            <Route path="/carrito" element={<Cart />} />
          </Route>

          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element = {<Login />} />
            <Route path="alta-productos" element={<RutaProtegida><ProductFormContainer /></RutaProtegida> } />                    
          </Route>
      </Routes>        
      {/*Se deja afuera del Routes lo que no queremos que se vuelva a renderizar*/}
      <Footer />
    </CartProvider>
    </BrowserRouter>   
    </>
  )
}

export default App
