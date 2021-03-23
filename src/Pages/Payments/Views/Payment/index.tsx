import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, LiquidButton, RadioButton, Section } from '../../../../Components';
import { InputType } from '../../../../Components/Input';
import { LiquidButtonSize } from '../../../../Components/LiquidButton';

import './styles.css';

const PLANS = [
    {
        text: 'Basic',
        color: 'var(--color-red)'
    },
    {
        text: 'Advanced',
        color: 'var(--color-yellow)'
    },
    {
        text: 'Pro',
        color: 'var(--color-blue)'
    },
]

const Payment: React.FC = () => {

    const [selectedPlan, selectPlan] = useState(-1);


    return (
        <Section header color="white" padding height=''>

            <div className="Payment">

                <p className="MegaText">Payment</p>

                <div
                    className="PaymentStep"
                    style={{
                        marginBottom: 64
                    }}
                >

                    <p className="PaymentStepTitle">1. Select your plan</p>

                    <div className="PlanContainer">
                        {
                            PLANS.map(
                                (plan, index) => (
                                    <RadioButton
                                        selected={index === selectedPlan}
                                        onSelect={() => selectPlan(index)}
                                        color={plan.color}
                                        text={plan.text}
                                    />
                                )
                            )
                        }
                    </div>

                </div>


                <div className="MultiStep">

                    <div className="PaymentStep">

                        <p className="PaymentStepTitle">2. Billing Information</p>


                        <Input
                            type={InputType.Text}
                            title="Full Name"
                        />

                        <Input
                            type={InputType.Text}
                            title="Billing Address"
                        />


                        <div className="InputRow">

                            <div className="InputColumn">
                                <Input
                                    type={InputType.Text}
                                    title="City"
                                />
                            </div>


                            <div className="InputColumn">
                                <Input
                                    type={InputType.Text}
                                    title="Postal Code"
                                />
                            </div>

                        </div>

                        <Input
                            type={InputType.Select}
                            title="Country"
                        />


                    </div>

                    <div className="PaymentStep">

                        <p className="PaymentStepTitle">3. Credit Card Information</p>

                        <Input
                            type={InputType.Text}
                            title="Cardholder's Name"
                        />

                        <Input
                            type={InputType.Text}
                            title="Card Number"
                        />

                        <div className="InputRow">

                            <div className="InputColumn">
                                <Input
                                    type={InputType.Text}
                                    title="Expiry Month"
                                />
                            </div>


                            <div className="InputColumn">
                                <Input
                                    type={InputType.Text}
                                    title="Expiry Year"
                                />
                            </div>

                        </div>

                        <Input
                            type={InputType.Text}
                            title="CVV"
                        />


                    </div>

                </div>

                <div className="MultiStep">

                    <div className="PaymentStep">
                        <p className="Disclaimer">
                            By continuing, I acknowledge that I've read and agree to 
                            the <Link to="/terms">Terms of Service</Link> & <Link to="/privacy">Privacy Policy</Link>.
                </p>
                        <LiquidButton text="Download" action={() => { }} size={LiquidButtonSize.Small} />

                    </div>

                </div>



            </div>


        </Section>
    )

}

export default Payment;