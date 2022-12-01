import React from 'react';
import {hasChild} from '@myapp/types';
import Localization from './Localization';

interface RootContextProps extends hasChild {}

export default function RootContext({children}: RootContextProps) {
    return <Localization>{children}</Localization>;
}
