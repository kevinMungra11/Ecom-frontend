import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './core/Home';
import Signup from './user/Signup';
import Signin from './user/Signin';
import AdminRoute from './auth/helper/AdminRoutes';
import PrivateRoutes from './auth/helper/PrivateRoutes';
import AdminDashBoard from './user/AdminDashBoard';
import UserDashBoard from './user/UserDashBoard';
import AddCategory from './admin/AddCategory';

const Routes = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component = {Home}/>
            <Route path='/signup' exact component = {Signup}/>
            <Route path='/signin' exact component = {Signin}/>
            <PrivateRoutes path='/user/dashboard' exact component = {UserDashBoard}/>
            <AdminRoute path='/admin/dashboard' exact component = {AdminDashBoard}/>
            <AdminRoute path='/admin/create/category' exact component = {AddCategory}/>
        </Switch>
    </BrowserRouter>
  )
}

export default Routes;