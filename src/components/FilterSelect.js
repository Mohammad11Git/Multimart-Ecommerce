import React from "react";
import { products } from "../utils/products";
import Select from "react-select";
const options = [
  { value: "sofa", label: "Sofa" },
  { value: "chair", label: "Chair" },
  { value: "watch", label: "Watch" },
  { value: "mobile", label: "Mobile" },
  { value: "wireless", label: "Wireless" },
];
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#0f3460",
    color: "white",
    borderRadius: "5px",
    border: "none",
    boxShadow: "none",
    width: "240px",
    height: "40px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0f3460" : "white",
    color: state.isSelected ? "white" : "#0f3460",
    "&:hover": {
      backgroundColor: "#0f3460",
      color: "white",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
};

const FilterSelect = ({ setFilterList }) => {
  const handleChange = (selectOptions) => {
    setFilterList(
      products.filter((item) => item.category === selectOptions.value)
    );
  };
  return (
    <div className="px-4 lg:px-24 ">
      <Select 
        options={options}
        defaultValue={{ value: "", label: "Filter By Category" }}
        styles={customStyles}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilterSelect;
