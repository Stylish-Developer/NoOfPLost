import { URL } from "@/constants";
import axios from "axios";

export const PlistApi = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application.json",
  },
});
