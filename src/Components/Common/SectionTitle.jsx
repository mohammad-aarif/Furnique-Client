import React from 'react';

const SectionTitle = ({title, subtitle}) => {
    const line ={
        background: '#ffa600',
        height: '3px',
        width: '25px'
    }
    return (
        <div className='text-center pb-4'>
            <div className="flex items-center justify-center">
                <div style={line}></div>
                <h2 className='text-2xl px-2 font-bold'>{title}</h2>
                <div style={line}></div>
            </div>
            <h4 className='text-lg upp'>{subtitle}</h4>
        </div>
    );
};

export default SectionTitle;