import { useContext, useEffect, useState } from 'react';
import { RoutesContext } from '../../context/routesContext';
import { useForm } from 'react-hook-form';
import './addPackage.css'

const AddPackage = ({ setIsAddingPackages }) => {
  const  ctxRoutes = useContext(RoutesContext);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  }, []);

  const onSubmit = (data) => {
    let retrievedObject = JSON.parse(localStorage.getItem('savedRoute'));
    retrievedObject.current.push(data);
    localStorage.setItem('savedRoute', JSON.stringify(retrievedObject));
    ctxRoutes.setRoutes(retrievedObject)
    setIsAddingPackages(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Agregar paquete</h2>
      {isLoading? <p>Cargando...</p> : 
      <div className="form-inputs">
        <label htmlFor='packageNumber'>
          Número de paquete:
          <input type='number' {...register('packageNumber', { required: true })} />
          {errors.packageNumber && <span>Debes agregar número de paquete</span>}
        </label>

        <label htmlFor='clientName'>
          Nombre del cliente:
          <input type='text' {...register('clientName', { required: true })} />
          {errors.clientName && <span>Debes agregar nombre de cliente</span>}
        </label>

        <label htmlFor='phoneNumber'>
          Número de teléfono:
          <input type='tel' {...register('phoneNumber', { required: true })} />
          {errors.phoneNumber && <span>Debes agregar número de teléfono</span>}
        </label>

        <label htmlFor='addressBarrio'>
          Colonia:
          <input type='text' {...register('addressBarrio', { required: true })} />
          {errors.addressBarrio && <span>This field is required</span>}
        </label>

        <label htmlFor='addressStreet'>
          Calle:
          <input type='text' {...register('addressStreet', { required: true })} />
          {errors.addressStreet && <span>This field is required</span>}
        </label>

        <label htmlFor='addressBlock'>
          Manzana:
          <input type='number' {...register('addressBlock', { required: false })} />
          {errors.addressBlock && <span>This field is required</span>}
        </label>

        <label htmlFor='addressLot'>
          Lote:
          <input type='number' {...register('addressLot', { required: false })} />
          {errors.addressLot && <span>This field is required</span>}
        </label>

        <label htmlFor='houseNumber'>
          Número de casa:
          <input type='text' {...register('houseNumber', { required: true })} />
          {errors.houseNumber && <span>This field is required</span>}
        </label>

        <label htmlFor='houseColour'>
          Color de casa:
          <select {...register("houseColour")}>
            <option value="blanca">blanca</option>
            <option value="negra">negra</option>
            <option value="cafe">cafe</option>
            <option value="amarilla">amarilla</option>
            <option value="naranja">naranja</option>
            <option value="rosa">rosa</option>
            <option value="roja">roja</option>
            <option value="morada">morada</option>
            <option value="azul">azul</option>
            <option value="verde">verde</option>
          </select>
          {errors.houseColour && <span>This field is required</span>}
        </label>

        <label htmlFor='houseColourSecondary'>
          Color secundario de casa:
          <select {...register("houseColourSecondary")}>
            <option value="blanca">blanca</option>
            <option value="negra">negra</option>
            <option value="cafe">cafe</option>
            <option value="amarilla">amarilla</option>
            <option value="naranja">naranja</option>
            <option value="rosa">rosa</option>
            <option value="roja">roja</option>
            <option value="morada">morada</option>
            <option value="azul">azul</option>
            <option value="verde">verde</option>
          </select>
          {errors.houseColourSecondary && <span>This field is required</span>}
        </label>

      </div>
}
      <input type='submit' className='inputButton' value='Agregar Paquete' />
    </form>
  );
};

export default AddPackage;
