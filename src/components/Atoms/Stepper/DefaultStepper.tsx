import { Step, StepLabel, Stepper } from '@mui/material';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseStepperProps } from '.';
import styles from './Stepper.module.scss';

const DefaultStepper = forwardRef<HTMLDivElement, BaseStepperProps>(function render({ id, className, activeStep, steps, completed }, ref) {
  return (
    <Stepper id={id} className={classNames(styles.root, className)} ref={ref} nonLinear alternativeLabel activeStep={activeStep}>
      {steps.map((label, index) => (
        <Step key={label} completed={completed[index]}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
});

export default DefaultStepper;
