import { useState } from 'react';
import '../assets/Property.css'

export const Property = ({property}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    /*const collapseId = property.id + 'collapse';
    let showCollapse = false;
    const showHideCollapse = () =>{
        showCollapse = !showCollapse
        const bsCollapse = new bootstrap.Collapse('#' + collapseId, {
            toggle: false
        })
        if(showCollapse){
            bsCollapse.show();
        }else{
            bsCollapse.hide();
        }
    }*/

    return (
        <>
        <div className="d-flex justify-content-between align-items-center clickable" onClick={toggleCollapse}>
            <div>
                <h5>{property.name}</h5>
                <div>
                    <strong>Precio: </strong>
                    <span>{property.price}</span>
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <div className="border rounded p-2 status">
                    {property.status}
                </div>
                {
                    isOpen ? 
                    <div className='ms-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>
                    </div> :  
                    <div className='ms-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    </div>
                } 
            </div>
        </div>
        
        <div className={`collapse ${isOpen ? 'show' : ''} border-top pt-3`}>
            <div>
                <strong>Descripción: </strong>
                <span>{property.description}</span>
            </div>
            <div className='row'>
                <div className='col col-6'>
                    <div>
                        <strong>APY: </strong>
                        <span>{property.price}</span>
                    </div>
                </div>
                <div className='col col-6'>
                    <div>
                        <strong>Rentabilidad: </strong>
                        <span>{property.price}</span>
                    </div>
                </div>
                <div className='col col-6'>
                    <div>
                        <strong>Token: </strong>
                        <span>{property.price}</span>
                    </div>
                </div>
                <div className='col col-6'>
                    <div>
                        <strong>Divisa: </strong>
                        <span>{property.price}</span>
                    </div>
                </div>
            </div>
            <div>
                <strong>Contrato: </strong>
                <span>{property.price}</span>
            </div>
        </div>
        </>
    )
}
