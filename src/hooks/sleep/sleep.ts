/**
 * 遅延関数
 * @return Promise
 * @param {number} mesc
 */
export const useSleep = () => {
  return (mesc: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, mesc);
    });
  };
};
