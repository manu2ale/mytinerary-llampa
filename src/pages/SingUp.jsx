import { useRef,useState } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signup } = user_actions
import Swal from "sweetalert2";


export default function SingUp() {
    let countries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bonaire",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "Colombia",
        "Comoros",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea",
        "Kuwait",
        "Kyrgyzstan",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom of Great Britain and Northern Ireland",
        "United States Minor Outlying Islands",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ];
    const [viewPass,setViewPass] = useState(false);
    let dispatch = useDispatch();
    const navigate = useNavigate()

    const name= useRef();
    const lastName= useRef();
    const mail= useRef();
    const password= useRef();
    const photo= useRef();
    const country= useRef();

    function handleSingUp(e) {
        e.preventDefault();
        let data = {
            name: name.current.value.trim(),
            lastName: lastName.current.value.trim(),
            mail: mail.current.value.trim(),
            photo: photo.current.value.trim(),
            password: password.current.value,
            country: country.current.value
        }
        !data.photo && delete data.photo;
        dispatch(signup(data))
        .then(res=>{
            if (res.payload.success){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registered, please loggin',
                    showConfirmButton: false,
                    timer: 2000
                  })
                navigate('/signin')
            } else if (res.payload.messages.length>0){
                let html = res.payload.messages.map(each=>`<p>${each}</p>`).join('')
                Swal.fire({
                    title: 'Something went wrong',
                    icon: 'error',
                    html
                  })
            }
            })
        .catch(err=>console.log(err))
    }
  return (
    <div className="flex flex-wrap w-full min-h-screen justify-center items-center bg-cover bg-center md:gap-12 xl:gap-48" style={{backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),url('../img/backgroundLog.jpg')`}}>
        <div>
            <img className="w-[512px] hidden md:inline" src="/img/whitelogo.png" alt="Logo" />
            <p className="text-[#FAF9F6] text-2xl text-center w-[512px] md:mt-8">Find your perfect trip, designed by insiders who know and love their cities!</p>
        </div>
        <div className="flex flex-col p-12 rounded-md bg-[#FAF9F6] ">
            <h1 className="text-4xl font-semibold text-[#343231]">Create account</h1>
            <p className="my-6">Already have an account? <Anchor to={'/signin'} className="text-blue-600">Sign In</Anchor></p>
            <form onSubmit={handleSingUp} className="flex flex-col text-gray-600">
                <div className="flex  mb-3 flex-col sm:flex-row sm:gap-x-2">
                    <div className="flex flex-col mb-3 sm:mb-0">
                        <label>First Name:</label>
                        <input className="outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231] bg-[#FAF9F6]" ref={name} type="text" name="name" id="name"/>
                    </div>
                    <div className="flex flex-col">
                        <label>Last Name:</label>
                        <input className="outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231] bg-[#FAF9F6]" ref={lastName} type="text" name="lastName" id="name"/>
                    </div>
                </div>
                <label>Email:</label>
                <input className="mb-3 outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231] bg-[#FAF9F6]" ref={mail} type="email" name="mail" id="mail"/>
                <label>Password:</label>
                <div className='relative'>
                    <input className="z-0 w-full mb-3 outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231] bg-[#FAF9F6]" ref={password} type={viewPass?"text":"password"} name="password" id="password"/>
                    {viewPass?
                    <svg onClick={()=>setViewPass(!viewPass)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-[#FAF9F6] absolute top-0 right-0 z-10 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>                  
                    :<svg onClick={()=>setViewPass(!viewPass)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-[#FAF9F6] absolute top-0 right-0 z-10 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>}
                </div>
                <label>Photo URL:</label>
                <input className="mb-3 outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231] bg-[#FAF9F6]" ref={photo} type="url" name="photo" id="photo"/>
                <label >Country:</label>
                <select className="mb-3 outline-none focus:border-blue-400 cursor-pointer border-b border-gray-600 text-[#343231] bg-[#FAF9F6]"  ref={country} defaultValue="" name="country" id="country">
                    <option value="" disabled hidden></option>
                    {countries.map((country,index)=> <option value={country} key={index}>{country}</option>)}
                </select>
                <input className="self-end mt-7 w-fit bg-teal-500 hover:bg-teal-600 py-2 px-2 rounded-lg text-lg font-semibold text-white cursor-pointer sm:text-xl sm:px-10" type="submit" value="Register"/>
            </form>
            <button className="flex justify-center items-center mt-8 hover:bg-slate-200 py-2 border border-gray-600 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" className="border-2 inline rounded-full" viewBox="0 0 48 48">
                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                <h1>Sign Up With Google</h1>
            </button>
        </div>
    </div>
  )
}