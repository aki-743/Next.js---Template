import { DefaultTooltip, ExplainUITooltipProps } from '../../Atoms/Tooltip';
import { InformationIcon } from '../../Atoms/Icon';
import styles from './ExplainUITooltip.module.scss';

const ExplainUITooltip = (props: ExplainUITooltipProps) => {
  return (
    <div className={styles.root}>
      <DefaultTooltip title={props.title} arrow={true}>
        <InformationIcon size={20} />
      </DefaultTooltip>
    </div>
  );
};

export default ExplainUITooltip;
