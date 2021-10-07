import Image from 'next/image';
import { BaseImageProps } from '../../types/Image/props';

const DefaultImage: React.FC<BaseImageProps> = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default DefaultImage;
