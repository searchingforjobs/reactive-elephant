import React from 'react';
import {Button, Container, Drawer, Group, Image, Paper, Text} from "@mantine/core";
import accepted from "../../../app.shared/app.images/acceptedIndicator.svg";
import arrow from "../../../app.shared/app.images/arrow.svg";

interface KidDrawerProps {
    opened: boolean,
    setOpened: (a:boolean) => void
}

const KidDrawer = ( props: KidDrawerProps ) => {
    return (
        <Drawer
            opened={ props.opened }
            onClose={ () => props.setOpened(false) }
            position={ 'left' }
            size={ 'xl' }
            padding={ 'xl' }
            // sx={{backgroundColor: '#F8F9FA'}}
        >
            <Text size={ 'lg' } weight={ 600 } align={ 'center' } mt={ 30 } transform={ 'uppercase' }>КРЫЛОВА МАРИЯ АЛЕКСЕЕВНА</Text>
            <Text weight={ 600 } align={ 'center' } color={ 'blue' } mt={ 10 } mb={ 30 }>Редактировать профиль</Text>

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
                        21.03.2006
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

                <Paper p={ 20 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', width: '100%' }}>
                    <Group position={ 'apart' } >
                        <Text weight={ 600 } size={ 'md' }>Место учебы</Text>
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
                        МБОУ СОШ №10
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
        </Drawer>
    );
};

export default KidDrawer;