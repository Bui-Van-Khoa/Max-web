import { InMemoryCache } from "apollo-cache-inmemory";

export default function (context) {
  return {
    httpLinkOptions: {
      uri: "https://peaceful-fowl-85.hasura.app/v1/graphql",
      credentials: "same-origin",
      headers: {
        "x-hasura-admin-secret":
          "MdHt5uV7M0inliT5zoUtynbWD5dKobgxxO7CsCO24vB25zv7XxNNYbTQw3N31592",
      },
    },
    cache: new InMemoryCache(),
    wsEndpoint: 'ws://peaceful-fowl-85.hasura.app/v1/graphql',
  };
}
