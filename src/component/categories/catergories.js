

import React from 'react';
import { connect } from 'react-redux';
import {makeReq , reset} from '../../store/action.js';

const Category = (props) => {
  <section className="">

  </section>;
};

const mapStateToProps = (state) => ({
  category : state.categories,
  product : state.products,
});

const mapDispatchToProps = { makeReq , reset};

export default connect(mapStateToProps , mapDispatchToProps)(Category);