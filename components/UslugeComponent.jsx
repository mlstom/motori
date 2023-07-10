import React from "react";

const UslugeComponent = ({
    imageUrl,
    icon: Icon1,
    iconText,
    headerText,
    mainText,
}) => {
    return (
        <div className="usluge-component hover:opacity-80">
            <a href="">
                <div className="usluge-icon-wrapper">
                    <Icon1 size={32} /> <p>{iconText}</p>
                </div>

                <img src={"/images/" + imageUrl} alt="" />
            </a>

            <div className="usluge-text-wrapper">
                <h3>{headerText}</h3>
                <p>{mainText}</p>
            </div>
        </div>
    );
};

export default UslugeComponent;
