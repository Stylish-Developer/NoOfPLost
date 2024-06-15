import { PlistApi } from "@/service";
import { create } from "zustand";

export type PostsStore = {
  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];
  postsAsync: () => void;
};

const usePostsStore = create<PostsStore>((set) => ({
  posts: [
    {
      userId: 0,
      id: 0,
      title: "",
      body: "",
    },
  ],
  postsAsync: () => {
    PlistApi("/posts")
      .then((resData) => resData.data)
      .then((res) => set({ posts: res }))
      .catch((err) => console.log(err));
  },
}));

export default usePostsStore;
