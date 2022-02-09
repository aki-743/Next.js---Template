import Image from 'next/image';
import { BaseImageProps } from '.';

const DefaultImage: React.VFC<BaseImageProps> = ({ id, className, src, alt, width, height }) => {
  return <Image id={id} className={className} src={src} alt={alt} width={width} height={height} />;
};

export default DefaultImage;
