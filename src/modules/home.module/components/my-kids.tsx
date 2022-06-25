import React from 'react';
import {Button, Group, Paper, Text, Image} from "@mantine/core";

import arrow from '../../../app.shared/app.images/arrow.svg'

const kids = [
    {
        name: 'Крылова Мария Алексеевна',
    },
    {
        name: 'Крылова Лаура Алексеевна',
    }
]

const MyKids = () => {
    return (
        <>
            <Text weight={ 600 } size={ 'lg' } mb={ 20 }>Мои дети</Text>
            <Group spacing={ 10 }>
                {
                    kids.map((kid) =>
                        <Paper key={kid.name} p={ 17 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', width: '100%' }}>
                            <Group position={ 'apart' }>
                                <Text weight={ 600 }>{ kid.name }</Text>
                                <Image
                                    height={ 10 }
                                    width={ 6 }
                                    src={ arrow }
                                />
                            </Group>
                        </Paper>
                    )
                }
            </Group>
            <Group>
                <Button mt={ 20 }  variant={ 'filled' } size={ 'md' }>Добавить ребенка</Button>
                <Button mt={ 20 }  variant={ 'filled' } size={ 'md' }>Расписание</Button>
            </Group>
        </>
    );
};

export default MyKids;