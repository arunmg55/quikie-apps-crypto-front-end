import React, { useEffect, useState } from "react";
import request from "utils/request";
import Layout from "components/Layout";
import Modal from "components/Modal";

import Table from "components/Table";

const View = () => {
  const [savedData, setSavedData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [isVisible, setIsvisible] = useState(false);

  useEffect(() => {
    loadSavedDetails();
  }, []);

  const loadSavedDetails = async () => {
    setLoading(true);
    try {
      let { data, status } = await request.get(`/companies`);
      if (status >= 200 && status < 300) {
        setSavedData(data?.companies || []);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const deleteHandler = (companyDetails) => {
    setIsvisible(true);
    setSelectedData(companyDetails);
  };

  const onModalClick = async (userResponse) => {
    setIsvisible(false);
    if (userResponse) {
      setLoading(true);
      try {
        let { status } = await request.delete(
          `/companies/${selectedData?._id}`
        );
        if (status >= 200 && status < 300) {
          loadSavedDetails();
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
    setSelectedData("");
  };

  return (
    <>
      <Table
        tableTitle="SAVED DATA TABLE"
        type="view"
        data={savedData}
        onDelete={deleteHandler}
        loading={isLoading}
      />
      {isVisible && (
        <Modal
          message={`Are you sure want to delete ${selectedData?.name || ""}?`}
          onClick={onModalClick}
        />
      )}
    </>
  );
};

export default Layout(View);
