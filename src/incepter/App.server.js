"use server"
import ClientApp from './Client.client';
import { fetch } from 'react-fetch';

export default function App(props) {
  console.log('___server___App__render')
  let user = fetch(
    `https://jsonplaceholder.typicode.com/users/${props.current}`
  ).json();

  return (
    <div style={{padding: 24, border: '1px dashed red'}}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <span>User ID {user.id}</span>
        <span>Username {user.username}</span>
        <span>email {user.email}</span>
      </div>
      <ClientApp user={user} />
      <hr />
      <h6>
        Server Time: {new Date(Date.now())}
      </h6>
    </div>
  );
}
