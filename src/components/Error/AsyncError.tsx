import { GoAlert } from 'react-icons/go';

const AsyncError: React.FC = () => {
  return (
    <div className="p-[20px] text-xl flex items-center justify-center flex-wrap w-full">
      <GoAlert />
      <div className="text-center flex-100">
        <small>ネットワークエラーが発生しました</small>
      </div>
    </div>
  );
};

export default AsyncError;
