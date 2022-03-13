import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {
    const { t } = useTranslation();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
    });

    const submitFormHandler = (data) => {
        console.log(data);
    };

    return (
        <React.Fragment>
            <form
                onSubmit={handleSubmit(submitFormHandler)}
                action="#"
                method="post"
                className="flex flex-col w-full mt-4 md:w-6/12"
            >
                <div className="flex flex-col relative">
                    <label htmlFor="username" className="mb-2">
                        {t('Username')}
                    </label>
                    <input
                        {...register('username', {
                            required: t(
                                'The username must be at least 3 characters.'
                            ),
                            minLength: {
                                value: 3,
                                message: t(
                                    'The username must be at least 3 characters.'
                                ),
                            },
                        })}
                        className={`px-4 py-4 rounded-lg border ${
                            errors.username && 'border-red-600'
                        } mb-1 placeholder-dark`}
                        required
                        type="text"
                        name="username"
                        placeholder={t('Enter unique username or email')}
                    />
                </div>
                {/*@error('username')*/}
                <span className="text-sm text-red-600 flex mb-2 mt-1">
                    {errors.username && (
                        <img
                            className="mr-1 w-5 h-5"
                            src={require('../../assets/img/validation/error-warning-fill.png')}
                            alt="error"
                        />
                    )}

                    {errors.username?.message}
                </span>

                <div className="flex flex-col relative">
                    <label htmlFor="email" className="mb-2">
                        {t('Email')}
                    </label>
                    <input
                        {...register('email', {
                            required: t(
                                'The email must be a valid email address.'
                            ),
                        })}
                        className={`px-4 py-4 rounded-lg border ${
                            errors.email && 'border-red-600'
                        } mb-1 placeholder-dark`}
                        required
                        type="email"
                        name="email"
                        placeholder={t('Enter your email')}
                    />

                    {/*@error('email')*/}
                    <span className="text-sm text-red-600 flex mb-2 mt-1">
                        {errors.email && (
                            <img
                                className="mr-1 w-5 h-5"
                                src={require('../../assets/img/validation/error-warning-fill.png')}
                                alt="error"
                            />
                        )}

                        {errors.email?.message}
                    </span>
                </div>

                <div className="flex flex-col relative">
                    <label htmlFor="password" className="mb-2">
                        {t('Password')}
                    </label>
                    <input
                        {...register('password', {
                            required: t(
                                'The password must be at least 3 characters.'
                            ),
                            minLength: {
                                value: 3,
                                message: t(
                                    'The password must be at least 3 characters.'
                                ),
                            },
                        })}
                        className={`px-4 py-4 rounded-lg border ${
                            errors.password && 'border-red-600'
                        } mb-1 placeholder-dark`}
                        required
                        type="password"
                        name="password"
                        id="password"
                        placeholder={t('Fill in password')}
                    />

                    <span className="text-sm text-red-600 flex mb-2 mt-1">
                        {errors.password && (
                            <img
                                className="mr-1 w-5 h-5"
                                src={require('../../assets/img/validation/error-warning-fill.png')}
                                alt="error"
                            />
                        )}

                        {errors.password?.message}
                    </span>
                </div>

                <div className="flex flex-col relative">
                    <label htmlFor="password_confirmation" className="mb-2">
                        {t('Repeat password')}
                    </label>
                    <input
                        {...register('repeatPassword', {
                            required: t(
                                'The password must be at least 3 characters.'
                            ),
                            minLength: {
                                value: 3,
                                message: t(
                                    'The password must be at least 3 characters.'
                                ),
                            },
                        })}
                        id="repeatPassword"
                        className={`px-4 py-4 rounded-lg border ${
                            errors.repeatPassword && 'border-red-600'
                        } mb-1 placeholder-dark`}
                        required
                        type="password"
                        name="repeatPassword"
                        placeholder="Repeat password"
                    />

                    <span className="text-sm text-red-600 flex mb-2 mt-1">
                        {errors.repeatPassword && (
                            <img
                                className="mr-1 w-5 h-5"
                                src={require('../../assets/img/validation/error-warning-fill.png')}
                                alt="error"
                            />
                        )}
                        {errors.repeatPassword?.message}
                    </span>
                </div>

                <div className="flex items-center gap-1">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        className="border border-gray-200 text-success transition duration-100 ease-in rounded-4 form-checkbox"
                    />
                    <label className="ml-1" htmlFor="remember">
                        {t('Remember this device')}
                    </label>
                </div>
                <div>
                    <button
                        type="submit"
                        className="py-4 transition duration-150 ease-in text-white font-semibold
        uppercase hover:bg-hover-success bg-success my-5 w-full rounded-md"
                    >
                        {t('Sign Up')}
                    </button>
                </div>

                <div className="flex items-center justify-center space-x-2">
                    <p className="text-dark">{t('Already have an account?')}</p>
                    <Link className="font-semibold hover:underline" to="/login">
                        {t('Log In')}
                    </Link>
                </div>
            </form>
        </React.Fragment>
    );
};

export default RegisterForm;
