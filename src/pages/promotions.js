import React from "react";
import Home from "@/app/page";
import pageData from "@/components/data/demo.json";
import PageTemplate from "../app/template";

const Promotions = () => {
    return (
        <Home>
            <PageTemplate title={pageData.promotions.title} content={pageData.promotions.content} />;
        </Home>
    );
};

export default Promotions;
