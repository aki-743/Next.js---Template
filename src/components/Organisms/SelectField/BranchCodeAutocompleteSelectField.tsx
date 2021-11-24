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
import { InlineBlockDiv } from '../../Atoms/Div';

const BRANCH_NAME_INPUT_PLACEHOLDER = '支店名を入力';
const BRANCH_NAME_AUTOCOMPLETE_INPUT_NO_OPTIONS_TEXT = '該当する支店がありません';

type Props = {
  /** id */
  id?: string;
  /** name */
  name?: string;
  /** ラベル */
  label?: string;
  /** value */
  value?: AutocompleteOption;
  /** 銀行コード */
  code?: string;
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

const BranchCodeAutocompleteSelectField = ({
  id,
  name,
  label,
  value,
  code,
  fullWidth,
  disabled,
  onChange,
  tooltipTitle,
  errors,
  helperText,
}: Props) => {
  /** Popoverのanchor */
  const [selectAnchorEl, setSelectAnchorEl] = useState(null);
  /** Selectのvalue */
  const [selectValue, setSelectValue] = useState('');
  /** Select、Popoverのdisabled（銀行コードが入力されていな場合は機能しないようにするため）*/
  const [selectAndPopoverDisabled, setSelectAndPopoverDisabled] = useState(true);
  /** Seletcのelements */
  const [selectElements, setSelectElements] = useState({});
  /** 銀行名の候補 */
  const [branchNameOptions, setBranchNameOptions] = useState([]);
  /** TextInputのバリュー */
  const [textValue, setTextValue] = useState('');
  /** PopoverのWidth */
  const selectRef = useRef(null);

  /** TextInputが変更されたときのコールバック関数 */
  const inputText = async (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setTextValue(name);
    const { data } = await axios.get('/api/bank/branch', { params: { code, name } });
    setBranchNameOptions(data.branches);
  };

  /** PopoverのOpen操作 */
  const handlePopoverOpen = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (selectAndPopoverDisabled) {
        return;
      }
      setSelectAnchorEl(event.currentTarget);
    },
    [selectAndPopoverDisabled],
  );

  /** PopoverのClose操作 */
  const handlePopoverClose = useCallback(() => {
    setSelectAnchorEl(null);
  }, [selectAndPopoverDisabled]);

  // 銀行コードが入力されていれば
  useEffect(() => {
    setSelectAndPopoverDisabled(!Boolean(code));
  }, [code]);

  useEffect(() => {
    if (value) {
      const newSelectElements = {};
      const title = value.title || '';
      const label = value.label || '';
      newSelectElements[label] = label;
      setSelectElements({ ...newSelectElements });
      setSelectValue(label);
      setTextValue(title);
      setSelectAndPopoverDisabled(!Boolean(title.length));
    }
  }, [value]);

  return (
    <div>
      <div>
        <FormInputLabel htmlFor={name} label={label} />
        {tooltipTitle && <ExplainUITooltip title={tooltipTitle} />}
      </div>
      <InlineBlockDiv ref={selectRef} onClick={handlePopoverOpen}>
        <DefaultSelect
          id={id}
          name={name}
          label={label}
          value={selectValue}
          open={false}
          elements={selectElements}
          fullWidth={fullWidth}
          disabled={disabled || selectAndPopoverDisabled}
        />
      </InlineBlockDiv>
      <BottomPopover
        open={Boolean(selectAnchorEl)}
        anchorEl={selectAnchorEl}
        width={selectRef.current?.clientWidth}
        onClose={handlePopoverClose}
      >
        <TextAutocomplete
          options={branchNameOptions}
          value={selectValue}
          inputValue={textValue}
          getOptionLabel={(option) => option.title || ''}
          isOptionEqualToValue={(option) => option.title === selectValue}
          filterOptions={(x) => x}
          noOptionsText={BRANCH_NAME_AUTOCOMPLETE_INPUT_NO_OPTIONS_TEXT}
          renderInput={(params) => {
            return (
              <TextInput
                {...params}
                value={textValue}
                placeholder={BRANCH_NAME_INPUT_PLACEHOLDER}
                fullWidth={true}
                inputProps={params.inputProps}
                InputProps={params.InputProps}
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

export default BranchCodeAutocompleteSelectField;
