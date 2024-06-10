import React from 'react'
import { IoHome } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';


const sidebarItem = [
  {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  },
  {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  }, {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  }, {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  }, {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  }, {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  }, {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  }, {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  }, {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  }, {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  }, {
    icons: <IoHome size='24px' />,
    title: "Home"
  },
  {
    icons: <SiYoutubeshorts size='24px' />,
    title: "Shorts"
  },
  {
    icons: < MdSubscriptions size='30px' />,
    title: "Subscription"
  },
]

const Sidebar = () => {
  const open = useSelector((state) => state.app.open);
  console.log(open)
  return (
    <div className={` ml-6 relative left-0 ${open ? "w-[20%]" :"w-[8%]"} p-5 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden`}>

      {
        sidebarItem.map((item, i) => {
          return (
            <div key={i} className='flex my-3 ml-2'>
              {item.icons}
              <h4 className={`ml-5 ${open ? " " : 'hidden'}`}>{item.title}</h4>
            </div>
          )

        })
      }

    </div>
  )
}

export default Sidebar
