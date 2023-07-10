import React from "react";

const FooterComponent = ({ category }) => {
    return (
        <div className="footer-category footer-column">
            <h3 className="text-white font-bold footerColumn-entry">
                {category.categoryName}
            </h3>
            <ul>
                {category.contents.map((content, index) => (
                    <li key={index}>
                        <a
                            className="text-white font-bold footerColumn-entry"
                            href={content.href}
                        >
                            {content.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterComponent;
