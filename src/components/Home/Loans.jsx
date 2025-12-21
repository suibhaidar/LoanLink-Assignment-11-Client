import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Card from './Card';
import LoadingSpinner from '../Shared/LoadingSpinner';


const Loans = () => {
    const { data: loans = [], isLoading } = useQuery({
        queryKey: ['Available Loans'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/loans?limit=6`)
            return result.data
        },
        
    })
    console.log(loans)
    if (isLoading) return <LoadingSpinner />
    return (
        <div>
           {loans && loans.length > 0 ? (
                <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {loans.map(loan => (
                        <Card key={loan._id} loan={loan} />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Loans;