import gql from "graphql-tag";
export default gql`
 query getSerive {
  Max_web_service {
    description
    id
    src
    src_hover
    title
  }
}

`;
