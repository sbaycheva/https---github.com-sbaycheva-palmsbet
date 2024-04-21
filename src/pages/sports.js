import React from "react";
import Home from "@/app/page";
import pageData from "@/components/data/demo.json";
import PageTemplate from "../app/template";

const Sports = () => {
    return (
        <Home>
            <PageTemplate title={pageData.sports.title} content={pageData.sports.content} />;
        </Home>
    );
};

export default Sports;
