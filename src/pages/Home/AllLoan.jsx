import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import Container from '../../components/Shared/Container';
import Card from '../../components/Home/Card';

const AllLoan = () => {

    const { data: loans = [], isLoading } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/loans`)
            return result.data
        },

    })
    if (isLoading) return <LoadingSpinner />
    return (
        <Container>
            {loans && loans.length > 0 ? (
                <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-base-300 p-5'>
                    {loans.map(loan => (
                        <Card key={loan._id} loan={loan} />
                    ))}
                </div>
            ) : null}
        </Container>
    );
};

export default AllLoan;