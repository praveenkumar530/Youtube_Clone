import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import './_categoriesBar.scss'



const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
]



const CategoriesBar = () => {

    const [activeElement, setactiveElement] = useState('All')
    const dispatch = useDispatch()

    const onclickHandler = (value) => {

        setactiveElement(value)

        if (value === 'All') {
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(value))
        }
    }

    return (
        <div className="categoriesBar">
            {
                keywords.map((value, index) => (<span key={index}
                    onClick={() => onclickHandler(value)}
                    className={activeElement === value ? "active" : ""}

                > {value}</span>))
            }

        </div>
    )
}

export default CategoriesBar
