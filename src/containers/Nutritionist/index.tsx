import React, { useEffect } from 'react';
import { Nutritionist } from 'components'
import { UserModel } from 'models';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { enqueueSnackbar } from 'notistack';

export const NutritionistContainer: React.FC = () => {
  const user: UserModel | null = useSelector(
    (state: RootState) => state.auth.user
  );
  useEffect(() => {
    if(user){
    enqueueSnackbar(`${user?.name} signed in successfully!`, {
      variant: "success",
      autoHideDuration: 3000,
      style: { fontFamily: "Urbanist", borderRadius: "12px" },
    });
  }
  },[user])
  return <Nutritionist />;
};
