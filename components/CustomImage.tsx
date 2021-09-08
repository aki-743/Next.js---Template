import Image from 'next/image';

type Props = {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
    align?: string;
};

const CustomImage: React.FC<Props> = ({ src, alt, width, height, align = 'center' }) => {
    return (
        <div className={`text-${align}`}>
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    );
};

export default CustomImage;
