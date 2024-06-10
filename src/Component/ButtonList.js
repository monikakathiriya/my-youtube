import React from 'react'



const buttonList = ['All', 'Javascript', 'Java', 'Live', 'Music', 'Songs', 'Vlogs', 'Trending', 'Programming','T-Series','AI'];

function ButtonList() {
    return (
        <div className='py-4'>
            {
                buttonList.map((buttonname, i) => {
                    return <button key={i} className='bg-gray-200 mx-2 font-medium  px-4 py-1 rounded-lg'>{buttonname}</button>
                })
            }
        </div>
    )
}

export default ButtonList
