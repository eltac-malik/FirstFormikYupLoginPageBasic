import { object, string} from 'yup';

let validation = object({
  name: string().required("Bos qala bilmez"),
  surname: string().required("Bos qala bilmez"),
  email: string().email().required("Duzgun e-mail daxil ediniz"),
  phone: string().min(10).required("Duzgun qeyd ediniz")
});

export default validation;