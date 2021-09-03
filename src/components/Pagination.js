/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

const Pagination = ({ jobsPerPage, totalJobs, currentPage, setCurrentPage }) => {
  // console.log('Pagination Props >>>', props)

  // create page numbers using a for loop
  const pageNumbers = []
  for (let i  = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i)
  }
  console.log(totalJobs)
  // const previous = () => setCurrentPage(currentPage - 1)
  // const next = () => setCurrentPage(currentPage + 1)

  // only do the Pagination once we have data
  if (pageNumbers.length === 0) {
    return <></>
  }

  return (
    <PaginationStyles>
      <UnorderedList>
        {pageNumbers.map(number => (
          <Listitem key={number}>
            <PageLinks 
              onClick={() => setCurrentPage(number)}
              href="#">
              {number}
            </PageLinks>
          </Listitem>
        ))}
      </UnorderedList>
    </PaginationStyles>
  )
}

export default Pagination

const UnorderedList = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const Listitem = styled.div`
  border: 1px solid #a5a5a56c;
  padding: 8px;
  cursor: pointer;
`
const PaginationStyles = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const PageLinks = styled.a`
  text-decoration: none;
  padding: 3px;
  color: #1887cc;
  background-color: white;
  padding: 5px 10px;
`



