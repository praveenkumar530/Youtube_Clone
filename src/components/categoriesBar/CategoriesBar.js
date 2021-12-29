import React, { useState } from 'react'
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

    const onclickHandler = (value) => {
        console.log("lclcl")
        setactiveElement(value)
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
