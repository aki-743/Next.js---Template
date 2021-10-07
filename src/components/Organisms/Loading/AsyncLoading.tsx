import ReactLoading from 'react-loading';

/** dispatch以外の非同期処理中のローディング */
const AsyncLoading: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full text-xl p-[20px]">
      <ReactLoading color="gray" type="bars" />
      <div className="text-center flex-100">
        <small>読み込み中</small>
      </div>
    </div>
  );
};

export default AsyncLoading;
