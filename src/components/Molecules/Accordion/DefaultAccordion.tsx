import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { forwardRef } from 'react';
import { BaseAccordionProps } from '.';
import { ExpandMoreIcon } from '../../Atoms/Icon';
import { DefaultTypography } from '../../Atoms/Typography';

const DefaultAccordion = forwardRef<HTMLDivElement, BaseAccordionProps>(function render(
  { id, className, primarySummary, secondarySummary, details, disabled },
  ref,
) {
  return (
    <Accordion id={id} className={className} ref={ref} disabled={disabled}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <DefaultTypography className="w-1/3">{primarySummary}</DefaultTypography>
        <DefaultTypography className="text-gray-400">{secondarySummary}</DefaultTypography>
      </AccordionSummary>
      <AccordionDetails>
        <DefaultTypography>{details}</DefaultTypography>
      </AccordionDetails>
    </Accordion>
  );
});

export default DefaultAccordion;
