
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Avatar from 'react-avatar';
import { toggleSidebar } from "../../Utils/appSlice";
import { useDispatch } from "react-redux";


const Navbar = () => {
     const dispatch = useDispatch();
  const toggleHandler = () =>{
     dispatch(toggleSidebar());
  }


  return (
    <div className='flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white' >
      <div className='flex w-[96%] py-1 items-center justify-between ' >
        <div className='flex items-center'>
          <GiHamburgerMenu onClick={toggleHandler} size={'24px'} className="cursor-pointer" />
          <img className='px-3' width={"130px"} src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" alt="" />
        </div>
        <div className='flex w-[40%] items-center'>
          <div className='w-[100%] py-2 px-4 border-2 border-gray-400 rounded-l-full'>
            <input type='text' placeholder='search' className=' w-full outline-none ' />
          </div>
          <button className='py-2 px-4 border border-gray-400 rounded-r-full'>< FaSearch size={'24px'} /></button>
        </div>
        <div className='flex w-[10%] justify-between items-center'>
          <MdOutlineVideoCall size={'31px'} className='cursor-pointer' />
          <IoIosNotificationsOutline size={'33px'} className='cursor-pointer' />
          <Avatar src='https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg' size={'40px'} round={true} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
