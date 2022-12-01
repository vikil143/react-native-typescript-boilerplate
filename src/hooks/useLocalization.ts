import {LocalizationContext} from '@myapp/context';
import {useContext} from 'react';

const useLocaliztion = () => {
    const {t} = useContext(LocalizationContext);
    return t;
};

export {useLocaliztion};
