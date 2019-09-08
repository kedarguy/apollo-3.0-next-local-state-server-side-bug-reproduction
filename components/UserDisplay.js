import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import NestedOtherDisplay from "./NestedOtherDisplay";

const GET_DATA = gql`
  {
    someField @client
    user @client {
      name
      id
    }
  }
`;

export default function UserDisplay() {
  const { data, loading, error } = useQuery(GET_DATA);
  console.log("loading from use query: ", loading);
  console.log("error from use query: ", error);
  console.log("data from use query: ", data);

  const {
    someField,
    user: { name, id }
  } = data;

  return (
    <div>
      <div>llll</div>
      <div>{someField}</div>
      <div>name: {name}</div>
      <div>id: {id}</div>
      <div>end</div>
      <NestedOtherDisplay />
    </div>
  );
}
