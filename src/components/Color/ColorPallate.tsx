import { Box } from '@mui/system';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SwatchesPicker } from 'react-color';
import { PrimaryButton } from '../Button';
import { Modal } from '../Modal';
import { BaseColorProps } from '../types/color';

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
    <Box className="flex border-[1px] border-black h-[23px]">
      <div ref={colorBackgroundEl} className="brand-color border-r-[1px] border-black  w-[20px] h-full"></div>
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
      <div className="flex items-center justify-between mb-[20px]">
        <div className="flex-70 flex justify-between">
          <h4 className="text-bold sm:flex-100 sm:mb-[10px]">・{colorLabel}</h4>
          <SplitColor color={color} onChange={onChange} />
        </div>
        <PrimaryButton label="選択する" size="sm" onClick={handleModalOpen} />
      </div>
      <Modal open={modalOpen} handleClose={handleModalClose}>
        <SwatchesPicker color={color} onChange={handleChange} />
      </Modal>
    </>
  );
};

export default ColorPallate;
