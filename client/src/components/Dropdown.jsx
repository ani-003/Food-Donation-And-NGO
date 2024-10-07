import React, { useState, useEffect, useRef } from 'react'
import './style/Dropdown.css'
const user = 'image/user.png'
const edit = 'image/edit.png';
const inbox = 'image/envelope.png';
const settings = 'image/settings.png';
const help = 'image/question.png';
const logout = 'image/log-out.png';
const me = 'image/me.jpeg'

const Dropdown = () => {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    return (
        <div className="App">
            <div className='menucon' ref={menuRef}>
                <div className='menutrig' onClick={() => { setOpen(!open) }}>
                    
                    <img src={me}></img>
                </div>

                <div className={`dropmenu ${open ? 'active' : 'inactive'}`} >
                    <h3>Sayantan Pakhira<br /><span>#250096</span></h3>
                    <ul>
                        <DropdownItem img={user} text={"My Profile"} />
                        <DropdownItem img={edit} text={"Edit Profile"} />
                        <DropdownItem img={inbox} text={"Inbox"} />
                        <DropdownItem img={settings} text={"Settings"} />
                        <DropdownItem img={help} text={"Helps"} /> 
                        <DropdownItem img={help} text={"Be Volunteer"} /> 
                        <DropdownItem img={help} text={"Add NGO"} /> 
                        <DropdownItem img={logout} text={"Logout"} />
                       
                    </ul>
                </div>
            </div>
        </div>
    );
}

function DropdownItem(props) {
    return (
        <li className='dropdownItem'>
            <img src={props.img}></img>
            <a> {props.text} </a>
        </li>
    );
}


export default Dropdown;