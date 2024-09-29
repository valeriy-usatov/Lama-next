'use client';
import { useRouter } from "next/navigation";
import { useState } from "react"
import Image from 'next/image';

const SearchBar = () => {
    const [search, setSearch]=useState('');
    const router = useRouter()

    const handleSearch = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        // router.push(`/search/${search}`)
        router.push(`/list?name=${search}`)
    }

  return (
    <form className="flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
      <input type="text" placeholder="Search" name='name' className='flex-1 bg-transparent outline-none' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button className="cursor-pointer">
        <Image src="/search.png" width={16} height={16} alt="" />
      </button>
    </form>
  );
}; 

export default SearchBar;
