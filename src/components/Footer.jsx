import React from "react";

const Footer = ({ tasks }) => {
    return (
        <p className="message">
            {tasks.length < 1 ? "You Have No Tasks!" : `Tasks: ${tasks.length}`}
        </p>
    );
};

export default Footer;
