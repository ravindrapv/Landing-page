import React, { useState } from 'react';

import ForBusines from './ForBusines'
import ForInterviwer from './ForInterviwer'

export default function Form() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <div className=' flex gap-8 mx-16'>
                <div>
                    <button className=' btn-3' onClick={(isVisible) => setIsVisible(isVisible)}>For Business
                    </button>
                </div>
                <div>
                    <button className=' btn-3' onClick={(isVisible) => setIsVisible(!isVisible)}>For Interview
                    </button>
                </div>
            </div>
            {isVisible ? <ForBusines /> : <ForInterviwer />}
        </div>

    )
}

