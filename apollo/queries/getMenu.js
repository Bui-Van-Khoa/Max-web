import gql from "graphql-tag";
export default gql`
  query getMenu {
    Max_web_menu(order_by: { path: desc }) {
      name
      path
    }
  }
`;
