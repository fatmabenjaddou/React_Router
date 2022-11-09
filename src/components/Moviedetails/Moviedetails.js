import React from "react";
import { useParams } from "react-router-dom";

const Moviedetails = ({ data }) => {
  const obj = useParams();
  console.log(obj);
  return <div>{data.find((el) => el.id == obj.x).title}</div>;
};

export default Moviedetails;