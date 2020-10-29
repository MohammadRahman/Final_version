import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../../components/button/CustomButton";
import Description from "../../components/form-input/Description";
import FormInput from "../../components/form-input/FormInput";

const ReportPage = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  //   const onChangeHandler = (e) => {
  //     setTitle(e.target.value);
  //   };
  const dispatch = useDispatch();

  // create Report
  const reportCreate = useSelector((state) => state.createReport);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(reportCreate);
  };
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div className="card" style={{ height: "400px", width: "500px" }}>
        <div className="card-header text-center">
          <h3>Create New Report</h3>
        </div>
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <FormInput
              type="text"
              label="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Description
              type="text"
              label="Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <CustomButton type="submit">Submit</CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
