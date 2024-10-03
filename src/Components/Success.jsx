import success from "../assets/assets/images/icon-success.svg";
import PropTypes from 'prop-types';

export const Successstate = ({
    email,
    onClickDismiss,
}) => {
    return(
        <div className="bg-neutral-dslategrey flex justify-center items-center h-screen w-full">
            <div className="bg-neutral-white rounded-lg py-7 px-7 flex flex-col justify-center items-start w-80">
                <div><img className="w-9" src={success} alt="" /></div>

                <div>
                    <h2 className="text-neutral-charcoalgrey text-5xl font-bold my-4">Thanks for subscribing</h2>
                    <p className="text-neutral-dslategrey text-base font-medium">
                        A confirmation email has been sent to <span className="text-neutral-charcoalgrey">{email}</span>. Please open 
                        it and click the button inside to confirm your subscription.
                    </p>

                    <button type="click" onClick={onClickDismiss} className="btn">Dismiss message</button>
                </div>

            </div>


        </div>
    )
}
Successstate.propTypes = {
    email: PropTypes.string.isRequired,
    onClickDismiss: PropTypes.func.isRequired,
}