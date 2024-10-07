import React from 'react';
import './Notices.css';

function Notices({ name, img }) {
    return (
        <div className="notice-section">

            <div className="all-notices">
                <h2 className='notice-head'>Important Notices</h2>

                <ul>
                    <li className="notice">This is an announcement or a notice about something </li>
                    <li className="notice">This is an announcement or a notice about something </li>
                    <li className="notice">This is an announcement or a notice about something </li>
                    <li className="notice">This is an announcement or a notice about something </li>
                    <li className="notice">This is an announcement or a notice about something </li>
                    <li className="notice">This is an announcement or a notice about something </li>
                    <li className="notice">This is an announcement or a notice about something </li>
                    <li className="notice">This is an announcement or a notice about something </li>
                </ul>
            </div>

            <div className="all-notices">
                <h2 className='notice-head'>Upcoming Events</h2>

                <ul>
                    <li className="notice">Some upcoming event information. Date Time venue etc </li>
                    <li className="notice">Some upcoming event information. Date Time venue etc </li>
                    <li className="notice">Some upcoming event information. Date Time venue etc </li>
                    <li className="notice">Some upcoming event information. Date Time venue etc </li>
                    <li className="notice">Some upcoming event information. Date Time venue etc </li>
                    <li className="notice">Some upcoming event information. Date Time venue etc </li>
                    <li className="notice">Some upcoming event information. Date Time venue etc </li>
                    <li className="notice">Some upcoming event information. Date Time venue etc </li>
                </ul>
            </div>




        </div>





    );
}

export default Notices;
