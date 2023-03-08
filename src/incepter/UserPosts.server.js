"use server"
import React from 'react';
import {fetch} from 'react-fetch';

// filename: UserPosts.server.js
export default function UserPosts({user}) {
  let posts = fetch(
    `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
  ).json();
  console.log('___server___UserPosts__render', posts)

  return (
    <div>
      <ul>
        <summary>User {user.username} has the following posts</summary>
        {posts.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
