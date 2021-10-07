import { Box } from '@mui/system';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SwatchesPicker } from 'react-color';
import { PrimaryButton } from '../../Atoms/Button';
import { DefaultModal } from '../../Atoms/Modal';
import { BaseColorProps } from '../../types/Color/props';
import styles from './ColorPallate.module.scss';

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
    <Box className="flex h-[23px] border-[1px] border-black">
      <div ref={colorBackgroundEl} className="w-[20px] h-full border-r-[1px] border-black brand-color"></div>
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
      <div className={styles.root}>
        <div className={styles['label-wrapper']}>
          <h4 className={styles.label}>・{colorLabel}</h4>
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
