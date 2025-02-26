import { HeaderUi } from '../../widgets/header';

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <HeaderUi />
            <div className="page-content">
                { children }
            </div>
        </div>
    );
};