import React from 'react';
import logoImage from '../../assets/logo (2).png'

const Logo = () => {
    return (
        <div className='flex items-center'>
            <img
                src={logoImage}
                alt="FinEase Logo"
                className="w-12 h-14 rounded-full"
            />
            <span className="text-2xl font-bold text-primary">
                <span className="text-secondary">Loan</span>Link
            </span>
        </div>
    );
};

export default Logo;