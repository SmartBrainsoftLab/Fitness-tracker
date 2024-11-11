import { FormikHelpers, useFormik } from 'formik';
import './SignIn.css';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { PATH } from '../../consts';
import { TSignIn } from '../../types';
import axios from "axios";

function SignIn() {
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required."),
        password: Yup.string().required("Password is required.").length(8, "Password should be longer than 8."),
    })
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values: TSignIn, action: FormikHelpers<TSignIn>) => {
            try{
                const response = await axios.post("http://localhost:3000/signin", values);
                action.resetForm();
            } catch (err) {
                console.log(err);
            }
        }
    })

  return (
    <>
        <div className="w-full h-full flex justify-center">
            <div className="w-1/3 min-w-[480px] flex justify-center items-center">
                <form className="flex flex-col gap-4 w-full" onSubmit={formik.handleSubmit}>
                    <h2 className='text-xl font-bold text-center'>SignIn</h2>
                    <div className="flex items-center gap-4 w-full justify-between">
                        <label>Username</label>
                        <input className="w-full" name='username' onChange={formik.handleChange} value={formik.values.username} />
                        <div className='form-error'>{formik.touched.username && formik.errors.username ? formik.errors.username : null}</div>
                    </div>
                    <div className="flex items-center gap-4 w-full justify-between">
                        <label>Password</label>
                        <input className="w-full" type="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                        <div className='form-error'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <button type="submit">LogReg</button>
                        <Link to={PATH.SIGNIN}>SignIn</Link>
                    </div>
                </form>
            </div>
        </div>
    </>

  )
}

export default SignIn
