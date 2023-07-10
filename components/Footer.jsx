import React from "react";
import FooterComponent from "./FooterComponent";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const footerData = [
        {
            categoryName: "Contact & support",
            contents: [
                {
                    label: "Monday to Friday",
                    href: "/buy",
                },
                {
                    label: "08:00 to 12:00",
                    href: "/sell",
                },
                {
                    label: "13:30 to 17:00",
                    href: "/favorites",
                },
            ],
        },
        {
            categoryName: "Car market",
            contents: [
                {
                    label: "Buy",
                    href: "/buy",
                },
                {
                    label: "Sell",
                    href: "/sell",
                },
                {
                    label: "Your favorites",
                    href: "/favorites",
                },
                {
                    label: "Your listings",
                    href: "/listings",
                },
                {
                    label: "All models",
                    href: "/makes-models",
                },
            ],
        },
        {
            categoryName: "Get informed",
            contents: [
                {
                    label: "Verified",
                    href: "/verified",
                },
                {
                    label: "Buyer protection",
                    href: "/buyer-protection",
                },
                {
                    label: "Price check",
                    href: "/price-check",
                },
                {
                    label: "FAQ",
                    href: "/faq",
                },
                {
                    label: "Guide",
                    href: "/guide",
                },
            ],
        },
        {
            categoryName: "For dealers",
            contents: [
                {
                    label: "Dealer portal",
                    href: "/dealer-portal",
                },
                {
                    label: "Registration",
                    href: "/registration",
                },
                {
                    label: "News",
                    href: "/news",
                },
                {
                    label: "Insertion rules",
                    href: "/insertion-rules",
                },
            ],
        },
        {
            categoryName: "Company",
            contents: [
                {
                    label: "Team",
                    href: "/team",
                },
                {
                    label: "Jobs",
                    href: "/jobs",
                },
                {
                    label: "Terms",
                    href: "/terms",
                },
                {
                    label: "Privacy",
                    href: "/privacy",
                },
                {
                    label: "Privacy settings",
                    href: "/privacy-settings",
                },
                {
                    label: "Legal notice",
                    href: "/legal-notice",
                },
            ],
        },
    ];

    return (
        <div className="footer-wrapper">
            <div className="footer-category-wrapper">
                {footerData.map((category, index) => (
                    <FooterComponent key={index} category={category} />
                ))}
            </div>
            <div className="rights-reserved">
                <p>PRONADJI SVOJ MOTOR ©2023 All rights reserved</p>
                <div className="icon-wrapper">
                    <a href="https://www.facebook.com">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
