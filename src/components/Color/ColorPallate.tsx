import { Box } from '@material-ui/core';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { SwatchesPicker } from 'react-color';
import { PrimaryButton } from '../Button';
import { Modal } from '../Modal';

type Props = {
  color: string;
  colorLabel: string;
  onChange: (color: string) => void;
};

const ColorPallate: React.FC<Props> = ({ color, colorLabel, onChange }) => {
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

  /** カラーとカラーコードの表示 */
  const SplitColor = useCallback(() => {
    const colorInputEl = useRef(null);
    const colorBackgroundEl = useRef(null);

    const inputBackground = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    useEffect(() => {
      colorBackgroundEl.current.style.background = color;
      colorInputEl.current.focus();
    }, [color]);

    return (
      <Box className="flex border-[1px] border-black h-[23px]">
        <div ref={colorBackgroundEl} className="brand-color border-r-[1px] border-black  w-[20px] h-full"></div>
        <div className="h-full">
          <input ref={colorInputEl} value={color} onChange={inputBackground} />
        </div>
      </Box>
    );
  }, [color]);

  return (
    <>
      <div className="flex items-center justify-between mb-[20px]">
        <div className="flex-70 flex justify-between">
          <h4 className="text-bold">{colorLabel}</h4>
          <SplitColor />
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
