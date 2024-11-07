import React from 'react';
import { useForm } from 'react-hook-form';

const Forms = () => {
    const { register, handleSubmit, formState: { errors } , reset} = useForm();

    const onSubmitForm = (formData) => {
        console.log(formData);
        reset()
    };

    return (
        <>
            <div>
                React Hook Form
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <label>Name</label>
                    <input
                        {...register('name')}
                        type='text'
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

                    <label>Password</label>
                    <input
                        {...register('password', {
                            minLength: { value: 8, message: 'Password must be at least 8 characters long' }
                        })}
                        type='password'
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
 

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    );
};

export default Forms;
