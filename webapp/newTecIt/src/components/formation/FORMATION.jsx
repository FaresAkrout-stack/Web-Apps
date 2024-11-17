import React, { useState, useEffect } from 'react';
import axiosClient from '../../api/axiosClient';
import Navbar from '../../containers/navbar/Navbar';
import Courses from '../../containers/courses/Courses.jsx';
import '../formation/formation.css';

function Formation() {
    const [coursesData, setCoursesData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [user, setUser] = useState({ point: 0 });

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = () => {
        axiosClient.get('/courses')
            .then(response => {
                setCoursesData(response.data);
                setUniqueCategories([...new Set(response.data.map(course => course.categorie))]);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
                setCoursesData([]);
                setUniqueCategories([]);
            });
    };

    const filterByCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredCourses = selectedCategory === ''
        ? coursesData
        : coursesData.filter(course => course.categorie === selectedCategory);

    const fetchUserPoints = async (courseId) => {
        try {
            const response = await axiosClient.get(`/getUser/${courseId}`);
            setUser({ point: response.data.data.point || 0 });
        } catch (error) {
            console.error('Error fetching user points:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="formation-card">
            <Navbar Acceuil='Acceuil' Compte='Compte Client' Formation='Formation' Contact='Contact' />

            <div className='course-wrapper'>
                <h1 id='formation-titre'>Formation</h1>

                <div className="categories">
                    <button onClick={() => filterByCategory('')}>All</button>
                    {uniqueCategories.map((category, index) => (
                        <button key={index} onClick={() => filterByCategory(category)}>{category}</button>
                    ))}
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="courses-container">
                        {filteredCourses.map(course => (
                            <Courses
                                key={course.idF}
                                {...course}
                                fetchUserPoints={fetchUserPoints}
                            />
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Formation;
