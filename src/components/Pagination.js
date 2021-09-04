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

  // only create the Pagination once we have data
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
              href="#"
              active={number === currentPage ? 'active' : ''}>
              {number}
            </PageLinks>
          </Listitem>
        ))}
      </UnorderedList>
    </PaginationStyles>
  )
}

export default Pagination

const PaginationStyles = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const Listitem = styled.div`
  cursor: pointer;
`

const PageLinks = styled.a`
  text-decoration: none;
  color: ${font => font.active? 'white' : '#1887cc'};
  background: ${link => link.active ? '#1887cc' : 'white'};
  padding: 3px 10px;
  border: 1px solid #a5a5a56c;
`



