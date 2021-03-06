import { MutableRefObject, useEffect } from "react";

export const useClickedOutside = (
  ref: MutableRefObject<any>,
  callback: () => void
) => {
  const checkIfClickedOutsideRef = (e: MouseEvent) => {
    if (ref.current) {
      if (e.target !== ref.current && !ref.current.contains(e.target))
        callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkIfClickedOutsideRef);
    return () =>
      document.removeEventListener("click", checkIfClickedOutsideRef);
  }, [ref]);
};
