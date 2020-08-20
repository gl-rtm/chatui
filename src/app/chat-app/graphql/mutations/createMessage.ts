import gql from 'graphql-tag';

export default gql`
  mutation createMessage($id: ID!, $content: String, $conversationId: ID!, $createdAt: String!, $image: String) {
    createMessage(id: $id, content: $content, conversationId: $conversationId, createdAt: $createdAt, image: $image){
      __typename
      conversationId
      createdAt
      id
      sender
      content
      isSent
      image
    }
  }
`;
