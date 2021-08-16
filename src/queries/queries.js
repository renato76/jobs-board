import { gql } from '@apollo/client'

export const ALL_JOBS_QUERY = gql`
  query ALL_JOBS_QUERY {
    jobs {
      id
      title
      company {
        name
        websiteUrl
      }
      cities {
        name
      }
      description
    }
  }
`