import { PlistApi } from "@/service";
import { create } from "zustand";

export type UserStore = {
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: number;
        lng: number;
      };
    };
    phone: number;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }[];
  usersAsync: () => void;
};

const useUserStore = create<UserStore>((set) => ({
  users: [
    {
      id: 0,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: 0,
          lng: 0,
        },
      },
      phone: 0,
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
  ],
  usersAsync: () => {
    PlistApi("/users")
      .then((resData) => resData.data)
      .then((res) => set({ users: res }))
      .catch((err) => console.log(err));
  },
}));

export default useUserStore;
