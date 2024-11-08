import { FormikHelpers, useFormik } from 'formik';
import './LogReg.css';
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { PATH } from './consts';
import { TReg } from './types';
import axios from "axios";

function LogReg() {
    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required."),
        password: Yup.string().required("Password is required.").length(8, "Password should be longer than 8."),
        password2: Yup.string().required("Confirm password is required.").oneOf([Yup.ref('password'), ""], 'Passwords do not match')
    })
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            password2: ""
        },
        validationSchema,
        onSubmit: async (values: TReg, action: FormikHelpers<TReg>) => {
            try{
                const response = await axios.post("http://localhost:3000/signup", values);
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
                    <h2 className='text-xl font-bold text-center'>LogReg</h2>
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
                    <div className="flex items-center gap-4 w-full justify-between">
                        <label>Confirm</label>
                        <input className="w-full" type="password" name="password2" onChange={formik.handleChange} value={formik.values.password2} />
                        <div className='form-error'>{formik.touched.password && formik.errors.password2 ? formik.errors.password2 : null}</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit">LogReg</button>
                        <Link to={PATH.LOGIN}>LogIn</Link>
                    </div>
                </form>
            </div>
        </div>
    </>

  )
}

export default LogReg
