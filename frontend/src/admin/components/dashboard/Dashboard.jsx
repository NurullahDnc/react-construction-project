import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import DashboardCart from './DashboardCart';
import { getCategory, getProject } from '../../../redux/ProjectSlice';
import { getMessage } from '../../../redux/MessageSlice';
import { getService } from '../../../redux/ServiceSlice';
import { getCareer } from '../../../redux/CareerSlice';
import { getAbout } from '../../../redux/AboutSlice';


const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth)
    const dispacth = useDispatch();

    if (!user) {
        navigate("/admin/")
    }

    const {project} = useSelector((state) => state.project);
     const {category} = useSelector((state) => state.category);
    const {message} = useSelector((state) => state.message);
    const {service} = useSelector((state) => state.service);
    const {career} = useSelector((state) => state.career);
    const {about} = useSelector((state) => state.about);

    useEffect(()=>{
        dispacth(getProject())
        dispacth(getCategory())
        dispacth(getMessage())
        dispacth(getService())
        dispacth(getCareer())
        dispacth(getAbout())


    },[dispacth])



    return (
        <div className='dashboard'>
            <h3 className='pageTitle'>Dashboard</h3>
            <div className='dashboard-container'>
                <DashboardCart title={"Projeler"} length={project.length} />
                <DashboardCart title={"Kategori"} length={category.length} />
                <DashboardCart title={"Hizmetler"} length={service.length} />
                <DashboardCart title={"Hakkımzda"} length={about.length} />
                <DashboardCart title={"Karier"} length={career.length} />
                <DashboardCart title={"Mesajlar"} length={message.length} />
 

            </div>
        </div>
    )
}

export default Dashboard
