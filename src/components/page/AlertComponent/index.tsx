import AlertCard from "@src/components/common/AlertCard";
import CardComponet from "@src/components/common/CardComponent";
import CustomButton from "@src/components/common/CustomButton";
import StatusModal from "@src/components/common/StatusModal";
import { AlertType } from "@src/types/FormFields";
import React from "react";

interface AlertComponentProps {
  alertType?: AlertType;
  alertMessage: string[];
  toggleModal: boolean;
  setToggleModal: Function;
  heading: string;
}

const AlertComponent: React.FC<AlertComponentProps> = ({
  alertType,
  alertMessage,
  toggleModal,
  setToggleModal,
  heading,
}) => {
  return (
    <StatusModal
      toggleModal={toggleModal}
      handleClose={() => setToggleModal(false)}
    >
      <CardComponet>
        <AlertCard type={alertType} heading={heading} messages={alertMessage} />

        <CustomButton
          $buttonType="primary"
          $buttonSize="standard"
          onClick={() => {
            setToggleModal(false);
          }}
        >
          Close
        </CustomButton>
      </CardComponet>
    </StatusModal>
  );
};

export default AlertComponent;
