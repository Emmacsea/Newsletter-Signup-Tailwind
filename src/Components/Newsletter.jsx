import { useState } from "react";
import signupdesktop from "../assets/assets/images/illustration-sign-up-desktop.svg";
import signupmobile from "../assets/assets/images/illustration-sign-up-mobile.svg";
import list from "../assets/assets/images/icon-list.svg";
import PropTypes from 'prop-types';

export default function Newsletter ({
    emailaddress,
    onChangeEmailAddress,
    onSubmitEmailAddress,
}) {
    const [error, setError] = useState(null);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const submitEmail = (e) => {
        e.preventDefault();

        if(!emailaddress || !validateEmail(emailaddress)){
            setError(`Valid email required!`);
            return;
        }

        setError(null);
        onSubmitEmailAddress();

    }


    return (
        <div className="bg-neutral-dslategrey flex justify-center items-center md:h-screen h-full md:px-0 md:py-0 px-10 py-3">
            <div className="flex md:flex-row flex-col-reverse justify-center items-center bg-neutral-white md:rounded-lg rounded-none h-auto w-auto">
                <div className="md:w-3/5 md:py-8 md:px-12 px-4">
                    <h2 className="text-neutral-charcoalgrey md:text-5xl text-4xl font-bold mb-4 md:mt-0 mt-4 ">Stay updated!</h2>
                    <p className="text-neutral-charcoalgrey text-base font-medium mb-3">Join 60,000+ products managers receiving monthly updates on: </p>
                    <div className="flex flex-col space-y-2 items-start ">
                        <div className="flex md:gap-3 space-x-3">
                            <div><img className="md:w-4 md:h-4 w-6 h-6" src={list} alt="" /></div>
                            <p className="text-neutral-charcoalgrey text-base font-medium">Product discovery and building what matters</p>
                        </div>
                        <div className="flex md:gap-3 space-x-3">
                        <div><img className="md:w-4 md:h-4 w-6 h-6" src={list} alt="" /></div>
                            <p className="text-neutral-charcoalgrey text-base font-medium">Measuring to ensure updates are a success</p>
                        </div>
                        <div className="flex md:gap-3  space-x-3">
                        <div><img className="md:w-4 md:h-4 w-5 h-5" src={list} alt="" /></div>
                            <p className="text-neutral-charcoalgrey text-base font-medium">And much more!</p>
                        </div>

                    </div>
                        <form action="" onSubmit={submitEmail} method="get">
                            <div className="md:mt-2 mt-7">
                                <div className="flex justify-between items-center">
                                <label htmlFor="" className="text-neutral-charcoalgrey md:text-base text-sm md:font-medium font-bold">Email address</label>
                                {error && (
                                    <p className="text-primary-tomato text-sm font-medium">{error}</p>
                                )}
                                </div>                                
                                <input className={`inp ${
                                    error ? "bg-neutral-grey" : "bg-transparent",
                                    error ? "placeholder:text-primary-tomato" : "placeholder:text-neutral-grey",
                                    error ? "border-primary-tomato" : "border-neutral-grey"
                                }`} type="text" value={emailaddress} onChange={onChangeEmailAddress} placeholder="email@company.com" />                                
                                
                            </div>
                            <div>
                                <button type="submit" className="btn">Subscribe to monthly newsletter</button>
                            </div>
                        </form>

                </div>
                <div className="md:w-2/5 w-full ">
                    <img className='md:block hidden md:h-96' src={signupdesktop} alt="" />
                    <img className='md:hidden blockmd:h-96' src={signupmobile} alt="" />
                </div>

            </div>

        </div>
    )
}
Newsletter.propTypes = {
    emailaddress: PropTypes.string.isRequired,
    onChangeEmailAddress: PropTypes.func.isRequired,
    onSubmitEmailAddress: PropTypes.func.isRequired,
}