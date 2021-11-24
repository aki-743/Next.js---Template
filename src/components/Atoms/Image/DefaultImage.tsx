import Image from 'next/image';
import { BaseImageProps } from '.';

const DefaultImage: React.FC<BaseImageProps> = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default DefaultImage;
