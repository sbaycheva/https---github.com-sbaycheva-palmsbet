import React from "react";

const PageTemplate = ({ title, content, headingColor }) => {
    return (
        <div
            style={{
                maxWidth: "700px",
                margin: "30px auto",
            }}
        >
            <h1
                style={{
                    margin: "30px auto",
                    textAlign: "center",
                    fontSize: "32px",
                }}
            >
                {title}
            </h1>
            <div>
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

export default PageTemplate;
