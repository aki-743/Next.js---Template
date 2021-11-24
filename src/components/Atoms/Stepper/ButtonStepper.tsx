import { Step, StepButton, Stepper } from '@mui/material';
import { ButtonStepperProps } from '.';
import styles from './Stepper.module.scss';

const ButtonStepper = ({ activeStep, steps, completed, handleStep }: ButtonStepperProps) => {
  return (
    <Stepper className={styles.root} nonLinear alternativeLabel activeStep={activeStep}>
      {steps.map((label, index) => (
        <Step key={label} completed={completed[index]}>
          <StepButton color="inherit" onClick={() => handleStep(index)}>
            {label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
  );
};

export default ButtonStepper;
