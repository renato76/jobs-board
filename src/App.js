import React from 'react'
import { useQuery } from '@apollo/client'
import { ALL_JOBS_QUERY } from './graphql/queries'
import JobsIndex from './components/JobsIndex'

const App = () => {
  const { loading, error, data } = useQuery(ALL_JOBS_QUERY);

  if (loading) return <p>Loading...</p>

  if (error) return <p>Oops there was an error!</p>

  return (
    <>
      <JobsIndex jobs={data} />
    </>
  )
}

export default App;
