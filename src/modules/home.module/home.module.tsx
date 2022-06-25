import React, {useEffect, useState} from 'react';
import {Avatar, Button, Container, Group, Paper, Text} from "@mantine/core";

import accepted from '../../app.shared/app.images/acceptedIndicator.svg'
import {Qrcode} from "tabler-icons-react";
import MyKids from "./components/my-kids";
import Confidants from "./components/confidants";

const Home = () => {

    return (
        <Container mt={ 50 } mb={ 150 }>
            <Paper p={ 17 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px' }}>
                <Group align={ 'top' } direction={ 'row' }>
                    <Avatar size={ 50 } radius={ 'xl' } color={ 'gray' }/>
                    <Group direction={ 'column' } spacing={ 15 }>
                        <Text weight={ 600 } sx={{ lineHeight: 1.4}}>КРЫЛОВ <br/>АЛЕКСЕЙ СЕРГЕЕВИЧ</Text>
                        <Text
                            size={ 'xs' }
                            sx={{
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    background: `url(${accepted}) no-repeat`,
                                    width: '20px',
                                    height: '20px',
                                    float: 'left',
                                    margin: '4px -4px 0 0',
                                }
                            }}
                        >Учетная запись подтверждена</Text>
                    </Group>
                </Group>
            </Paper>
            <Button
                size={ 'md' }
                mt={ 20 }
                mb={ 40 }
                fullWidth
                sx={{
                    backgroundColor: '#EDEDED',
                    color: '#428DFC',
                    '&:active': {
                        backgroundColor: '#EDEDED',
                        color: '#428DFC',
                    }

                }}
                leftIcon={ <Qrcode size={ 25 }/> }
            >
                Открыть QR-код
            </Button>
            <MyKids/>
            <Confidants/>
        </Container>
    );
}

export default {
    routeProps: {
        path: '/home',
        exact: true,
        index: false,
        element: <Home/>,
    },
    name: 'Home',
};