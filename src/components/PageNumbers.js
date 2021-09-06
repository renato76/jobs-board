import React from 'react'
import { Listitem, PageLinks } from './Pagination'

const PageNumbers = ({ pageNumbers, currentPage, setCurrentPage }) => {
  return (
    <>
        {pageNumbers.map(number => (
          <Listitem key={number}>
            <PageLinks 
              onClick={() => setCurrentPage(number)}
              href="#"
              active={number === currentPage ? 'active' : ''}>
              {number}
            </PageLinks>
          </Listitem>
        ))}
    </>
  )
}

export default PageNumbers