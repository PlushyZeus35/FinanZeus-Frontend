import React from 'react'
import { Property } from './Property';

export const PropertyList = ({propertyList, isLoading, hasError}) => {
    const spinnerStyle = {
        width: '3rem',
        height: '3rem'
    };
    console.log({propertyList, isLoading, hasError})

    return (
        <div>
            {isLoading && !hasError ? 
                <div className='d-flex justify-content-center align-items-center container'>
                    <div className="spinner-border text-primary" role="status" style={spinnerStyle}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                 : 
                <ul className='list-group'>
                    {propertyList.map((prop) => {
                        return <li key={prop.id} className='list-group-item'><Property property={prop}/></li>
                    })}
                </ul>}
            {hasError && 
                <div className="alert alert-danger" role="alert">
                    Ha ocurrido un error, inténtalo de nuevo más tarde.
                </div>}
        </div>
    )
}
