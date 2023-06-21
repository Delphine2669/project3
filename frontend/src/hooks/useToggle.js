import { useState, useCallback } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    toggle,
    close,
    open,
  };
};

export default useToggle;
