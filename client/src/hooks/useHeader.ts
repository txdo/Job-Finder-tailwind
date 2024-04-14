const useHeader = (): {
  toggleMenu: (
    isMenuOpen: boolean,
    setIsClosing: (value: boolean) => void,
    setIsMenuOpen: (value: boolean) => void
  ) => void;
} => {
  const toggleMenu = (
    isMenuOpen: boolean,
    setIsClosing: (value: boolean) => void,
    setIsMenuOpen: (value: boolean) => void
  ) => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
      return;
    }

    setIsMenuOpen(true);
  };

  return { toggleMenu };
};

export default useHeader;
