import * as React from 'react';
import './style/ani.css';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

// BasicRating Component
const BasicRating = ({ value, onChange }) => {
    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    onChange(newValue);
                }}
            />
        </Box>
    );
};

// Revbox Component
const Revbox = ({ usernm, rev, initialRating }) => {
    const [ratingValue, setRatingValue] = React.useState(initialRating);

    const handleRatingChange = (newValue) => {
        setRatingValue(newValue);
    };

    return (
        <div  className="mt-3 shadow d-flex flex-column review">
            <div className="user-rate col-lg-4 d-flex mt-2 flex-row">
                <span className="rev-user mt-1 mr-5 ml-2 h6"> {usernm} </span>
                <div className="rating ml-4">
                    <BasicRating value={ratingValue} onChange={handleRatingChange} />
                </div>
            </div>
            <div className="align-items-left ml-4 mb-2 text-left">
                <span className="revtext text-left">
                    {rev}
                </span>
            </div>
        </div>
    );
};

// Reviews Component
const Reviews = () => {
    return (
        <>
            <Revbox usernm={'Arun'} rev={'good people with good intention'} initialRating={5} />
         
            <Revbox usernm={'Asha'} rev={'erewr wrwerw ewrwer loved their service towards the society'} initialRating={4} />
            <Revbox usernm={'Akram'} rev={'always appreciate your contribution'} initialRating={5} />
        </>
    );
};

// Reviewbox Component
const Reviewbox = () => {
    return (
        <>
            <Reviews />
        </>
    );
};

// Render the Reviewbox component into the root div
ReactDOM.render(<Reviewbox />, document.getElementById('root'));

export { BasicRating, Revbox, Reviews, Reviewbox };
export default Reviewbox;
