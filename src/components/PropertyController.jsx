import React from 'react'
import { usePropertyHook } from '../hooks/usePropertyHook'
import { PropertyList } from './PropertyList';
import { PropertyForm } from './PropertyForm';

export const PropertyController = () => {
    const {properties, isLoading, addProperty, hasError} = usePropertyHook([]);
    
    return (
        <div className='container'>
            <div className='row d-md-flex g-3'>
                <div className='col col-12 col-md-4'>
                    <PropertyForm setNewProperty={addProperty}/>
                </div>
                <div className='col col-12 col-md-8'>
                    <PropertyList isLoading={isLoading} propertyList={properties} hasError={hasError}/>
                </div>
            </div>
        </div>
    )
}
