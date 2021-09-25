import Image from 'next/image';
import { BaseImageProps } from '../types/image';

const TImage: React.FC<BaseImageProps> = ({ src, alt, width, height, align = 'center' }) => {
  return (
    <div className={`text-${align}`}>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default TImage;
