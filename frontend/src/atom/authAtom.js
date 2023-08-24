import { atomWithStorage, createJSONStorage } from "jotai/utils";

const KEY = "USER_DATA";

const storage = createJSONStorage(() => sessionStorage);
export const userDataAtom = atomWithStorage(
  KEY,
  sessionStorage.getItem(KEY),
  storage
);
