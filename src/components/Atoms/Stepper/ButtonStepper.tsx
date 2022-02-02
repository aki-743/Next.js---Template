import { Step, StepButton, Stepper } from '@mui/material';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseStepperProps } from '.';
import styles from './Stepper.module.scss';

const ButtonStepper = forwardRef<HTMLDivElement, BaseStepperProps>(function render(
  { id, className, activeStep, steps, completed, handleStep },
  ref,
) {
  return (
    <Stepper id={id} className={classNames(styles.root, className)} ref={ref} nonLinear alternativeLabel activeStep={activeStep}>
      {steps.map((label, index) => (
        <Step key={label} completed={completed[index]}>
          <StepButton color="inherit" onClick={() => handleStep(index)}>
            {label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
});

export default ButtonStepper;
