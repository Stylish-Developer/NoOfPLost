"use client";

import { usePostsStore, useUserStore } from "@/store";
import { FC, useEffect, useState } from "react";

type NoOfPostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
}[][];

const PostDetails: FC = () => {
  const users = useUserStore((state) => state.users);
  const posts = usePostsStore((state) => state.posts);

  const usersAsync = useUserStore((state) => state.usersAsync);
  const postsAsync = usePostsStore((state) => state.postsAsync);

  const [noOfPosts, setNoOfPosts] = useState<NoOfPostsType>([]);

  useEffect(() => {
    postsAsync();
    usersAsync();
  }, []);

  const calc = () => {
    let arr: {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[][] = [];
    users.forEach((user) => {
      const numberOfPosts = posts.filter((post) => post.userId === user.id);
      arr.push(numberOfPosts);
    });
    setNoOfPosts(arr);
  };

  return (
    <div className="w-full h-screen flex-1 bg-white p-10">
      <p>Post Details</p>
      <button
        onClick={calc}
        className="w-[120px] h-[40px] bg-stone-800 rounded-xl text-white my-6"
      >
        click
      </button>
      <div className="flex flex-row w-full justify-evenly items-center">
        <table className="border border-slate-600	mb-10 border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-600	 border-collapse p-1 bg-green-500">
                ID:
              </th>
              <th className="border border-slate-600	 border-collapse p-1 bg-green-500">
                Name:
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td className="border border-slate-600	 border-collapse p-1">
                  {item.id}
                </td>
                <td className="border border-slate-600	 border-collapse p-1">
                  {item.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="border border-slate-600	mb-10 border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-600	 border-collapse p-1 bg-green-500">
                Name
              </th>
              <th className="border border-slate-600	 border-collapse p-1 bg-green-500">
                No Of Posts
              </th>
            </tr>
          </thead>
          <tbody>
            {noOfPosts.map(
              (
                item: {
                  userId: number;
                  id: number;
                  title: string;
                  body: string;
                }[],
                i: number
              ) => (
                <tr key={i}>
                  <td className="border border-slate-600	 border-collapse p-1">
                    {users[i].name}
                  </td>
                  <td className="border border-slate-600	 border-collapse p-1">
                    {item.length}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <table className="border border-slate-600	mb-10 border-collapse">
        <thead>
          <tr>
            <th className="border border-slate-600	 border-collapse p-1 bg-green-500">
              Name:
            </th>
            <th className="border border-slate-600	 border-collapse p-1 bg-green-500">
              No Of Posts:
            </th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.id}>
              <td className="border border-slate-600	 border-collapse p-1">
                {item.id}
              </td>
              <td className="border border-slate-600	 border-collapse p-1">
                {item.title}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostDetails;
