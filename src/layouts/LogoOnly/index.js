import { Outlet } from 'react-router-dom';

function LogoOnlyLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default LogoOnlyLayout
