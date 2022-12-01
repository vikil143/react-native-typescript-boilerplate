import React, {createContext, useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import I18n from '@myassets/translations/i18n';
import {hasChild} from '@myapp/types';
import {LocalizationTypes} from './types';

export const LocalizationContext = createContext<LocalizationTypes>({
    t: I18n.t,
});

interface LocalizationProps extends hasChild {}

export default function Localization({children}: LocalizationProps) {
    const {t, i18n} = useTranslation();

    const rootValues = useMemo(
        () => ({
            t,
        }),
        [t],
    );

    console.log('locale', i18n);

    // Refer this link https://www.geeksforgeeks.org/multi-language-support-in-react-native/  => for language change
    // const changeLanguage = value => {
    //     i18n.changeLanguage(value)
    //         .then(() => cons+ole.log(value))
    //         .catch(err => console.log(err));
    // };

    return (
        <LocalizationContext.Provider value={rootValues}>
            {children}
        </LocalizationContext.Provider>
    );
}
