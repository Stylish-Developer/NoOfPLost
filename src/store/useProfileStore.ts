import { create } from "zustand";

type ProfileStore = {
  name: string;
  updateName: () => void;
};

const useProfileStore = create<ProfileStore>((set) => ({
  name: "Gowtham",
  updateName: () => {
    set(() => ({ name: "Gowtham Sampathkumar" }));
  },
}));

export default useProfileStore;
