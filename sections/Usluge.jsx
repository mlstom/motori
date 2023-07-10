import React from "react";
import UslugeComponent from "@/components/UslugeComponent";
import { MdVerifiedUser } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import { FaUmbrella } from "react-icons/fa";

const Usluge = () => {
    return (
        <div className="usluge-wrapper " style={{marginTop:'100px'}} >
            <UslugeComponent
                imageUrl="verified-car.png"
                icon={MdVerifiedUser}
                iconText="Verified"
                headerText="Find the best car"
                mainText="Verified offers contain extensive information about the vehicle, which is provided by dealers, who offer some additional services such as a guarantee."
            ></UslugeComponent>
            <UslugeComponent 
                imageUrl="buy-online-car.png"
                icon={AiFillCreditCard}
                iconText="Buy Online"
                headerText="Book a test drive or buy a car online"
                mainText="With our safe online purchase, buy your car from your couch with free home delivery and 7 days or 500 km right of return."
            ></UslugeComponent>
            <UslugeComponent
                imageUrl="buyer-protection.png"
                icon={FaUmbrella}
                iconText="Buyer Protection"
                headerText="Purchase in total safety"
                mainText="We protect your car purchase automatically at no extra cost with free legal protection insurance from AXA-ARAG."
            ></UslugeComponent>
        </div>
    );
};

export default Usluge;
