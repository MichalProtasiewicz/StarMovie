import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardButton from 'components/atoms/CardButton/CardButton';
import CrossIcon from 'assets/icons/cross.svg';

const StyledWrapper = styled.div`
  z-index: 9999;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ isVisible }) => (isVisible ? 'absolute' : 'none')};
  padding: 10px 30px 10px 30px;
  border: 5px solid ${({ theme }) => theme.blue};
  border-radius: 15px;
  height: 200px;
  width: 550px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
`;

const StyledCardButton = styled(CardButton)`
  position: absolute;
  top: -14px;
  left: 524px;
`;

const AlertModal = ({ isVisible, handleClose, children }) => {
  return (
    <StyledWrapper isVisible={isVisible}>
      <StyledCardButton
        icon={CrossIcon}
        addEventListener
        onClick={() => {
          handleClose();
        }}
      />
      {children}
    </StyledWrapper>
  );
};

AlertModal.propTypes = {
  isVisible: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

AlertModal.defaultProps = {
  isVisible: false,
};

export default AlertModal;
