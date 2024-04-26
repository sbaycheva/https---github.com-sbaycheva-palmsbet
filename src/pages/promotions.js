import React from "react";
import Home from "@/app/page";
import styled from "styled-components";

const Promotions = () => {
    const promoItems = [
        {
            image: "/images/promo.jpg",
            text: "Всяка сряда от 16:00 до 18:00 ч. на мин. залог 3 лв.",
            button: "Виж повече",
        },
        {
            image: "/images/promo.jpg",
            text: "Всяка сряда от 16:00 до 18:00 ч. на мин. залог 3 лв.",
            button: "Виж повече",
        },
        {
            image: "/images/promo.jpg",
            text: "Всяка сряда от 16:00 до 18:00 ч. на мин. залог 3 лв.",
            button: "Виж повече",
        },
    ];

    return (
        <Home>
            <Banner></Banner>
            <Categories>
                <StyledCategory href="/">Начало</StyledCategory>
                <StyledCategory href="/">Този месец</StyledCategory>
                <StyledCategory href="/">Казино</StyledCategory>
                <StyledCategory href="/">Live Казино</StyledCategory>
                <StyledCategory href="/">Спорт</StyledCategory>
                <StyledCategory href="/">Начални бонуси</StyledCategory>
            </Categories>
            <Promo>
                <PromoTitle>Начало</PromoTitle>
                <PromoSection>
                    {promoItems.map((item, index) => (
                        <PromoItem key={index} {...item} />
                    ))}
                </PromoSection>
            </Promo>

            <Promo>
                <PromoTitle>Този месец</PromoTitle>
                <PromoSection>
                    {promoItems.map((item, index) => (
                        <PromoItem key={index} {...item} />
                    ))}
                </PromoSection>
            </Promo>
        </Home>
    );
};

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background: url("/images/banner.jpg") no-repeat center center;
    background-size: cover;
`;

const Categories = styled.div`
    width: 100%;
    background: #15171d;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const StyledCategory = styled.div`
    padding: 10px 15px;
    color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #46484e;
    cursor: pointer;
    &:hover {
        background-color: #2d2e31;
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
        width: 100%;
    }
`;

const Promo = styled.div`
    margin: 20px 0;
    padding: 0 20px;
`;

const PromoTitle = styled.h2`
    color: #333;
    @media screen and (max-width: 500px) {
        font-size: 18px;
    }
`;

const PromoSection = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin-top: 20px;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

const PromoItem = ({ image, text, button }) => {
    return (
        <StyledPromoItem>
            <PromoImage src={image} alt={text} />
            <PromoContainer>
                <PromoText>{text}</PromoText>
                <PromoButton>{button}</PromoButton>
            </PromoContainer>
        </StyledPromoItem>
    );
};

const StyledPromoItem = styled.div`
    background: #232833;
    border-radius: 10px;
    overflow: hidden;
`;

const PromoImage = styled.img`
    width: 100%;
`;

const PromoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    gap: 10px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const PromoText = styled.p`
    color: #999;
    font-size: 14px;
`;

const PromoButton = styled.button`
    padding: 5px 10px;
    background-color: #ff4500;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    min-width: 100px;
    &:hover {
        background-color: #ef5f2a;
    }

    @media screen and (max-width: 768px) {
        margin-top: 10px;
        padding: 10px;
    }
`;

export default Promotions;
