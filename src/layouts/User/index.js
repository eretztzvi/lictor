import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { download, getPersons } from '../../redux/slicers/personsSlice'
import { getUserLikes } from '../../redux/slicers/likesSlicer'
import { useSelector, useDispatch } from 'react-redux'

export default function UserLayout() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPersons())
        dispatch(getUserLikes())
    }, [])
    
    return (
        <>
            <>
                <NavBar />
                <Outlet />
            </>
        </>
    );
}
