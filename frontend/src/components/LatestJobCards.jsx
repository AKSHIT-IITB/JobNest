import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='p-5 rounded-xl shadow-md bg-white border border-[#EDE9FE] cursor-pointer hover:shadow-lg hover:border-[#C4B5FD] transition-all duration-200'>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-[#0891B2] bg-[#ECFEFF] font-semibold'} variant="ghost">{job?.position} Positions</Badge>
                <Badge className={'text-[#D97706] bg-[#FFFBEB] font-semibold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#059669] bg-[#ECFDF5] font-semibold'} variant="ghost">{job?.salary}LPA</Badge>
            </div>

        </div>
    )
}

export default LatestJobCards