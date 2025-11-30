import React from 'react';
import Text from '../atoms/Text';

function CBody({titulo, descripcion}){
    return(
        <>
        <Text variant="h5" className='fw-bold mb-1'>{titulo}</Text>
        <Text variant="p" className='text-muted mb-2'>{descripcion}</Text>
        </>

    )
}

export default CBody;