// src/components/Button.js
import React from 'react';
import './css/Button.css';
import './style/SubscriptionPage.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CollectionsIcon from '@mui/icons-material/Collections';
import InfoIcon from '@mui/icons-material/Info';


const child1 = 'image/child1.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};




const GridComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="grid-container h-75 col-lg-6 col-md-6">
      <div className="card ">
        <h3>Donate Leftovers</h3>
        <p>Feed Your Extras</p>
        <div className="button">
          <div className="button-icon"> <SoupKitchenIcon /> </div>
          <div className="button-title">Donate Now</div>
        </div>
      </div>




      <div className="card">
        <h3>Be A Pro Donor</h3>
        <p>Subscribe Monthly</p>
        <div className="button" onClick={handleOpen}>
          <div className="button-icon"><CreditCardIcon /></div>
          <div className="button-title">Subscribe</div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="subscription-page col-lg-12">
              <img
                src={child1}
                alt="Children playing together"
                className="subscription-image img"
              />
              <div className="subscription-details text-left">
                <h2 className="font-weight-bold">Be A Subscriber</h2>
                <p>Supscription Offers:</p>
                <ul>
                  <li>Education expences of 1 child.</li>
                  <li>20 meals per month.</li>
                  <li>1 set of clothes.</li>
                </ul>
                <button className="mt-5 btn btn-primary btn-block">Subscribe Now</button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>



      <div className="card">
        <h3>Gallery Of Happiness</h3>
        <p>Take a Look</p>
        <div className="button">
          <div className="button-icon"><CollectionsIcon /></div>
          <div className="button-title">View</div>
        </div>
      </div>
      <div className="card">
        <h3><br />About Us</h3>
        <p>Know More</p>
        <div className="button">
          <div className="button-icon"><InfoIcon /></div>
          <div className="button-title">View</div>
        </div>
      </div>
    </div>
  );
};
export default GridComponent;
