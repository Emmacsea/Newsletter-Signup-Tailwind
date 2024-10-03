import { useState } from "react";
import signup from "../assets/assets/images/illustration-sign-up-desktop.svg";
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
        <div className="bg-neutral-dslategrey flex justify-center items-center h-screen w-full">
            <div className="flex justify-center items-center bg-neutral-white rounded-lg h-auto w-auto">
                <div className="w-3/5 py-8 px-12">
                    <h2 className="text-neutral-charcoalgrey text-5xl font-bold mb-4 ">Stay updated!</h2>
                    <p className="text-neutral-charcoalgrey text-base font-medium mb-3">Join 60,000+ products managers receiving monthly updates on: </p>
                    <div className="flex flex-col space-y-2">
                        <div className="flex  items-center gap-3">
                            <div><img className="w-4" src={list} alt="" /></div>
                            <p className="text-neutral-charcoalgrey text-base font-medium">Product discovery and building what matters</p>
                        </div>
                        <div className="flex  items-center gap-3">
                            <div><img className="w-4" src={list} alt="" /></div>
                            <p className="text-neutral-charcoalgrey text-base font-medium">Measuring to ensure updates are a success</p>
                        </div>
                        <div className="flex  items-center gap-3">
                            <div><img className="w-4" src={list} alt="" /></div>
                            <p className="text-neutral-charcoalgrey text-base font-medium">And much more!</p>
                        </div>

                    </div>
                        <form action="" onSubmit={submitEmail} method="get">
                            <div className="mt-2">
                                <div className="flex justify-between items-center">
                                <label htmlFor="" className="text-neutral-charcoalgrey text-base font-medium ">Email address</label>
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
                <div className="w-2/5">
                    <img className='h-96' src={signup} alt="" />
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