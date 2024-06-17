import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCategory } from '../Utils/appSlice';



const buttonList = ['All', 'Javascript', 'Java', 'Live', 'Music', 'Songs', 'Vlogs','Server','Skills','Gaming', 'Trending', 'Programming','New to you','T-Series','AI','News','Technology','Comedy','Cricket'];

function ButtonList() {
    const[active,setActive] = useState("All");
    const dispatch = useDispatch()

    const videoByTag = (tag) =>{
        if(active != tag){
            dispatch(setCategory(tag    ))
            setActive(tag);
        }

    }
    return (
        <div className='flex w-full py-4 overflow-x-scroll no-scrollbar'>
            {
                buttonList.map((buttonname, i) => {
                    return (
                    <div key={i}>
                        <button onClick={()=>{videoByTag(buttonname)}} className={`${active == buttonname ? "bg-black text-white":"bg-gray-200"} px-4 py-2 mx-2 font-medium  rounded-lg`}>
                            <span className='my-1 whitespace-nowrap'>{buttonname}</span></button>
                        </div>
                    )
                })
            };
        </div>
    )
}

export default ButtonList
