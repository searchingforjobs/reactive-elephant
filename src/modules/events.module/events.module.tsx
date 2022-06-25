import React, {useEffect, useState} from 'react';
import {Badge, Button, Container, Group, Image, Paper, Text} from "@mantine/core";
import arrow from "../../app.shared/app.images/arrow.svg";

const news = [
    {
        title: 'Новые турникеты!',
        description: 'Мы установили новое оборудование в МБОУ СОШ №10 и сделали её лучше...',
        date: '10.06.2022',
    },
    {
        title: 'Через месяц откроются новые кружки',
        description: '',
        date: '',
    }
]

const eventsForParents = [
    {
        title: 'Родительское собрание 11.06',
    }
]


const Events = () => {

    return (
        <Container mt={ 50 } mb={ 150 }>
            <Group position={ 'apart' } align={ 'center' }  mb={ 12 }>
                <Text weight={ 600 } size={ 'lg' }>Новости</Text>
                <Text weight={ 600 } size={ 'sm' } color={ 'blue' }>Фильтры</Text>
            </Group>
            <Group spacing={ 10 }>
                {
                    news.map((event) =>
                        <Paper key={event.title} p={ 20 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', width: '100%' }}>
                            <Group position={ 'apart' } >
                                <Text weight={ 600 } size={ 'md' } sx={{ maxWidth: '230px', lineHeight: 1.2 }}>{ event.title }</Text>
                                <Image
                                    height={ 10 }
                                    width={ 6 }
                                    src={ arrow }
                                />
                            </Group>
                            <Text size={ 'sm' } mt={ 10 } sx={{ maxWidth: '230px', lineHeight: 1.2 }}> { event.description } </Text>
                            <Text size={ 'xs' } mt={ 10 }> { event.date } </Text>
                        </Paper>
                    )
                }
            </Group>
            <Text weight={ 600 } size={ 'lg' } mt={ 40 } mb={ 12 }>Мероприятия для родителей</Text>
            <Group spacing={ 10 }>
                {
                    eventsForParents.map((event) =>
                        <Paper key={event.title} p={ 20 } sx={{ border: '1px solid #EDEDED', borderRadius: '6px', width: '100%' }}>
                            <Group position={ 'apart' } >
                                <Text weight={ 600 } size={ 'md' } sx={{ maxWidth: '230px', lineHeight: 1.2 }}>{ event.title }</Text>
                                <Image
                                    height={ 10 }
                                    width={ 6 }
                                    src={ arrow }
                                />
                            </Group>
                            <Badge variant={ 'outline' } color={ 'red' } size={ 'md' } mt={ 5 }>Важно</Badge>
                            <Button fullWidth size={ 'md' } mt={ 30 }>Я пойду</Button>
                        </Paper>
                    )
                }
            </Group>
        </Container>
    );
}

export default {
    routeProps: {
        path: '/events',
        exact: true,
        index: false,
        element: <Events/>,
    },
    name: 'Events',
};