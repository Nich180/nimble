import React, { useCallback, useState } from 'react';
import { Title } from '../styledComponents/pageHeader';
import { GlobalStyle } from '../styledComponents/tableGlobalStyle';
import { Content, TabsLayout, Tab, Tabs } from '../styledComponents/tabs';
import TableComponent from './TableComponent';
import data from '../data/data.json'

export const Repayments = () => {
    const [active, setActive] = useState(0);

    const handleClick = useCallback((tab) => {
        setActive(parseInt(tab.target.id, 0));
    }, [setActive]);

    return (
        <>
            <TabsLayout className='repayments-section'>
                <Title>
                    {'Repayments'}
                </Title>
                <Tabs>
                    <Tab onClick={handleClick} active={active === 0} id={0}>
                        {'Pending'}
                    </Tab>
                    <Tab onClick={handleClick} active={active === 1} id={1}>
                        {'Purchased'}
                    </Tab>
                    <Tab onClick={handleClick} active={active === 2} id={2}>
                        {'Failed'}
                    </Tab>
                </Tabs>
            </TabsLayout>

            <GlobalStyle />
            {active === 0 && (
                <Content>
                    <TableComponent
                        footerLabel={'Pending'}
                        data={data.repayments.filter(row => row.type === "PENDING")}
                    />
                </Content>
            )}
            {active === 1 && (
                <Content>
                    <TableComponent
                        footerLabel={'Purchased'}
                        data={data.repayments.filter(row => row.type === "PROCESSED")}
                    />
                </Content>
            )}
            {active === 2 && (
                <Content>
                    <TableComponent
                        footerLabel={'Failed'}
                        data={data.repayments.filter(row => row.type === "FAILED")}
                    />
                </Content>
            )}
        </>
    )
};