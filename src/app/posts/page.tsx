"use client";

import { useAppDispatch } from "@/store/store";
import axios, {  CancelTokenSource } from "axios";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

let cancelTokenSource: CancelTokenSource | null = null;
export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const dispatch = useAppDispatch();
    useEffect(() => {
      cancelTokenSource = axios.CancelToken.source();

      dispatch({ type: 'SET-APP-LOADING', payload: true });
      axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        cancelToken: cancelTokenSource.token
      })
      .then(response => {
        setPosts(response.data);
        dispatch({ type: 'SET-APP-LOADING', payload: false });
      })
      .catch(error =>{
        if (axios.isCancel(error)) {
          console.log('Request canceled');
        } else {
          console.error('Error fetching posts:', error);
        }
      });

      return () => {
        if (cancelTokenSource) {
          cancelTokenSource.cancel();
        }
      }
    }, []);

  return (
    <div className="flex flex-col items-center pt-12">
      <h1 className="text-4xl font-bold mb-4">Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

