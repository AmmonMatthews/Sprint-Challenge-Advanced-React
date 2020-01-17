import  {useState, useEffect} from 'react';



const useDarkMode = () => {
    const [someValue, setSomeValue] = useState();

    useEffect(() => {
        if (someValue === true){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }

    }, [someValue])
    
    return [someValue, setSomeValue]
}

export default useDarkMode;