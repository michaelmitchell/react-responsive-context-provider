//
import React, { PropTypes } from 'react';
import MultiQuery from 'react-responsive-multi-query';

//
import ContextProvider from './ContextProvider';

//
const MediaQuery = (props) => {
  const { children, query, ...moreProps } = props;

  // convert responsive query to multi query
  const multiQuery = query.map((v) => ({
    query: v.query,
    props: v.context
  }));

  return (
    <MultiQuery {...moreProps} query={multiQuery}>
      <ContextProvider>
        {children}
      </ContextProvider>
    </MultiQuery>
  );
};

MediaQuery.propTypes = {
  children: PropTypes.any.isRequired,
  query: PropTypes.any.isRequired
};

export default MediaQuery;
