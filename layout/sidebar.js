import { FiArrowRight } from 'react-icons/fi';
import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">UPCOMING EVENTS</h3>
            <DayPicker />
            <div className="sidebar-blogs">
                <div className="sidebar-blogs-box">
                    <h3 className="sidebar-blogs-box-title">
                        {' '}
                        <a href="#/"> Event name goes here</a>
                    </h3>
                    <p className="sidebar-blogs-box-content">
                        Additional details for event go here. Additional details
                        for event go here. Additional details for event go here.
                    </p>
                    <p className="sidebar-blogs-box-time">7:00pm -6:00am</p>
                </div>
                <div className="sidebar-blogs-box">
                    <h3 className="sidebar-blogs-box-title">
                        {' '}
                        <a href="#/"> Event name goes here</a>
                    </h3>
                    <p className="sidebar-blogs-box-content">
                        Additional details for event go here. Additional details
                        for event go here. Additional details for event go here.
                    </p>
                    <p className="sidebar-blogs-box-time">7:00pm -6:00am</p>
                </div>
                <div className="sidebar-blogs-box">
                    <h3 className="sidebar-blogs-box-title">
                        {' '}
                        <a href="#/"> Event name goes here</a>
                    </h3>
                    <p className="sidebar-blogs-box-content">
                        Additional details for event go here. Additional details
                        for event go here. Additional details for event go here.
                    </p>
                    <p className="sidebar-blogs-box-time">7:00pm -6:00am</p>
                </div>

                <button>
                    See more event
                    <FiArrowRight />
                </button>
            </div>
        </div>
    );
};
export default Sidebar;
