import React, {useEffect, useState} from 'react';
import {Avatar, Badge, Button, Container, Group, Image, Paper, Text} from "@mantine/core";
import accepted from "../../app.shared/app.images/acceptedIndicator.svg";
import arrow from "../../app.shared/app.images/arrow.svg";

const Profile = () => {

    return (
        <Container mt={ 50 } mb={ 150 }>
            <Group position={ 'center' } align={ 'top' }>
                <Group direction={ 'column' } align={ 'center' } spacing={ 0 }>
                    <Avatar size={ 'xl' }/>
                    <Button variant={ 'subtle' } compact>Изменить фото</Button>
                </Group>
                <Group>
                    <Paper p={ 18 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', backgroundColor: 'white' }}>
                        <Text sx={{
                            lineHeight: 1.1,
                            '&:before': {
                                content: '""',
                                display: 'block',
                                background: `url(${accepted}) no-repeat`,
                                width: '20px',
                                height: '20px',
                                float: 'left',
                                margin: '2px -4px 0 0',
                            }
                        }}
                        >
                            Учетная запись<br/>подтверждена
                        </Text>
                    </Paper>
                </Group>
            </Group>
            <Text size={ 'lg' } weight={ 600 } align={ 'center' } mt={ 30 } mb={ 20 } transform={ 'uppercase' }>КРЫЛОВ АЛЕКСЕЙ СЕРГЕЕВИЧ</Text>

            <Group>
                <Paper p={ 20 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', width: '100%' }}>
                    <Group position={ 'apart' } >
                        <Text weight={ 600 } size={ 'md' }>Дата рождения</Text>
                        <Text weight={ 600 } color={ 'blue' } size={ 'md' }>Изменить</Text>
                    </Group>
                    <Text mt={ 10 } sx={{
                        '&:before': {
                            content: '""',
                            display: 'block',
                            background: `url(${accepted}) no-repeat`,
                            width: '20px',
                            height: '20px',
                            float: 'left',
                            margin: '5px -4px 0 0',
                        }
                    }}
                    >
                        21.03.1996
                    </Text>
                </Paper>

                <Paper p={ 20 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', width: '100%' }}>
                    <Group position={ 'apart' } >
                        <Text weight={ 600 } size={ 'md' }>Номер телефона</Text>
                        <Text weight={ 600 } color={ 'blue' } size={ 'md' }>Изменить</Text>
                    </Group>
                    <Text mt={ 10 } sx={{
                        '&:before': {
                            content: '""',
                            display: 'block',
                            background: `url(${accepted}) no-repeat`,
                            width: '20px',
                            height: '20px',
                            float: 'left',
                            margin: '6px -4px 0 0',
                        }
                    }}
                    >
                        +7 (928) 999-99-99
                    </Text>
                </Paper>

                <Paper p={ 17 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', width: '100%' }}>
                    <Group position={ 'apart' }>
                        <Text weight={ 600 }>Паспорт РФ</Text>
                        <Image
                            height={ 10 }
                            width={ 6 }
                            src={ arrow }
                        />
                    </Group>
                </Paper>

                <Paper p={ 17 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', width: '100%' }}>
                    <Group position={ 'apart' }>
                        <Text weight={ 600 }>Адреса</Text>
                        <Image
                            height={ 10 }
                            width={ 6 }
                            src={ arrow }
                        />
                    </Group>
                </Paper>
            </Group>
        </Container>
    );
}

export default {
    routeProps: {
        path: '/profile',
        exact: true,
        index: false,
        element: <Profile/>,
    },
    name: 'Profile',
};