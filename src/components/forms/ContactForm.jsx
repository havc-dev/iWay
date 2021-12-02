const ContactForm = () => {
  return (
    <form name='contact' method='POST' data-netlify='true'>
      <p>
        <label>
          Tu nombre: <input type='text' name='name' />
        </label>
      </p>
      <p>
        <label>
          Tu Email: <input type='email' name='email' />
        </label>
      </p>
      <p>
        <label>
          Motivo:
          <select name='role[]' multiple>
            <option value='sugerencia'>Sugerencia</option>
            <option value='bug'>Bug o error</option>
            <option value='otro'>Otro</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Mensaje: <textarea name='message'></textarea>
        </label>
      </p>
      <p>
        <button type='submit' disabled>No disponible</button>
      </p>
    </form>
  );
};

export default ContactForm;
