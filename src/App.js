import "./App.css";
import { Formik, Field, Form} from 'formik';
import validation from './Components/validationYup'

function App() {
  return (    
    <div className="App">

    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        phone:""
      }}
      validationSchema={validation}
      onSubmit={values => {
        console.log(values);
      }}>

      {
        ({errors,touched}) =>
        (

          <Form>

          <label>Name</label>
          <Field name="name"/>
          {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
          <br />
          <label>Surname</label>
          <Field name="surname"/>
          {errors.surname && touched.surname ? (<div>{errors.surname}</div>) : null}
          <br />
      
          <label>E-mail</label>
          <Field name="email"/>
          {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
          <br />
          <label>Phone</label>
          <Field name="phone" />
          {errors.phone && touched.phpne ? (<div>{errors.phone}</div>) : null}
          <br />
          <br />
      
          <button type="submit">Okay</button>
      
          </Form>

        )


      }

    </Formik>

    </div>
  );
}

export default App;
