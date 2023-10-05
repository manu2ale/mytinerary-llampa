
import { Link as Anchor } from 'react-router-dom';
export default function CardCity({ imgUrl, city, country, id }) {

  return (
    <Anchor to={'/city/' + id} className='flex group w-[174px] h-[120px] relative hover:cursor-pointer hover:outline outline-offset-0 outline-teal-500 rounded-2xl overflow-hidden text-white font-semibold
                                        sm:w-[374px] sm:h-[250px]
    '>
      <img className='object-cover origin-bottom group-hover:scale-105 duration-500 ease-in-out' src={imgUrl} />
      
      <p className='absolute top-0 border-t-2 h-8 w-full text-center group-hover:translate-y-20 duration-500 ease-in-out align-middle text-xl sm:text-2xl bg-teal-500/50 backdrop-blur-sm rounded-t-2xl'>{city}</p>
      <p className='absolute top-8 border-b-2 h-8 w-full text-center align-middle group-hover:translate-y-20 duration-500 ease-in-out bg-teal-500/50 backdrop-blur-sm rounded-b-2xl'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 23" fill="white" className="w-5 h-5 inline">
          <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
        </svg>
        {country}
      </p>
    </Anchor>
  )
}
