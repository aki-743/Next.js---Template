import { FormInputLabel } from '../../Atoms/Label';
import { DefaultSelect } from '../../Atoms/Select';
import { InputValidateError } from '../../Atoms/Error';
import { HelperText } from '../../Atoms/Text';
import { AutocompleteOption, TextAutocomplete, TextInput } from '../../Atoms/Input';
import { ChangeEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { BottomPopover } from '../../Atoms/Popover';
import { ExplainUITooltip } from '../../Molecules/Tooltip';
import axios from 'axios';
import { FieldErrors } from 'react-hook-form';
import { BlockDiv } from '../../Atoms/Div';

const POSTAL_INPUT_PLACEHOLDER = '郵便番号を入力（ハイフン無し）';
const POSTAL_INPUT_MAX_LENGTH = 7;
const POSTAL_AUTOCOMPLETE_INPUT_NO_OPTIONS_TEXT = '該当する住所がありません';

type Props = {
  /** id */
  id?: string;
  /** name */
  name?: string;
  /** ラベル */
  label?: string;
  /** value */
  value?: AutocompleteOption;
  /** Widthをフルにするか */
  fullWidth?: boolean;
  /** disabled */
  disabled?: boolean;
  /** inputのバリュー */
  inputValue?: string;
  /** ツールチップに表示するテキスト */
  tooltipTitle?: string;
  /** ヘルパーテキスト */
  helperText?: React.ReactNode;
  /** バリデーションのエラー状態 */
  errors?: FieldErrors;
  /** バリューが変更されたときの関数 */
  onChange?: (e: ChangeEvent<HTMLInputElement>, data?: any) => void;
};

const AddressAutocompleteSelectField = ({
  id,
  name,
  label,
  value,
  fullWidth,
  disabled,
  tooltipTitle,
  errors,
  helperText,
  onChange,
}: Props) => {
  /** Popoverのanchor */
  const [selectAnchorEl, setSelectAnchorEl] = useState(null);
  /** Selectのvalue */
  const [selectValue, setSelectValue] = useState('');
  /** Seletcのelements */
  const [selectElements, setSelectElements] = useState({});
  /** 銀行名の候補 */
  const [addressOptions, setAddressOptions] = useState([]);
  /** TextInputのバリュー */
  const [textValue, setTextValue] = useState('');
  /** PopoverのWidth */
  const selectRef = useRef(null);

  /** TextInputが変更されたときのコールバック関数 */
  const inputText = async (event: ChangeEvent<HTMLInputElement>) => {
    const postal = event.target.value;
    setTextValue(postal);
    const { data } = await axios.get('/api/address/postal', { params: { postal } });
    setAddressOptions(data.addresses);
  };

  /** PopoverのOpen操作 */
  const handlePopoverOpen = useCallback((event: MouseEvent<HTMLDivElement>) => {
    setSelectAnchorEl(event.currentTarget);
  }, []);

  /** PopoverのClose操作 */
  const handlePopoverClose = useCallback(() => {
    setSelectAnchorEl(null);
  }, []);

  useEffect(() => {
    if (value) {
      const newSelectElements = {};
      const label = value.label || '';
      newSelectElements[label] = label;
      setSelectElements({ ...newSelectElements });
      setSelectValue(label);
    }
  }, [value]);

  return (
    <div>
      <div>
        <FormInputLabel htmlFor={name} label={label} />
        {tooltipTitle && <ExplainUITooltip title={tooltipTitle} />}
      </div>
      <BlockDiv ref={selectRef} onClick={handlePopoverOpen}>
        <DefaultSelect
          id={id}
          name={name}
          label={label}
          value={selectValue}
          open={false}
          elements={selectElements}
          fullWidth={fullWidth}
          disabled={disabled}
        />
      </BlockDiv>
      <BottomPopover
        open={Boolean(selectAnchorEl)}
        anchorEl={selectAnchorEl}
        width={selectRef.current?.clientWidth}
        onClose={handlePopoverClose}
      >
        <TextAutocomplete
          options={addressOptions}
          value={selectValue}
          inputValue={textValue}
          getOptionLabel={(option) => option.title || ''}
          isOptionEqualToValue={(option) => option.title === selectValue}
          filterOptions={(x) => x}
          noOptionsText={POSTAL_AUTOCOMPLETE_INPUT_NO_OPTIONS_TEXT}
          renderInput={(params) => {
            return (
              <TextInput
                {...params}
                value={textValue}
                maxLength={POSTAL_INPUT_MAX_LENGTH}
                placeholder={POSTAL_INPUT_PLACEHOLDER}
                fullWidth={true}
                inputProps={params.inputProps}
                InputProps={params.InputProps}
                startAdornment="〒"
                onChange={inputText}
              />
            );
          }}
          onChange={(_, data) => onChange(data)}
        />
      </BottomPopover>
      <InputValidateError errors={errors} />
      {helperText && <HelperText text={helperText} />}
    </div>
  );
};

export default AddressAutocompleteSelectField;
