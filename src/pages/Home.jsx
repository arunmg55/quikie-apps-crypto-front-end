import React, { useEffect, useState } from "react";
import Layout from "components/Layout";

import Table from "components/Table";
import request from "utils/request";

const Home = () => {
  const [stockData, setStockData] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadStockDetails();
    loadSavedDetails();
  }, []);

  const loadStockDetails = async (currentPage = page) => {
    setLoading(true);
    setPage(currentPage);
    try {
      let { data, status } = await request.get(
        `/currencies/ticker?page=${currentPage}`
      );
      if (status >= 200 && status < 300) {
        if (data?.companies.length) {
          setStockData(data?.companies);
        }
        setTotal(data.total);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const loadSavedDetails = async () => {
    try {
      let { data, status } = await request.get(`/companies`);
      if (status >= 200 && status < 300) {
        setSavedData(data?.companies || []);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const saveDataHandler = async (companyDetails) => {
    setLoading(true);
    try {
      let companyInfo = {
        symbol: companyDetails?.symbol,
        name: companyDetails?.name,
        price: companyDetails?.price,
        market_cap: companyDetails?.market_cap,
        currency: companyDetails?.currency,
      };
      let { status } = await request.post(`/companies`, companyInfo);
      if (status >= 200 && status < 300) {
        loadSavedDetails();
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <Table
      data={stockData}
      savedData={savedData}
      onSave={saveDataHandler}
      loadStockDetails={loadStockDetails}
      loading={isLoading}
      total={total}
      page={page}
    />
  );
};

export default Layout(Home);
