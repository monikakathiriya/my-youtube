
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Avatar from 'react-avatar';
import { setCategory, setSearchSuggestion, toggleSidebar } from "../../Utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { SEARCH_SUGGESTIONS_API } from "../../Constant/Youtube";
import { CiSearch } from "react-icons/ci";



const Navbar = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();

  const { searchSuggestion } = useSelector((store) => store.app);

  const searchVideo = () => {
    dispatch(setCategory(input));
    setInput("");
  }
  const toggleHandler = () => {
    dispatch(toggleSidebar());
  }

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
      dispatch(setSearchSuggestion(res?.data[1]))
    } catch (error) {
      console.log(error)
    }
  }

  const openSuggestion = () => {
    setSuggestion(true)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200)

    return () => {
      clearTimeout(timer);
    }

  }, [input])


  return (
    <div className='flex fixed top-0 justify-center items-center w-[100%] z-10 bg-white' >
      <div className='flex w-[96%] py-1 items-center justify-between ' >
        <div className='flex items-center'>
          <GiHamburgerMenu onClick={toggleHandler} size={'24px'} className="cursor-pointer" />
          <img className='px-3' width={"130px"} src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" alt="" />
        </div>
        <div className='flex w-[40%] items-center'>
          <div className='flex w-[100%] '>
            <input value={input} onFocus={openSuggestion} onChange={(e) => setInput(e.target.value)} type='text' placeholder='search' className='w-full px-4 py-2 border-2 border-gray-400 rounded-l-full outline-none ' />
          </div>
          <button onClick={searchVideo} className='px-4 py-2 border border-gray-400 rounded-r-full'>< FaSearch size={'24px'} /></button>

          {
            (suggestion && searchSuggestion.length !== 0) &&
            <div className="absolute z-50 py-5 w-[34%] top-4 border border-gray-200 mt-12 shadow-lg bg-white">
              <ul>
                {
                  searchSuggestion.map((text, idx) => {
                    return (
                      <div className="flex items-center px-4 hover:bg-gray-100">
                        <  CiSearch size='20px' />
                        <li className="px-2 py-1 font-medium cursor-pointer text-md">{text}</li>
                        {/* <button>Remove</button> */}
                      </div>
                    )
                  })
                }

              </ul>
            </div>
          }
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
