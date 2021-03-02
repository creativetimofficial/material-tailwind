import React from 'react';
import Pagination from './Pagination';
import PaginationItem from './PaginationItem';
import Icon from 'components/Icon/Icon';
import 'ripple/ripple';

const PaginationExample = () => {
  return (
    <Pagination>
      <PaginationItem href="#last" data-md-ripple-dark={true}>
        <Icon name="keyboard_arrow_left" size="md" />
      </PaginationItem>
      <PaginationItem color="pink" href="#1" data-md-ripple-light={true}>
        1
      </PaginationItem>
      <PaginationItem href="#2" data-md-ripple-dark={true}>
        2
      </PaginationItem>
      <PaginationItem href="#3" data-md-ripple-dark={true}>
        3
      </PaginationItem>
      <PaginationItem href="#4" data-md-ripple-dark={true}>
        4
      </PaginationItem>
      <PaginationItem href="#5" data-md-ripple-dark={true}>
        5
      </PaginationItem>
      <PaginationItem href="#last" data-md-ripple-dark={true}>
        <Icon name="keyboard_arrow_right" size="md" />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationExample;
