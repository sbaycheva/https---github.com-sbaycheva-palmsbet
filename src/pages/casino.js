import React from "react";
import Home from "@/app/page";
import styled from "styled-components";

const Casino = () => {

    return (
        <Home>
            <Container>
                <StyledSportsPage>
                    <Sidebar></Sidebar>
                    <General>
                        <Categories>
                            <StyledCategory href="/" className="active">Начало</StyledCategory>
                            <StyledCategory href="/">Този месец</StyledCategory>
                            <StyledCategory href="/">Казино</StyledCategory>
                            <StyledCategory href="/">Live Казино</StyledCategory>
                            <StyledCategory href="/">Спорт</StyledCategory>
                            <StyledCategory href="/">Начални бонуси</StyledCategory>
                        </Categories>
                        <CasinoList>
                            <CasinoListItem className="first">
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                            <CasinoListItem>
                                <ButtonContainer>
                                    <ButtonPlay>Играй</ButtonPlay>
                                    <ButtonFree>Безплатна игра</ButtonFree>
                                </ButtonContainer>
                            </CasinoListItem>
                        </CasinoList>
                    </General>
                </StyledSportsPage>
            </Container>
        </Home>
    );
};

const Container = styled.div`
    background-color: #1c212b;
    min-height: 100vh;
`;

const StyledSportsPage = styled.div`
    display: flex;
    justify-content: space-between;
`;

const General = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CasinoList = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    grid-template-rows: auto auto repeat(1, 1fr);

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    max-width: 90%;
`;

const ButtonPlay = styled.button`
    cursor: pointer;
    touch-action: manipulation;
    padding: 6px 8px;
    margin: 5px 0;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    color: rgb(51, 59, 72);
    background: rgb(0, 236, 255);
    text-shadow: rgba(13, 13, 13, 0) 0px 0px 0px;
    box-shadow: rgba(13, 13, 13, 0) 0px 0px 0px 0px, rgba(13, 13, 13, 0) 0px 0px 0px 0px inset;
    border-width: 0px;
    border-style: solid;
    border-radius: 4px;
    border-color: rgb(0, 236, 255);
    max-width: 100%;
    width: 100%;
    display: none;
`;

const ButtonFree = styled(ButtonPlay)`
    background: #1c212b;
    color: #fff;
    border: 1px solid rgb(0, 236, 255);
`;

const CasinoListItem = styled.div`
    padding: 80px 10px;
    text-align: center;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: url("/images/promo.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;

    &.first {
        grid-row: span 2;
    }

    &:hover {
        ${ButtonPlay} {
            display: block;
        }
    }
`;

const Categories = styled.div`
    width: 100%;
    background: #15171d;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 50px;
    @media screen and (max-width: 650px) {
        flex-direction: column;
        height: auto;
    }
`;

const StyledCategory = styled.div`
    padding: 8px 15px;
    color: #fff;
    font-size: 12px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #46484e;
    cursor: pointer;
    &.active {
        background-color: #2d2e31;
    }
    &:hover {
        background-color: #2d2e31;
    }

    @media screen and (max-width: 768px) {
        font-size: 12px;
        width: 100%;
    }
`;

const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background: #0e1116;
    padding: 10px;
    min-height: 100vh;
`;

const StyledSearchBox = styled.div`
    margin-bottom: 20px;
    display: flex;
    position: relative;
    width: 100%;
`;

const StyledInput = styled.input`
    width: 100%;
    outline: none;
    margin: 0px;
    appearance: none;
    background: #e6f3ff14;
    box-shadow: rgba(13, 13, 13, 0) 0px 0px 0px 0px inset;
    color: rgba(230, 243, 255, 0.54);
    border: 1px solid rgba(230, 243, 255, 0.08);
    border-radius: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 16px;
    padding: 10px 12px;
    &:focus,
    &:hover {
        color: rgba(230, 243, 255, 0.87);
        background: rgb(41, 49, 61);
        border-color: rgb(0, 115, 251);
    }
`;

const StyledButton = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    background: #e6f3ff14;
    color: rgba(230, 243, 255, 0.54);
    border: 1px solid rgba(230, 243, 255, 0.08);
    border-radius: 6px;
    font-size: 14px;
    padding: 10px 15px;
    cursor: pointer;
    &:hover {
        background-color: #1c212b;
    }
`;

const SidebarList = styled.div`
    background-color: #2e333b;
    width: 100%;
    border: 1px solid #38404a;
    border-radius: 10px;
    list-style: none;
`;

const SidebarLink = styled.a`
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #1c212b;
    }
    &:not(:last-child) {
        border-bottom: 1px solid #1c212b;
    }
`;

const Checkbox = ({ defaultChecked, ...rest }) => {
    return <StyledCheckbox type="checkbox" defaultChecked={defaultChecked} {...rest} />;
};

const StyledCheckbox = styled.input`
    position: relative;
    width: 16px;
    height: 16px;
    appearance: none;
    border: 2px solid #fff;
    border-radius: 3px;
    outline: none;
    cursor: pointer;

    &:checked {
        background-color: #fff;
    }

    &:checked::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background: url("/images/check.png") no-repeat center center;
        background-size: contain;
    }
`;

const LabelText = styled.span`
    margin-right: 5px;
`;

const Input = styled.input`
    display: none;
`;

const Sidebar = () => {
    return (
        <StyledSidebar>
            <StyledSearchBox>
                <StyledInput type="text" placeholder="Търсене..." />
                <StyledButton>S</StyledButton>
            </StyledSearchBox>
            <SidebarList>
                <SidebarLink href="/">Всички</SidebarLink>
                <SidebarLink href="/">Ново</SidebarLink>
                <SidebarLink href="/">
                    <LabelText>Слот</LabelText>
                    <Checkbox defaultChecked />
                </SidebarLink>
                <SidebarLink href="/">Препоръчани</SidebarLink>
            </SidebarList>
        </StyledSidebar>
    );
};

export default Casino;
