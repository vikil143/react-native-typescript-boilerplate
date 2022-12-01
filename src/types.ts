import {ReactElement} from 'react';
import {
    ViewStyle as RNViewStyle,
    ImageStyle as RNImageStyle,
} from 'react-native';

interface hasChild {
    children: ReactElement;
}

interface ViewStyles {
    style: RNViewStyle | RNViewStyle[];
}

interface ImageStyles {
    imageStyle: RNImageStyle;
}

interface OnPress {
    onPress: () => void;
}

export type {hasChild, ViewStyles, OnPress, ImageStyles};
