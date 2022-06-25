import React from 'react';
import {Badge, Button, Group, Image, Paper, Text} from "@mantine/core";
import arrow from "../../../app.shared/app.images/arrow.svg";

const confidants = [
    {
        name: 'Пушкова Анастасия Алексеевна',
        role: 'Бабушка',
    },
    {
        name: 'Дедов Дмитрий Юрьевич',
        role: 'Дедушка',
    },
    {
        name: 'Крылова Снежана Сергеевна',
        role: 'Мать',
    }
]

const Confidants = () => {
    return (
        <>
            <Text weight={ 600 } size={ 'lg' } mt={ 40 } mb={ 20 }>Доверенные лица</Text>
            <Group spacing={ 10 }>
                {
                    confidants.map((confidant) =>
                        <Paper key={ confidant.name } p={ 17 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', width: '100%' }}>
                            <Group position={ 'apart' }>
                                <Text weight={ 600 }>{ confidant.name }</Text>
                                <Image
                                    height={ 10 }
                                    width={ 6 }
                                    src={ arrow }
                                />
                            </Group>
                            <Badge variant={ 'outline' } mt={ 14 }>{ confidant.role }</Badge>
                        </Paper>
                    )
                }
            </Group>
            <Group>
                <Button mt={ 20 }  variant={ 'filled' } size={ 'md' }>Добавить доверенное лицо</Button>
            </Group>
        </>
    );
};

export default Confidants;