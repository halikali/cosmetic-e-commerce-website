export const changeTextProtocol = (url) => {
  return url.replace(/https/i, "http");
};

export const scrollToTop = () => {
  window.scroll(0, 0);
};
