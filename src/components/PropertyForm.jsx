import { useState } from "react"

const initialValue = {
    name: '',
    description: '',
    tokenName: '',
    contract: '',
    price: '',
    status: ''
}
const STATUS_DEFAULT = 'En venta';

export const PropertyForm = ({setNewProperty}) => {

    const [propertyInfo, setpropertyInfo] = useState(initialValue);

    const onChangeInput = (event) => {
        const { name, value } = event.target;
        setpropertyInfo({
            ...propertyInfo,
            [name]: value,
        });
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        const {name, tokenName, contract, price, status, description} = propertyInfo;
        if(name && tokenName && contract && price){
            setNewProperty({name, tokenName, contract, price, status, description})
        }
    }
    
    return (
        <div className="border rounded p-3">
            <h3>Nuevo inmueble</h3>
            <form onSubmit={onSubmitForm}>
                <div className="mb-3">
                    <label htmlFor="propertyName" className="form-label">Nombre</label>
                    <input type="text" value={propertyInfo.name} name="name" className="form-control" id="propertyName" placeholder="Token 001" onChange={onChangeInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea className="form-control" id="description" name="description" value={propertyInfo.description} onChange={onChangeInput} rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tokenName" className="form-label">Nombre del token</label>
                    <input type="text" value={propertyInfo.tokenName} name="tokenName" className="form-control" id="tokenName" placeholder="TOK-001" onChange={onChangeInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tokenContract" className="form-label">Contrato del token</label>
                    <input type="text" value={propertyInfo.contract} name="contract" className="form-control" id="tokenContract" placeholder="0x0000000000000" onChange={onChangeInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="propertyPrice" className="form-label">Precio</label>
                    <input type="number" value={propertyInfo.price} name="price" step='0.01' className="form-control" id="propertyPrice" placeholder="20000,68" onChange={onChangeInput}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Estado</label>
                    <select className="form-select" id="status" name="status" value={propertyInfo.status} onChange={onChangeInput}>
                        <option value="En venta">En venta</option>
                        <option value="En reforma">En reforma</option>
                        <option value="En explotación">En explotación</option>
                        <option value="Vendido">Vendido</option>
                    </select>
                </div>
                <button className="btn btn-success" >Guardar</button>
            </form>
        </div>
    )
}
