"use client"
import React from 'react';
import {LocationContext} from '../LocationContext.client';
import UserPosts from './UserPosts.server';

let meter = 1;

function Counter() {
  let state = React.useState(0);
  let count = state[0]
  let setCount = state[1]
  React.useEffect(() => {
    let id = setInterval(() => setCount((prev) => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return <div>Current count is: {count}</div>;
}

export default function ClientApp(props) {
  console.log('___client___ClientApp__render');
  let ref = React.useRef();
  let state = React.useContext(LocationContext);
  let query = state[0]
  let goToServerAgain = state[1]

  return (
    <div style={{padding: 24, border: '1px dashed blue'}}>
      <input ref={ref} defaultValue={query.id} placeholder="userId" />
      <button onClick={() => goToServerAgain({id: ref.current.value})}>
        Fetch user details
      </button>
      <hr />
      <Counter />
      <hr />
      <UserPosts user={props.user} />
      <hr />
      <details>
        <pre>{JSON.stringify(props, null, 4)}</pre>
      </details>
    </div>
  );
}
