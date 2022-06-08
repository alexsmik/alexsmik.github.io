import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'uimini';
import './assets/scss/main.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Navbar from "./Components/navbar/Navbar";
import PageContact from "./PageContact";
import Resume from "./Components/resume/Resume";
import {IntlProvider} from "react-intl";

ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<PageContact />} />
            {/*{routes.map(route =>*/}
            {/*    <Route*/}
            {/*        element={route.component}*/}
            {/*        path={route.path}*/}
            {/*        exact={route.exact}*/}
            {/*    />*/}
            {/*)}*/}
        </Routes>
    </BrowserRouter>
              ,
  document.getElementById('root')
);
