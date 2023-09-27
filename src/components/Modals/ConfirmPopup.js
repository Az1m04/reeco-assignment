import React from "react";
import styled from "styled-components";
import { updateStatus } from "../../ReduxStore/Slices/OrderSlice";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { BsX } from "react-icons/bs";

const ConfirmBody = styled.div`
  padding: 20px 0;
`;

const ConfirmModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const ConfirmHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ConfirmTitle = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;

const ConfirmClose = styled.a`
  cursor: pointer;
`;

const ConfirmBottom = styled.div`
    margin-top: 5px;
    gap: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const CustomButton = styled.button`
  border: none;
  color:#4a4d56;
  font-weight: 700;
  background: none;
  height: 35px;
`;

const PopCloseIcon = styled(BsX)`
  color: black;
`;

const ConfirmPopup = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow({
      value: false,
      data: null,
    });
  };
  return (
    <ConfirmModal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ConfirmHead>
        <ConfirmTitle>Missing product</ConfirmTitle>
        <ConfirmClose>
          <PopCloseIcon onClick={handleClose} size={26} />
        </ConfirmClose>
      </ConfirmHead>
      <ConfirmBody>
        Is "Chicken Breasts Fillets, Boneless..." urgent?
      </ConfirmBody>
      <ConfirmBottom>
        <CustomButton
          onClick={() => {
            dispatch(
              updateStatus({
                type: "orders/updateStatus",
                order: { ...show.data, status: "missing" },
                itemID: show.data.id,
              })
            );
            setTimeout(() => {
              handleClose();
            }, 10);
          }}
        >
          No
        </CustomButton>
        <CustomButton
          onClick={() => {
            dispatch(
              updateStatus({
                type: "orders/updateStatus",
                order: {
                  ...show.data,
                  status: "missing-urgent",
                },
                itemID: show.data.id,
              })
            );
            setTimeout(() => {
              handleClose();
            }, 10);
          }}
        >
          Yes
        </CustomButton>
      </ConfirmBottom>
    </ConfirmModal>
  );
};

export default ConfirmPopup;
