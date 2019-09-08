import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_DATA = gql`
  {
    allPosts {
      id
      title
      votes
      url
      createdAt
    }
    someField @client
    user @client {
      name
      id
    }
  }
`;

export default function NestedOtherDisplay() {
  const { data, loading, error } = useQuery(GET_DATA);
  if (loading) return <div>loading.......</div>;
  if (error) return <div>error.......</div>;
  console.log("loading from use query: ", loading);
  console.log("error from use query: ", error);
  console.log("data from use query: ", data);

  const {
    allPosts,
    someField,
    user: { name, id }
  } = data;

  return (
    <div>
      <h1>other field</h1>
      <div>otherField</div>
      <div>{someField}</div>
      <div>name: {name}</div>
      <div>id: {id}</div>
      <div>there are  {allPosts.length} posts</div>
      <div>end</div>
    </div>
  );
}
