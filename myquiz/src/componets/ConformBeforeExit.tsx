import REACT from 'react';
import {useEffect} from 'react';


////conform before exit 


const ConformBeforeExit=()=>{

useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
        event.preventDefault();
        event.returnValue = ''; 
        return ''; 
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, []);
}

export default ConformBeforeExit;