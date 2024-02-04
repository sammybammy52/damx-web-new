import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "./AuthContext";

const DataContext = createContext();

export default DataContext;

export const DataProvider = ({ children }) => {
  //states i want to keep
  const { token, shouldKick } = useAuthContext();

  //for pop up modals and other general continuos functions
  const [move, setMove] = useState(false);
  const [orders, setOrders] = useState(null);

  const handleMove = (bool) => {
    setMove(bool);
  };

  const handleOrders = (orders) => {
    setOrders(orders);
  } 

  const deleteRequest = (route, id) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}/${id}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        return true;
      })
      .catch((err) => {
        shouldKick(err);
        return false;
      });
  };

  const getRequest = (route) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        shouldKick(err);
        return false;
      });
  };

  const showRequest = (route, id) => {
    const url = `${import.meta.env.VITE_SERVER_URL}/${route}/${id}`;
    return axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        shouldKick(err);
        return false;
      });
  };

  const postRequest = (route, data) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_SERVER_URL}/${route}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (e) {
        console.log(e.response.data.message);
        shouldKick(e);
        return false;
      });
  };

  const postRequestFeedback = (route, data) => {
    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_SERVER_URL}/${route}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    return axios(config)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (e) {
        console.log(e.response.data.message);
        shouldKick(e);
        return e.response.data;
      });
  };

  

  let contextData = {
    move,
    handleMove,
    deleteRequest,
    getRequest,
    postRequest,
    postRequestFeedback,
    showRequest,
    orders,
    handleOrders
  };

  return (
    <DataContext.Provider value={contextData}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
