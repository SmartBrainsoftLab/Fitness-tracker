import { FormikHelpers, useFormik } from 'formik';
// import jwt_decode from "jwt-decode";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { PATH } from '../../consts';
import { TSignIn } from '../../types';
import axios from "axios";
function SignIn() {
    const validationSchema = Yup.object().shape({
        // username: Yup.string().required("Username is required."),
        email: Yup.string().required("email is required."),
        password: Yup.string().required("Password is required."),
    })
    const formik = useFormik({
        initialValues: {
            // username: "",
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values: TSignIn, action: FormikHelpers<TSignIn>) => {
            // type temp_values = {
            //     email: string;
            //     password: string; // optional property
            // };
            
            // const value: temp_values = {
            //     email: values['email'],
            //     password: values['password'],
            // };
            
            console.log("values",values);
            try{
                const response = await axios.post(PATH.BACKEND_SIGN_AUTH + PATH.SIGNIN, values);
                
                console.log(response);
                localStorage.setItem("token", response.data.token);//value input to localstorage
                // const token = localStorage.getItem("token");//anywhere possible to find 
                // localStorage.removeItem("token");//token value remove in localstorage
                // localStorage.clear();//total values remove in localstorage
                action.resetForm();
            } catch (err) {
                console.log(err);
            }
            // const token = localStorage.getItem("token");//anywhere possible to find 
            // console.log("token", token);
        }
    })

  return (
    <>
        <div className="w-full h-full flex justify-center">
            <div className="w-1/3 min-w-[480px] flex justify-center items-center">
                <form className="flex flex-col gap-4 w-full items-center" onSubmit={formik.handleSubmit}>
                    <h2 className='text-xl font-bold text-center'>SignIn</h2>
                    {/* <div className="flex items-center w-full justify-between">
                        <p>Username</p>
                        <input className="w-full focus:outline-none border border-black rounded-sm" name='username' onChange={formik.handleChange} value={formik.values.username} />
                        <div className='form-error'>{formik.touched.username && formik.errors.username ? formik.errors.username : null}</div>
                    </div> */}
                    <div className="flex items-center w-full justify-between">
                        <p>email</p>
                        <input className="w-full focus:outline-none border border-black rounded-sm" name='email' onChange={formik.handleChange} value={formik.values.email} />
                        <div className='form-error'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</div>
                    </div>
                    <div className="flex items-center gap-4 w-full justify-between">
                        <label>Password</label>
                        <input className="w-full focus:outline-none border border-black rounded-sm" type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                        <div className='form-error'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <button type="submit" className='p-2 bg-blue-500 transition-all duration-750 hover:bg-blue-700 text-white rounded-md'>SignIn</button>
                        <Link to={PATH.SIGNUP} className='p-2 bg-blue-500 transition-all duration-750 hover:bg-blue-700 text-white rounded-md'>SignUp</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignIn
