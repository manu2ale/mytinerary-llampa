import { useEffect,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import like_actions from "../store/actions/likes";
const { already_liked,read_likes,like_dislike } = like_actions
import Activities from "./Activities";
import Comments from "./Comments";

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
        user.name&&dispatch(already_liked( {itinerary_id: data._id} ))
        .then(response => setIsLiked(response.payload.isLiked))
        .catch(err => console.log(err));
        dispatch(read_likes( data._id ))
        .then(response => setTotalLikes(response.payload.countLikes))
        .catch(err => console.log(err));
      },[isLiked]
      );
      
  return (
    <div key={index} className="flex flex-col items-center my-2 max-w-2xl max-h-fit hover:drop-shadow-lg bg-white border-2 rounded-xl">
      <h1 className="py-5 text-center text-2xl font-semibold">{data.name}</h1>
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
              <Comments itinerary_id={data._id} user={user} />
            </>
          }
        </div>
      }
    </div>  
  )
}
