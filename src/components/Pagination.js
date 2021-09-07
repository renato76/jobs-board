/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import PageNumbers from './PageNumbers'

const Pagination = React.memo(({ jobsPerPage, totalJobs, currentPage, setCurrentPage }) => {
  const pageNumbers = []
  for (let i  = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i)
  }

  if (pageNumbers.length === 0) {
    return <></>
  }

  const Previous = ({ previous, disabled }) => {
    const onClick = (event) => disabled? event.preventDefault() : previous()

    return (
      <Listitem>
        <PageLinks
          onClick={onClick}
        >Prev 
        {/* could change the above to a chevron from font awesome */}
        </PageLinks>
      </Listitem>
    )
  }

  const Next = ({ next, disabled }) => {
    const onClick = (event) => disabled? event.preventDefault() : next()

    return (
      <Listitem>
        <PageLinks
          onClick={onClick}
        >Next
        {/* could change the above to a chevron from font awesome */}
        </PageLinks>
      </Listitem>
    )
  }

  const previous = () => setCurrentPage(currentPage - 1)
  const next = () => setCurrentPage(currentPage + 1)

  return (
    <PaginationStyles>
      <UnorderedList>
        <Previous previous={previous} disabled={currentPage === 1} />
        <PageNumbers 
          pageNumbers={pageNumbers}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Next next={next} disabled={currentPage === pageNumbers.length} />
      </UnorderedList>
    </PaginationStyles>
  )
})

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
  padding: 0;
  margin: 5px 0 0 0;
`

export const Listitem = styled.div`
  cursor: pointer;
`

export const PageLinks = styled.a`
  text-decoration: none;
  color: ${font => font.active? 'white' : '#1887cc'};
  background: ${link => link.active ? '#1887cc' : 'white'};
  padding: 3px 10px;
  border: 1px solid #a5a5a56c;
  font-family: Quicksand;
  font-size: 13px;
`



