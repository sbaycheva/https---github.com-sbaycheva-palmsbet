import React from "react";
import Home from "@/app/page";
import styled from "styled-components";

const Sports = () => {
    const contentData = [
        { title: "Реал Сосиедад vs. Реал Мадрид", contentText: "Двата отбора да отбележат гол", contentPrevNum: 3.16, contentNextNum: 4.0 },
        { title: "Реал Сосиедад vs. Реал Мадрид", contentText: "Двата отбора да отбележат гол", contentPrevNum: 3.16, contentNextNum: 4.0 },
        { title: "Реал Сосиедад vs. Реал Мадрид", contentText: "Двата отбора да отбележат гол", contentPrevNum: 3.16, contentNextNum: 4.0 },
        { title: "Реал Сосиедад vs. Реал Мадрид", contentText: "Двата отбора да отбележат гол", contentPrevNum: 3.16, contentNextNum: 4.0 },
    ];

    return (
        <Home>
            <Container>
                <StyledSportsPage>
                    <Sidebar></Sidebar>
                    <GeneralContent>
                        <Content>
                            <ContentBox time="19:45" date="24/04" league="Ла Лига" teamFirst="Реал Мадрид" teamSecond="Барселона" prevNum={7.5} nextNum={5.0} thirdNum={3.5} />
                            <ContentBox time="21:15" date="25/04" league="Бундеслига" teamFirst="Реал Мадрид" teamSecond="Барселона" prevNum={7.5} nextNum={5.0} thirdNum={3.5} />
                        </Content>
                        <ContentBet>
                            {contentData.map((item, index) => (
                                <ContentItem key={index} {...item}>
                                    <ContentItemTitle>{item.title}</ContentItemTitle>
                                    <ContentItemText>{item.contentText}</ContentItemText>
                                    <ContentItemButton>
                                        <PrevNum>{item.contentPrevNum}</PrevNum>
                                        <Symbol></Symbol>
                                        <NextNum>{item.contentNextNum}</NextNum>
                                    </ContentItemButton>
                                </ContentItem>
                            ))}
                        </ContentBet>
                    </GeneralContent>
                </StyledSportsPage>
            </Container>
        </Home>
    );
};

const Container = styled.div`
    background-color: #1c212b;
    min-height: 100vh;
    padding: 10px;
`;

const StyledSportsPage = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

const Sidebar = () => {
    return (
        <StyledSidebar>
            <StyledSearchBox>
                <StyledInput type="text" placeholder="Търсене..." />
                <StyledButton>S</StyledButton>
            </StyledSearchBox>
            <SidebarList>
                <SidebarLink href="/">Първа лига</SidebarLink>
                <SidebarLink href="/">Ла Лига</SidebarLink>
                <SidebarLink href="/">Висша лига</SidebarLink>
                <SidebarLink href="/">Бундеслига</SidebarLink>
                <SidebarLink href="/">Първа лига</SidebarLink>
                <SidebarLink href="/">Ла Лига</SidebarLink>
                <SidebarLink href="/">Висша лига</SidebarLink>
                <SidebarLink href="/">Бундеслига</SidebarLink>
                <SidebarLink href="/">Първа лига</SidebarLink>
                <SidebarLink href="/">Ла Лига</SidebarLink>
                <SidebarLink href="/">Висша лига</SidebarLink>
                <SidebarLink href="/">Бундеслига</SidebarLink>
            </SidebarList>
        </StyledSidebar>
    );
};

const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
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
    display: block;
    &:hover {
        background-color: #1c212b;
    }
    &:not(:last-child) {
        border-bottom: 1px solid #1c212b;
    }
`;

const GeneralContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;

    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
`;

const ContentBet = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;



const ContentItem = ({ title, contentText, contentPrevNum, contentNextNum }) => {
    return (
        <StyledContentItem>
            <ContentItemTitle>{title}</ContentItemTitle>
            <ContentItemText>{contentText}</ContentItemText>
            <ContentItemButton>
                <PrevNum>{contentPrevNum}</PrevNum>
                <Symbol></Symbol>
                <NextNum>{contentNextNum}</NextNum>
            </ContentItemButton>
        </StyledContentItem>
    );
};


const StyledContentItem = styled.div`
    padding: 16px 12px;
    background: rgb(41, 49, 61);
    border-radius: 10px;
    flex: 1;

    @media screen and (max-width: 768px) {
        flex: 1 0 48%;
    }

    @media screen and (max-width: 500px) {
        flex: 1 0 100%;
    }
`;

const ContentItemTitle = styled.div`
    font-size: 12px;
    color: #fff;
    margin-bottom: 10px;
`;

const ContentItemText = styled.div`
    font-size: 14px;
    color: #e6f3ff;
    opacity: 0.5;
    margin-bottom: 15px;
`;

const ContentItemButton = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background: #444e59;
    width: 100%;
    outline: none;
    border: 0;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background: #535e6a;
    }
`;

const PrevNum = styled.div`
    font-size: 16px;
    color: grey;
    text-decoration: line-through;
`;

const Symbol = styled.div`
    width: 12px;
    height: 18px;
    background: url("/images/right-arrow.png") no-repeat center center;
    background-size: contain;
    filter: invert(1);
`;

const NextNum = styled.div`
    font-size: 16px;
    color: orange;
`;

const ContentBox = ({ time, date, league, teamFirst, teamSecond, num1, num2, num3 }) => {
    return (
        <StyledContentBox>
            <Time>{time}</Time>
            <Date>{date}</Date>
            <League>{league}</League>
            <Team>{teamFirst}</Team>
            <Team>{teamSecond}</Team>
            <StyledNumberBox>
                <StyledNumber>
                    <StyledNumberTop>1</StyledNumberTop>
                    {num1}
                </StyledNumber>
                <StyledNumber>
                    <StyledNumberTop>X</StyledNumberTop>
                    {num2}
                </StyledNumber>
                <StyledNumber>
                    <StyledNumberTop>2</StyledNumberTop>
                    {num3}
                </StyledNumber>
            </StyledNumberBox>
        </StyledContentBox>
    );
};

const StyledContentBox = styled.div`
    background-color: #fff;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    background-image: url("/images/bgr.png");
    background-size: cover;
    background-position: center;
    height: max-content;
`;

const StyledNumberBox = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const StyledNumberTop = styled.div`
    display: block;
    color: #fff;
    font-size: 12px;
`;

const StyledNumber = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 10px 0;
    text-align: center;
    color: rgb(0, 115, 251);
    font-size: 16px;
    flex: 1;
    &:hover {
        background: rgb(0, 115, 251);
        cursor: pointer;
        color: #fff;
    }
`;

const Time = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

const Date = styled.div`
    color: #fff;
    font-size: 16px;
`;

const League = styled.div`
    color: #c7c7c7;
    font-size: 12px;
    margin: 8px 0;
`;

const Team = styled.div`
    color: #fff;
    font-size: 14px;
    margin: 5px 0;
`;

export default Sports;