/// <reference types="react" />
import { ViewProps } from "react-native";
import Component from "../component";
declare type Props = {
    onPress: () => {};
} & ViewProps;
export default class Callout extends Component<Props> {
    static propTypes: import("prop-types").ValidationMap<ViewProps>;
    nativeComponent: string;
    render(): JSX.Element;
}
export {};
