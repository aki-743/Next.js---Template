import ReactLoading from 'react-loading';

/** dispatch以外の非同期処理中のローディング */
const AsyncLoading: React.FC = () => {
  return (
    <div className="p-[20px] text-xl flex items-center justify-center flex-wrap w-full">
      <ReactLoading color="gray" type="bars" />
      <div className="text-center flex-100">
        <small>読み込み中</small>
      </div>
    </div>
  );
};

export default AsyncLoading;
