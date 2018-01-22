import React, { Component } from 'react';
import ReactPaginate from 'react-paginate'

const Paginate = ({pageNumber, onPaginateClick}) => (
        <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel={<a href="">...</a>}
            breakClassName="break-me"
            pageCount={pageNumber}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={onPaginateClick}
            containerClassName="pagination justify-content-center"
            subContainerClassName="page-item"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item page-link"
            nextClassName="page-item page-link"
            activeClassName="active"
          />
)

export default Paginate