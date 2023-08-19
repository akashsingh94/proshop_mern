import { atom } from "jotai";

export const toasterAtom = atom({
  open: false,
  severity: "success",
  message: "",
});
