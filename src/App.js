import React from 'react';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PostDetail from './components/PostDetail/PostDetail';
import NotFound from './components/NotFound/NotFound';


function App() {
    return (
        <div>        
            <Router>  
                <Header></Header>  
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>                        
                    <Route path="/detail/:postId">
                        <PostDetail></PostDetail>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>                        
                </Switch>
            </Router>
        </div>
    );
}

export default App;