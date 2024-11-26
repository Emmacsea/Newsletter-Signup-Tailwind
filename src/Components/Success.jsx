import success from "../assets/assets/images/icon-success.svg";
import PropTypes from 'prop-types';

export const Successstate = ({
    email,
    onClickDismiss,
}) => {
    return(
        <div className="bg-neutral-dslategrey flex justify-center items-center h-screen md:py-0 py-5">
            <div className="bg-neutral-white md:rounded-lg md:py-7 md:pt-0 pt-24 md:px-7 px-5 flex flex-col justify-center items-start w-80 md:h-auto h-full">
                <div><img className="w-9" src={success} alt="" /></div>

                <div>
                    <h2 className="text-neutral-charcoalgrey text-5xl font-bold my-4">Thanks for subscribing</h2>
                    <p className="text-neutral-dslategrey text-base font-medium">
                        A confirmation email has been sent to <span className="text-neutral-charcoalgrey font-extrabold">{email}</span>. Please open 
                        it and click the button inside to confirm your subscription.
                    </p>

                    <button type="click" onClick={onClickDismiss} className="dismiss-btn">Dismiss message</button>
                </div>

            </div>


        </div>
    )
}
Successstate.propTypes = {
    email: PropTypes.string.isRequired,
    onClickDismiss: PropTypes.func.isRequired,
}