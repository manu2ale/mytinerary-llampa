import { Link as Anchor, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import user_actions from '../store/actions/users.js'
const { signout } = user_actions
import Swal from 'sweetalert2'

export default function NavBar() {
  let userMenu = useRef();
  let [show, setShow] = useState(false);
  let [dropMenu, setDropMenu] = useState(false);
  let { name, photo } = useSelector(store => store.users?.user);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseMenu = (event) => {
    if (userMenu) {
      const isClickInside = userMenu.current?.contains(event.target)
      if (userMenu.current !== event.target && !isClickInside) {
        setDropMenu(false)
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleCloseMenu)
    return () => document.removeEventListener('click', handleCloseMenu)
  }, []);

  function logout() {
    dispatch(signout())
      .then(res => {
        if (res.payload.success) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Logged Out',
            showConfirmButton: false,
            timer: 2000
          })
          window.location.reload()
          navigate('/')
        } else if (res.payload.messages.length > 0) {
          let html = res.payload.messages.map(each => `<p>${each}</p>`).join('')
          Swal.fire({
            title: 'Something went wrong',
            icon: 'error',
            html
          })
        }
      })
      .catch(err => console.log(err))
  };

  return (
    <header className="z-50 bg-[#FAF9F6] fixed w-full h-[50px] flex justify-center items-center border-b-2
      sm:h-[70px]"
    >
      <nav className="flex select-none flex-wrap font-bold text-lg w-full justify-between items-center
            xl:w-[95%]
            2xl:w-[80%]"
      >
        <Anchor to='/home'><img className='w-[120px] ml-2 hover:drop-shadow-md' src="/img/logo.png" alt="LogoNav" /></Anchor>

        <svg onClick={() => setShow(!show)} className="w-9 h-9 me-2 cursor-pointer sm:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {show && (
          <ul onClick={() => setShow(!show)} className="absolute z-10 top-[50px] flex flex-col justify-center items-center w-full gap-1 py-2 bg-white sm:hidden">
            <li className='flex w-full'><Anchor className="w-full text-center" to='/'>Home</Anchor></li>
            <li className='flex w-full'><Anchor className="w-full text-center" to='/cities'>Cities</Anchor></li>
            {name ?
              <>
                <li className='flex w-full'><Anchor onClick={() => dispatch(signout())} className="w-full bg-[#4F46E5] py-2 px-5 text-white text-center">Log Out</Anchor></li>
                <li>
                  <span>{name}</span>
                  <img src={photo} alt="Profile photo" className='inline rounded-full ml-2 object-cover w-14 h-14' />
                </li>
              </>
              :
              <>
                <li className='flex w-full'><Anchor to={'/signin'} className="w-full bg-[#4F46E5] py-2 px-5 text-white text-center">Sign In</Anchor></li>
                <li className='flex w-full'><Anchor to={'/signup'} className="w-full bg-[#4F46E5] py-2 px-5 text-white text-center">Sign Up</Anchor></li>
              </>
            }
          </ul>
        )
        }

        <ul className="hidden 
            sm:flex sm:items-center"
        >
          <li><Anchor to='/' className='py-4 px-5 rounded-lg hover:shadow-md active:bg-slate-100'>Home</Anchor></li>
          <li><Anchor to='/cities' className='py-4 px-5 rounded-lg hover:shadow-md active:bg-slate-100'>Cities</Anchor></li>

          {name ?
            <>
              <li ref={userMenu} className='inline-block relative cursor-pointer group mr-2 pl-5 py-1.5 pr-1 rounded-xl bg-teal-500 hover:bg-teal-600  hover:shadow-md active:bg-teal-700'>
                <button onClick={() => setDropMenu(!dropMenu)}>
                  <span className='mr-2 group-hover:drop-shadow-lg text-[#FAF9F6]'>{name}</span>
                  <img src={photo} alt="Profile photo" className='inline mr-1 bg-white rounded-full object-cover w-11 h-11 group-hover:drop-shadow-md' />
                </button>
                {dropMenu &&
                  <div onClick={() => setDropMenu(!dropMenu)} className='flex flex-col absolute right-0 mt-2 py-1 border-2 rounded-lg z-50 w-40 text-center divide-y bg-[#FAF9F6] shadow-lg text-base font-semibold'>
                    <Anchor to={'/profile'} className='font-semibold hover:bg-slate-200'>Profile</Anchor>
                    <Anchor onClick={logout} className='hover:bg-slate-200 text-rose-600'>Sign Out</Anchor>
                  </div>}
              </li>
            </>
            :
            <>
              <li className='divide-x'>
                <Anchor to='/signin' className='py-4 px-5 rounded-lg hover:shadow-md active:bg-slate-100'>Sign In</Anchor>
                <Anchor to='/signup' className='py-4 px-5 rounded-lg hover:shadow-md active:bg-slate-100 '>Sign Up</Anchor>
              </li>
            </>
          }
        </ul>
      </nav>
    </header>
  )
}
