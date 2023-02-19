import React, { useState,useEffect } from "react";
import {
  useNavigate,
  useLocation,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import { JobFilter } from "./Assets/JobFilterOption";
import JobList from "./JobList";

export default function Job() {
  const navigate = useNavigate();
  const location = useLocation();


// ------------------------------------------------------>
  function removeElement(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
 
  let cType = location.state ? location.state.cType : [];
  let wMode = location.state ? location.state.wMode : [];
  let edu = location.state ? location.state.edu : [];
  let loc = location.state ? location.state.loc : [];
  let role = location.state ? location.state.role : [];

  const handleCheckboxChange = (checked, value, list, nav) => {
    let param;
    let newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set("q", "filter");
    if (checked) {
      list.push(value);
    } else {
      removeElement(list, value);
    }
    param = list.join(",");
    newSearchParams.delete(nav);
    newSearchParams.append(nav, param);
    navigate(`/job?${createSearchParams(newSearchParams)}`, {
      state: { cType, wMode, edu, loc, role },
    });
    console.log(list, loc, cType, wMode);
  };

  const handleTypeCheckboxChange = (e) => {
    handleCheckboxChange(e.target.checked, e.target.value, cType, "type");
  };
  const handleRoleCheckboxChange = (e) => {
    handleCheckboxChange(e.target.checked, e.target.value, role, "role");
  };
  const handleModeCheckboxChange = (e) => {
    handleCheckboxChange(e.target.checked, e.target.value, wMode, "wmode");
  };
  const handleEduCheckboxChange = (e) => {
    handleCheckboxChange(e.target.checked, e.target.value, edu, "e");
  };
  const handleLocationCheckboxChange = (e) => {
    handleCheckboxChange(e.target.checked, e.target.value, loc, "location");
  };
  return (
    <main style={{display:'flex'}}>
      <section className="filter-cn">
        <h2>Job Filter</h2>

        <form className="type-form">
          <label>{JobFilter[0].filterTitle}</label>
          {JobFilter[0].filterOption.map((opt,index) => {
            const { label, value } = opt;
            let valueChecked = value.toString()
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  value={value}
                  onChange={handleTypeCheckboxChange}
                  name={JobFilter[0].filterTitle}
                  checked={cType.includes(valueChecked)}
                ></input>
                <label>{label}</label>
              </div>
            );
          })}
        </form>

        <form className="work-mode-form">
          <label>{JobFilter[1].filterTitle}</label>
          {JobFilter[1].filterOption.map((opt,index) => {
            const { label, value } = opt;
            let valueChecked = value.toString()
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  value={value}
                  onChange={handleModeCheckboxChange}
                  name={JobFilter[1].filterTitle}
                  checked={wMode.includes(valueChecked)}
                ></input>
                <label>{label}</label>
              </div>
            );
          })}
        </form>

        <form className="education-form">
          <label>{JobFilter[2].filterTitle}</label>
          {JobFilter[2].filterOption.map((opt,index) => {
            const { label, value } = opt;
            let valueChecked = value.toString()
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  value={value}
                  onChange={handleEduCheckboxChange}
                  name={JobFilter[2].filterTitle}
                  checked={edu.includes(valueChecked)}
                ></input>
                <label>{label}</label>
              </div>
            );
          })}
        </form>

        <form className="location-form">
          <label>{JobFilter[3].filterTitle}</label>
          {JobFilter[3].filterOption.map((opt,index) => {
            const { label, value } = opt;
            let valueChecked = value.toString()
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  value={value}
                  onChange={handleLocationCheckboxChange}
                  name={JobFilter[3].filterTitle}
                  checked={loc.includes(valueChecked)}
                ></input>
                <label>{label}</label>
              </div>
            );
          })}
        </form>

        <form className="role-form">
          <label>{JobFilter[4].filterTitle}</label>
          {JobFilter[4].filterOption.map((opt,index) => {
            const { label, value } = opt;
            let valueChecked = value.toString()
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  value={value}
                  onChange={handleRoleCheckboxChange}
                  name={JobFilter[4].filterTitle}
                  checked={role.includes(valueChecked)}
                ></input>
                <label>{label}</label>
              </div>
            );
          })}
        </form>

      </section>
      <section className="job-cn">
        <JobList/>
      </section>
    </main>
  );
}
