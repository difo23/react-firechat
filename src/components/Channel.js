

import { useEffect, useState } from 'react';
import { db } from '../config/firebase';

const Channel = ({ user = null }) => {
    const [messages, setMessages] = useState([]);

    //Necesito cargar los mensajes desde la BD.
    useEffect(() => {
        /* 
            Crear el query de los mensajes.
            Cargar 100 mensajes ordenados por fecha.
        */
        const query = db.collection('messages')
            .orderBy('createdAt')
            .limit(100);

        const unsubscribe = query.onSnapshot(querySnapshot => {
            //Obtiene todos los mensajes desde la bd con su ID.
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            // Actualizo los mensjaes obtenidos desde la bd. 
            setMessages(data);

        });
        //CleanUp
        return unsubscribe;

    }, [])


    return (
        <ul>
            { messages.map(message => (
                //Todos los mensajes seran mostrados en una lista. 

                <li key={message.id}>{message.text}</li>
            ))}
        </ul>
    );
};

export default Channel;