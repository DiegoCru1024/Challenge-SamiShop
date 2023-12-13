import ReactDOM from 'react-dom/client'
import './globalStyles.scss'
import App from './App'
import React from "react";
import {ApolloProvider} from "@apollo/client";
import clientInstance from "./graphQL/graphClient";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <ApolloProvider client={clientInstance}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/:characterId'} element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </ApolloProvider>
)