import React, {lazy, Suspense, useState} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Progress from "./components/Progress";
import Header from "./components/Header";
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

const MarketingAppLazy = lazy(()=> import('./components/MarketingApp'));
// const AuthAppLazy = lazy(()=>import('./components/AuthApp')); temporarry



const generateClassName = createGenerateClassName({
    productionPrefix:'co'
})

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return(
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={()=> setIsSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            {/* <Route path="/auth">
                                <AuthAppLazy onSignIn={()=> setIsSignedIn(true)} />
                            </Route> */}
                            <Route path="/" component={MarketingAppLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    )
}