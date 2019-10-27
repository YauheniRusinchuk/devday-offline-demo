import gql from "graphql-tag"

export const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
    }
  }
`

export const POST_QUERY = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      title
      description
    }
  }
`