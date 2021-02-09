import React from 'react';

const TextBlock = ({title, text}) => {
    return(
        <div className='text-block'>
            <div className='container'>
                <div className="box">
                    <h2 className='title'>{title}</h2>
                    <p className='text'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default TextBlock;
