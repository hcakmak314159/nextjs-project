import { ErrorMessage } from "formik";

export default function login_validate(values){
    const errors = {};

    if (!values.email) {
        errors.email = '';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = '';
      } else if (values.password.length <8 || values.password.length >20) {
        errors.password = 'Must be greater then 8 and less then 20 characters long';
      }  else if(values.password.includes("")){
        errors.password=""
      }

      return errors;



}

export function registerValidate(values){
    const errors = {};

    if(!values.name){
        errors.name='Required';
    }else if(values.name.includes('')){
        errors.name ='Invalid Name';
    }

    if(!values.surname){
        errors.surname='Required';
    }else if(values.surname.includes('')){
        errors.surname ='Invalid Surname';
    }

    if (!values.email) {
        errors.email = '';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = '';
    } else if (values.password.length <8 || values.password.length >20) {
        errors.password = 'Must be greater then 8 and less then 20 characters long';
    }  else if(values.password.includes("")){
        errors.password="";
    }

    if(!values.cpassword){
        errors.cpassword='Required';
    }else if(values.password !== values.cpassword){
        errors.cpassword = 'Password Not Match';
    }else if(values.cpassword.includes('')){
        errors.cpassword = 'Invalid Confirm Password';
    }


    return errors;


}