import React from 'react';
import { MdMusicNote } from 'react-icons/md';
import { useHistory } from 'react-router';
import { RoundedButton } from '../../../../Components';


import './styles.css';  

type ModelProps = {
    tier: string,
    period: string,
    cost: number,
    features: string[],
    color: any,
    width: any
}

const Model: React.FC<ModelProps> = ({
    tier = '',
    period = '',
    cost = 0,
    features = [],
    color = '',
    width = ''
}) => {

    const history = useHistory();

    return (
        <div 
            className="Model"
            style={{
                width: width
            }}
        >

            <div 
                className="Colored"
                style={{
                    color: color
                }}
            >
                <p className="Tier">
                    { tier }
                </p>

                <div className="ModelLine"
                    style={{
                        backgroundColor: color
                    }}
                />

                <p className="Period">
                    { period }
                </p>

                <p className="Cost">
                    ${ cost }
                </p>

            </div>

            {
                features.map(
                    feature => (
                        <div className="Feature">
                            <MdMusicNote size={24}/>
                            <p>{ feature }</p>
                        </div>
                    )
                )
            }

            <RoundedButton
                text={"Select"}
                backroundColor={color}
                textColor={'white'}
                action={() => history.push("/payments")}

            />

        </div>
    )

}

export default Model;