import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center bg-gradient-to-br from-[#EEF2FF] via-[#F5F3FF] to-[#FDF4FF] py-16 rounded-2xl my-6'>
            <div className='flex flex-col gap-5'>
                <span className='mx-auto px-4 py-2 rounded-full bg-[#EDE9FE] text-[#7C3AED] font-semibold border border-[#C4B5FD] text-sm tracking-wide'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold text-[#1E1B4B]'>Search, Apply & <br /> Get Your <span className='text-[#7C3AED]'>Dream Jobs</span></h1>
                <p className='text-gray-500 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <div className='flex w-[40%] shadow-md border border-[#C4B5FD] pl-3 rounded-full items-center gap-4 mx-auto bg-white'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-gray-700'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#7C3AED] hover:bg-[#6D28D9]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection