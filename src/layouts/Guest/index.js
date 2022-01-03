import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';


export default function GuestLayout() {

    return (
        <>
            <>
                <NavBar />
                <Outlet/>
            </>
        </>
    );
}
