import React, { useEffect } from "react";
import { Header, Menu } from "components";
import { useDispatch, useSelector } from "react-redux";
import { AppActions, AppDispatch, RootState } from "redux/store";
import { useNavigate } from "react-router-dom";
import { PATH } from "consts";

export const HeaderContainer: React.FC = () => {
  return <Header />;
};

export const MenuContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const token: string | null = useSelector(
    (state: RootState) => state.auth.token
  );
  function onSubmit(): void {
    dispatch(AppActions.auth.logOut());
    navigate(PATH.LOGIN);
  }
  useEffect(() => {
    if (token) {
      navigate(PATH.DASHBOARD);
    }
  },[token]);
  return <Menu onSubmit={onSubmit} token={token} />;
};
