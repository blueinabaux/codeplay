import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Navigate
} from "react-router-dom";
import Layout from './layout/Layout.jsx';
import LandingPage from './pages/LandingPage.jsx';


import {Provider} from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

import NotFoundPage from './pages/NotFoundPage.jsx';
import CodingPage from './pages/CodingPage.jsx';
import { ChakraProvider } from '@chakra-ui/react';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<LandingPage/>} />
        {/* <Route path='/problems' element={<ProblemPage/>} /> */}
        
        <Route path='*' element={<NotFoundPage/>} />
        <Route path='/codingpage' element={<CodingPage/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
     </PersistGate>
   </Provider>
)
