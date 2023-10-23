import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { PATH } from "consts";
// import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { store } from 'store';
import { SnackbarProvider } from "notistack";
import {
  FooterPage,
  HeaderPage,
  LogInPage,
  MenuPage,
  NotFoundPage,
  NutritionistPage,
  SignUpPage,
} from "pages";
import { Provider, useSelector } from "react-redux";
import { store, RootState, AppActions } from "./redux/store";

// const theme = useSelector((state: RootState) => state.theme);
if(localStorage.token) {
  store.dispatch(
    AppActions.auth.getMeRequest({      
    })
  )
}

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={4}>
        <BrowserRouter>
          <div className="flex flex-col bg-[#FAFDF2]">
            <HeaderPage />
            <MenuPage />
            <Routes>
              <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
              <Route path={PATH.DASHBOARD} element={<NutritionistPage />} />
              <Route path={PATH.SIGNUP} element={<SignUpPage />} />
              <Route path={PATH.LOGIN} element={<LogInPage />} />
            </Routes>
            <FooterPage />
          </div>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
