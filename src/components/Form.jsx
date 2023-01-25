import React, { useState } from 'react';

import ForBusines from './ForBusines'
import ForInterviwer from './ForInterviwer'

export default function Form() {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className=' lg:p-24 sm:p-0'>
            <div className=' my-8 text-center'>
                <h1 className="text-3xl font-normal text-blue-600 capitalize lg:text-4xl dark:text-white">Contact Us</h1>
                <div className="mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full" />
                    <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full" />
                </div>
            </div>
            <div className=' flex gap-8 mx-16'>
                <div>
                    <button className={'btn-3'} onClick={(isVisible) => setIsVisible(isVisible)}>For Business
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

