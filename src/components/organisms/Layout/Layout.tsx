import { ILayout } from "./Layout.interface";

const Layout = (props: ILayout) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Layout;