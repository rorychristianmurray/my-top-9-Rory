// Dependencies
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// Objects
import Data from "./Data";
import Loader from "react-loader-spinner";
import { fetchApi } from "../actions";

// Styles

const DataList = props => {
  useEffect(() => {
    props.fetchApi();
  }, []);
  const user = props.user;
  const categories = props.data[user].categories;
  const passedSetName = props.passedSetName;

  if (props.isFetching) {
    return <Loader type="Puff" color="#00BFFF" height="100" width="100" />;
  }

  return (
    <section className="category-list">
      <div id="card-container">
        {categories.map(cate => (
          <Data
            key={cate.id}
            categoryTitle={cate.categoryTitle}
            topNine={cate.topNine}
            passedSetName={cate.passedSetName}
          />
        ))}{" "}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.data
  };
};
export default connect(
  mapStateToProps,
  { fetchApi }
)(DataList);
