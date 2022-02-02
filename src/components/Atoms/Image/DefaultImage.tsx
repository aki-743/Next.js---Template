import Image from 'next/image';
import { BaseImageProps } from '.';

const DefaultImage: React.VFC<BaseImageProps> = ({ className, src, alt, width, height }) => {
  return <Image className={className} src={src} alt={alt} width={width} height={height} />;
};

export default DefaultImage;
