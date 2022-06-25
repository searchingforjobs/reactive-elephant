import {ActionIcon, Text, Center, Group, Header as MantineHeader, Container} from "@mantine/core";
import {Link, useLocation} from "react-router-dom";
import { CalendarEvent, Home, MoodSmile, Qrcode} from "tabler-icons-react";


const Navigation = (props:{children:JSX.Element}) => {

    const location = useLocation()

    return(
         <>
             {props.children}
             {
                 location.pathname != '/' &&
                 <MantineHeader height={60} fixed={true} position={{ bottom: 0, left: 0, right: 0 }} sx={{ borderTop: '2px solid #D0D0D0' }}>
                     <Container sx={{height: '100%'}}>
                         <Group position={ 'left' } align={ 'center' } spacing={ 40 } pt={ 5 }>
                             <Group direction={ 'column' } align={ 'center' } spacing={ 0 }>
                                 <ActionIcon component={Link} to="/home">
                                     <Home size={ 48 }/>
                                 </ActionIcon>
                                 <Text>Главная</Text>
                             </Group>
                             <Group direction={ 'column' } align={ 'center' } spacing={ 0 }>
                                 <ActionIcon component={Link} to="/events">
                                     <CalendarEvent size={ 48 }/>
                                 </ActionIcon>
                                 <Text>События</Text>
                             </Group>
                             <Group direction={ 'column' } align={ 'center' } spacing={ 0 }>
                                 <ActionIcon component={Link} to="/profile">
                                     <MoodSmile size={ 48 }/>
                                 </ActionIcon>
                                 <Text>Профиль</Text>
                             </Group>
                             <ActionIcon
                                 color={ 'blue' }
                                 size={ 62 }
                                 variant={ 'filled' }
                                 sx={{
                                     position: 'absolute',
                                     bottom: 12,
                                     right: 12,
                                     borderRadius: '100%'
                                 }}
                             >
                                 <Qrcode size={ 44 }/>
                             </ActionIcon>
                         </Group>
                     </Container>
                 </MantineHeader>
             }
         </>
    )

}
export default Navigation;