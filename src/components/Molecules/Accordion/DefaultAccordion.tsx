import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { forwardRef } from 'react';
import { BaseAccordionProps } from '.';
import { DefaultDivider } from '../../Atoms/Divider';
import { ExpandMoreIcon } from '../../Atoms/Icon';
import { DefaultTypography } from '../../Atoms/Typography';

const DefaultAccordion = forwardRef<HTMLDivElement, BaseAccordionProps>(function render(
  { id, className, expanded, primarySummary, secondarySummary, details, disabled, onChange },
  ref,
) {
  return (
    <Accordion id={id} className={className} ref={ref} expanded={expanded} disabled={disabled} onChange={onChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <DefaultTypography className="w-1/3">{primarySummary}</DefaultTypography>
        <DefaultTypography className="text-gray-400">{secondarySummary}</DefaultTypography>
      </AccordionSummary>
      <DefaultDivider />
      <AccordionDetails>
        <DefaultTypography>{details}</DefaultTypography>
      </AccordionDetails>
    </Accordion>
  );
});

export default DefaultAccordion;
