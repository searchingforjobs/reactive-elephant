import React, {useEffect, useState} from 'react';

const Events = () => {

    return (
        <>
            события
        </>
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