import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Aggrement from "./Aggrement";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const steps = [
  "Personal Information",
  "Hostel Aggrement",
  "Pay Hostel Dues",
  "Confirmation",
];

export default function ReserveSeatStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const [isAgree, setisAgree] = React.useState("Agree");

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label} </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <br />
            {activeStep === 0 ? (
              <>
                <TextField
                  id="standard-basic"
                  sx={{ minWidth: "30rem", margin: "0.5rem" }}
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                />

                <TextField
                  id="standard-basic"
                  sx={{ minWidth: "30rem", margin: "0.5rem" }}
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                />
                <TextField
                  id="standard-basic"
                  sx={{ minWidth: "30rem", margin: "0.5rem" }}
                  label="Father Name"
                  name="fatherName"
                  variant="outlined"
                />
                <TextField
                  id="standard-basic"
                  sx={{ minWidth: "30rem", margin: "0.5rem" }}
                  label="CNIC"
                  placeholder="XXXXX-XXXXXXX-X"
                  name="cnic"
                  variant="outlined"
                />
                <TextField
                  id="standard-basic"
                  type="date"
                  sx={{ minWidth: "30rem", margin: "0.5rem" }}
                  label="DOB"
                  name="cnic"
                  variant="outlined"
                />

                <TextField
                  id="standard-basic"
                  sx={{ minWidth: "30rem", margin: "0.5rem" }}
                  label="Work Place"
                  name="workPlace"
                  variant="outlined"
                />

                <TextField
                  id="standard-basic"
                  sx={{ minWidth: "30rem", margin: "0.5rem" }}
                  label="Contact Phone"
                  name="contactPhone"
                  variant="outlined"
                />
              </>
            ) : activeStep === 1 ? (
              <>
                "this is the aggrement you can do any thing this is a random
                text where you can write your reviews on any topic which we
                relate. This is I know you know you can do it."
                <br />
                <Aggrement setisAgree={setisAgree} />
              </>
            ) : (
              ""
            )}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1
                ? "Finish"
                : isAgree === "Agree"
                ? "Next"
                : ""}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
