import { Box } from '@mui/system';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SwatchesPicker } from 'react-color';
import { PrimaryButton } from '../../Atoms/Button';
import { DefaultModal } from '../../Atoms/Modal';
import { BaseColorProps } from './color';

/** カラーとカラーコードの表示 */
const SplitColor: React.FC<BaseColorProps> = ({ color, onChange }) => {
  const colorBackgroundEl = useRef(null);

  const inputBackground = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    colorBackgroundEl.current.style.background = color;
  }, [color]);

  return (
    <Box className="flex border-black h-[23px] border-[1px]">
      <div ref={colorBackgroundEl} className="h-full border-black w-[20px] border-r-[1px] brand-color"></div>
      <div className="h-full">
        <input type="text" value={color} onChange={inputBackground} />
      </div>
    </Box>
  );
};

const ColorPallate: React.FC<BaseColorProps> = ({ color, colorLabel, onChange }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (color) => {
    onChange(color.hex);
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-[20px]">
        <div className="flex justify-between flex-70">
          <h4 className="sm:mb-[10px] text-bold sm:flex-100">・{colorLabel}</h4>
          <SplitColor color={color} onChange={onChange} />
        </div>
        <PrimaryButton label="選択する" size="sm" onClick={handleModalOpen} />
      </div>
      <DefaultModal open={modalOpen} handleClose={handleModalClose}>
        <SwatchesPicker color={color} onChange={handleChange} />
      </DefaultModal>
    </>
  );
};

export default ColorPallate;
