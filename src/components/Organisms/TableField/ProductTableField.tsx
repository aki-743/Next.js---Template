import { DefaultPaper } from '../../Atoms/Paper';
import { DefaultToolbar } from '../../Atoms/Toolbar';
import { SearchBox } from '../../Atoms/SearchBox';
import { PrimaryButton } from '../../Atoms';
import { ProductTable } from '../Table';
import { ProductTableProps } from '../../Atoms/Table';
import styles from './ProductTableField.module.scss';

/** 商品追加のフォーム */
const ProductTableField = (props: ProductTableProps) => {
  return (
    <div className={styles.root}>
      <DefaultPaper>
        <DefaultToolbar>
          <SearchBox name={props.name} value={props.value} onChange={props.onChange} />
          <PrimaryButton label={props.label} type={props.type} size={props.size} startIcon={props.startIcon} onClick={props.onClick} />
        </DefaultToolbar>
        <ProductTable {...props} />
      </DefaultPaper>
    </div>
  );
};

export default ProductTableField;
