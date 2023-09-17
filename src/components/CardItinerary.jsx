import { useEffect,useState } from "react";
import Activities from "./Activities";
import { useSelector,useDispatch } from "react-redux";
import like_actions from "../store/actions/likes";
const { already_liked,read_likes,like_dislike } = like_actions

export default function CardItinerary({data, index}) {
    const user = useSelector(store=>store.users?.user);
    const [isLiked,setIsLiked] = useState();
    const [totalLikes,setTotalLikes] = useState();
    const [show,setShow] = useState(false);
    const [viewMore,setViewMore] = useState(false);
    const dispatch = useDispatch();
    let priceArray = [];
    const repeatMoney = ()=>{for (let i=1;i<=data.price;i++) {  priceArray.push(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-green-700 inline w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>) }}

    function likeDislike(){
      dispatch(like_dislike({itinerary_id: data._id}));
      setIsLiked(!isLiked)
    }
    
    useEffect(
      ()=>{
        dispatch(already_liked( {itinerary_id: data._id} ))
        .then(response => setIsLiked(response.payload.isLiked))
        .catch(err => console.log(err));
        dispatch(read_likes( data._id ))
        .then(response => setTotalLikes(response.payload.countLikes))
        .catch(err => console.log(err));
      },[isLiked]
      );
      
  return (
    <div key={index} className="flex flex-col items-center my-6 max-w-2xl max-h-fit hover:drop-shadow-lg bg-white border-2 rounded-xl">
      <h1 className="py-5 text-center text-3xl font-semibold">{data.name}</h1>
      <img className="w-11/12 border border-black/30 rounded aspect-video object-cover" src={data.photo} alt="itinerary photo" />
      <div className="flex justify-between items-center w-11/12 px-1 py-6">
        <div>
          <svg onClick={likeDislike} className="w-6 h-6 inline cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill={isLiked?"#DC143C":"none"} viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <span> {totalLikes} </span>
        </div>
        <svg onClick={()=>setShow(!show)} className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d={show?"M4.5 15.75l7.5-7.5 7.5 7.5":"M19.5 8.25l-7.5 7.5-7.5-7.5"} />
        </svg>
      </div>
      {show&&
      <div className="flex flex-col items-center w-11/12">
        <div className="flex w-full flex-wrap justify-between">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-base">User:</p>
            <img className="object-cover w-12 h-12 rounded-full border-2 border-[#4F46E5]" src={data.city_id.admin_id.photo} alt="User photo" />
            <p>{data.city_id.admin_id.name + " " + data.city_id.admin_id.lastName}</p>
          </div>            
          <div className="text-center ">
            <p className="font-semibold text-base">Price:</p>
            {repeatMoney()}
            {priceArray.map((each,index)=><span key={index}>{each}</span>)}
          </div>
          <div className="text-center">
            <p className="font-semibold text-base">Duration:</p>
            <p>{ data.duration } hrs</p>
          </div>
          <div className="flex flex-col sm:block sm:text-center">
            <p className="font-semibold">Hashtags:</p>
            { data.tags.map( (tag,index)=><span key={index} className="italic">{ tag } </span>) }
          </div>
        </div>
        <button onClick={()=>setViewMore(!viewMore)} className="w-36 bg-teal-500 hover:bg-teal-600 py-2 my-6 rounded-lg text-xl text-white">{viewMore?'Hide':'View More'}</button>
        {viewMore&& 
          <>
          <Activities id={data._id} />
          {/* Comments */}
          <div className="flex flex-col mb-6 p-2 text-sm border border-gray-400 rounded-xl shadow-lg">
            <h1 className="font-bold text-xl text-center">Comments <span className="text-sm bg-teal-500 text-white px-3 py-1 rounded-full">2</span></h1>
            <div className="flex flex-col h-52 gap-3 border-2 rounded-lg p-2 my-2 overflow-y-auto overscroll-contain" style={{scrollbarWidth:"thin"}}>
                <div className="flex my-2">
                  <img className="inline-block select-none mr-3 ring-1 ring-purple-600 to ring-offset-1 rounded-full object-cover w-8 h-8 group-hover:drop-shadow-md"            src={user.photo || 'https://w7.pngwing.com/pngs/867/694/png-transparent-user-profile-default-computer-icons-network-video-recorder-avatar-cartoon-maker-blue-text-logo.png'} alt="profile photo"/>
                  <div className="p-2 rounded-lg bg-slate-100">
                    <div className="flex justify-between">
                      <span className="font-bold select-none">{user.name || 'Visitor'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil laboriosam commodi, porro corporis illum ut. Molestiae, debitis delectus. Nihil recusandae provident sit perspiciatis explicabo nisi dicta tempora aliquam commodi?</p>                  
                  </div>
                </div>
                <div className="flex my-2">
                  <img className="inline-block select-none mr-3 ring-1 ring-purple-600 to ring-offset-1 rounded-full object-cover w-8 h-8 group-hover:drop-shadow-md"            src={user.photo || 'https://w7.pngwing.com/pngs/867/694/png-transparent-user-profile-default-computer-icons-network-video-recorder-avatar-cartoon-maker-blue-text-logo.png'} alt="profile photo"/>
                  <div className="p-2 rounded-lg bg-slate-100">
                    <div className="flex justify-between">
                      <span className="font-bold select-none">{user.name || 'Visitor'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci nihil laboriosam commodi, porro corporis illum ut. Molestiae, debitis delectus. Nihil recusandae provident sit perspiciatis explicabo nisi dicta tempora aliquam commodi?</p>                  
                  </div>
                </div>
            </div>
            <div className="flex items-center">
              <img className="inline select-none mr-3 ring-1 ring-purple-600 ring-offset-1 rounded-full object-cover w-8 h-8 group-hover:drop-shadow-md"            src={user.photo || 'https://w7.pngwing.com/pngs/867/694/png-transparent-user-profile-default-computer-icons-network-video-recorder-avatar-cartoon-maker-blue-text-logo.png'} alt="profile photo"/>
              <div className="flex w-full relative">
                <input className="flex px-4 py-3 w-full outline-none bg-gray-300 rounded-full text-base focus:bg-gray-200" type="text" placeholder="Leave a comment..."/>
                <button className="absolute right-4 top-2 border bg-slate-50 border-neutral-400 rounded-full p-1 hover:text-white hover:bg-teal-500 active:bg-teal-300">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          </>
        }
      </div>
      }
    </div>  
  )
}
