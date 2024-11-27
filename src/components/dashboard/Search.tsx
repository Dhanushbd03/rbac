import React from 'react'
import { Input } from '@/components/ui/input';
import {Search as Icon } from 'lucide-react';

const Search = () => {
  return (
    <div className='px-5 relative'>
        <Input className='relative pl-10 w-96' placeholder='Search'/>
        <Icon  className='absolute top-2 left-7 text-gray-500'/>
    </div>
  )
}

export default Search