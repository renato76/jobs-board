import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_JOBS_QUERY } from './queries/queries'
import JobsIndex from './components/JobsIndex'

const App = () => {
  const { loading, error, data } = useQuery(ALL_JOBS_QUERY);
  console.log(data)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Oops there was an error!</p>
  
  return (
    <>
      <JobsIndex jobs={data} />
    </>
  )
}

export default App;
