import React from "react";
import Todo from "./Todo";

export default function List(props) {
  let list = props.tasks.map((el, i) => {
    return <Todo key={i} task={el} />;
  });
  return <div>{list}</div>;
}
