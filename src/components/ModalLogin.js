import React, { useEffect, useRef, useState } from 'react';
import Login from './Login';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

const ModalLogin = () => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <>
      <MDBBtn style={{zIndex: 20}} onClick={() => setOpen(!open)}>Login</MDBBtn>
      <MDBModal open={open} setOpen={setOpen} tabIndex={-1}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Inicia sesión</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setOpen(!open)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Login />
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn type='button' onClick={() => setOpen(!open)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default ModalLogin;