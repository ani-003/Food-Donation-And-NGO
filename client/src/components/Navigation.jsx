import React from 'react';
import Dropdown from './Dropdown';
import './style/Nav.css';
import './style/SubscriptionPage.css';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DonSignup from './Form';
import Signin from './Sign';

const child1 = 'image/child1.jpg';
const leflif = 'image/leflif.png';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

const Navigation = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
               
                    <div className="navbar-brand">
                        <img src={leflif} alt="Leftover Lifeline Logo" width="120" height="30" className="d-inline-block align-text-top" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={'/'} className={'nav-link active'}>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/Gallery'} className={'nav-link'}>Gallery</NavLink>
                            </li>
                        </ul>

                       
                    </div>

                    <div className='impo d-flex '>
                    
                     <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link" onClick={handleOpen} style={{ cursor: 'pointer' }}>SignUp</span>
                            </li>
                        </ul>
                        <Dropdown />
                    </div>
                
            </nav>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="subscription-page col-lg-12">
                    <div className="col-lg-5">
                        <img
                            src={child1}
                            alt="Children playing together"
                            className="subscription-image img"
                        /></div>
                        <div className="subscription-details col-lg-6 text-left">
                            <Signin />
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default Navigation;
