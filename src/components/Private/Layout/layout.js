
import React, { Component, useState } from 'react';
import { Switch,Route } from 'react-router';
import PrivateNavbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import MyOrders from '../MyOrders/myorders';
import BuyFoods from '../BuyFoods/buyFoods';
import AddItem from '../AddItem/addItem';
import Chatbot from '../Chatbot/chatbot';
import Talktous from '../Talktous/Talktous';
import ReceipeSimilarity from '../components/Private/ReceipeSimilarity/ReceipeSimilarity';
import Review from '../components/Public/Review/Review';

const Layout = () => {

    const [sidebarexpand,setsidebarexpand] = useState();
    const setstyle = sidebarexpand ? "200px" : "52px";

    return ( 
        <div>
            <div>
                <PrivateNavbar></PrivateNavbar>
            </div>
            <div>
                <div style={{position:"relative"}}  > 
                    <Sidebar sendExpandedvalue={isExpanded=>setsidebarexpand(isExpanded)}></Sidebar>
                </div>
                <div style={{ marginLeft : setstyle }}>
                    <Switch>
                        <Route path="/myOrders" component={MyOrders}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path="/buyFoods" component={BuyFoods}>
                            <BuyFoods></BuyFoods>
                        </Route>
                        <Route path="/additem" component={AddItem}>
                            <AddItem></AddItem>
                        </Route>
                        <Route path="/chat" component={Chatbot}>
                            <Chatbot></Chatbot>
                        </Route>
                        <Route path="/talktous" component={Talktous}>
                            <Talktous></Talktous>
                        </Route>
                        <Route path="/review" component={Review}>
                            <Review></Review>
                        </Route>
                        <Route path="/recipesimilarity"  component={ReceipeSimilarity}  >
                            <ReceipeSimilarity></ReceipeSimilarity>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;