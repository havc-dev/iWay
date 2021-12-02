import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import BoxOpenIcon from '../../assets/icons/BoxOpenIcon';
import { ContextRoutes } from '../../context/ContextRoutes';
import { doc, setDoc } from 'firebase/firestore'


const AddPackage = ({ setIsAddingPackages }) => {

  const colorOptions = {
    "red": "Red",
    "orange": "Orange",
    "yellow": "Yellow",
    "green": "Green",
    "blue": "Blue",
    "purple": "Purple",
    "pink": "Pink",
    "black": "Black",
    "white": "White",
    "gray": "Gray",
    "brown": "Brown",
    "maroon": "Maroon",
    "navy": "Navy",
    "olive": "Olive",
    "teal": "Teal",
    "silver": "Silver",
    "gold": "Gold",
    "beige": "Beige",
    "ivory": "Ivory",
  } 
    
  // <option value="blanca">blanca</option>
  //           <option value="negra">negra</option>
  //           <option value="cafe">cafe</option>
  //           <option value="amarilla">amarilla</option>
  //           <option value="naranja">naranja</option>
  //           <option value="rosa">rosa</option>
  //           <option value="roja">roja</option>
  //           <option value="morada">morada</option>
  //           <option value="azul">azul</option>
  //           <option value="verde">verde</option>
  const RoutesCtx = useContext(ContextRoutes)
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

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { name, description, price, quantity } = data;
    const newPackage = {
      name,
      description,
      price,
      quantity,
      createdAt: new Date(),
    };

    await setDoc(db, "routes")
    await RoutesCtx.setCurrentRoute(RoutesCtx.currentRoute.push(data));
    localStorage.setItem('savedCurrent', JSON.stringify(RoutesCtx.currentRoute));
    setIsAddingPackages(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <legend>Agregar paquete</legend>
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

        <label htmlFor='addressSettlement'>
          Colonia:
          <input type='text' {...register('addressSettlement', { required: true })} />
          {errors.addressSettlement && <span>This field is required</span>}
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
          <select {...register("houseColour")} defaultValue={'chooseColor'}>
            <option value="chooseColor" disabled>Seleccione color</option>
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
          <select {...register("houseColourSecondary")} defaultValue={'chooseColorSecondary'}>
            <option value="chooseColor" defaultValue disabled>Seleccione color</option>
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

        <label htmlFor='fenceColour'>
          Color de reja:
          <select {...register("fenceColour")} defaultValue={'chooseFenceColor'}>
            <option value="chooseColor" defaultValue disabled>Seleccione color de reja</option>
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
          {errors.fenceColour && <span>This field is required</span>}
        </label>

        <label htmlFor='fenceMaterial'>
          Color secundario de casa:
          <select {...register("fenceMaterial")} defaultValue={'chooseColor'}>
            <option value="chooseColor" defaultValue disabled>Seleccione material reja</option>
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
          {errors.fenceMaterial && <span>This field is required</span>}
        </label>

      </div>
}
      <button type='submit' className='submitBtn' value='Agregar Paquete'>
        <BoxOpenIcon />
        Agregar Paquete
      </button>
    </form>
  );
};

export default AddPackage;
