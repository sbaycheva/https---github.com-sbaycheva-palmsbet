import React from "react";
import Home from "@/app/page";
import pageData from "@/components/data/demo.json";
import PageTemplate from "../app/template";

const Casino = () => {
    return (
        <Home>
            <PageTemplate title={pageData.casino.title} content={pageData.casino.content} />;
        </Home>
    );
};

export default Casino;
