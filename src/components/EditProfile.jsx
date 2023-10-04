import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import user_actions from '../store/actions/users'
const { update_user } = user_actions

export default function EditProfile() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.users?.user);
    let name = useRef();
    let lastName = useRef();
    let photo = useRef();
    let country = useRef();
    let [edit, setEdit] = useState(false)
    let [reset, setReset] = useState(false)
    // console.log(user)
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
    useEffect(
        () => {
            name.current.value = user.name
            lastName.current.value = user.lastName
            photo.current.value = user.photo
            country.current.value = user.country
        }, [reset]
    )

    function cancel() {
        setEdit(!edit);
        setReset(!reset)
    }

    function updateUser(e) {
        e.preventDefault();
        try {
            let data = {}
            if (name.current.value != user.name) {
                data.name = name.current.value
            }
            if (lastName.current.value != user.lastName) {
                data.lastName = lastName.current.value
            }
            if (photo.current.value != user.photo) {
                data.photo = photo.current.value
            }
            if (country.current.value != user.country) {
                data.country = country.current.value
            }

            dispatch(update_user(data))
            setEdit(!edit)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Profile Updated',
                showConfirmButton: false,
                timer: 2000
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='bg-white p-4 w-[672px]'>
            <h1 className="text-center text-2xl mb-6">Profile</h1>
            <form onSubmit={updateUser} className="flex flex-col items-center text-[#343231]">
                <div className="flex mb-3 flex-col sm:flex-row sm:gap-x-2">
                    <div className="flex flex-col mb-3 sm:mb-0">
                        <label className="font-semibold text-center sm:text-left">First Name:</label>
                        <input className="outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231]" ref={name} type="text" name="name" id="name" disabled={!edit} />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-semibold text-center sm:text-left">Last Name:</label>
                        <input className="outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231]" ref={lastName} type="text" name="lastName" id="name" disabled={!edit} />
                    </div>
                </div>
                <label className="font-semibold">Country:</label>
                <select className="mb-3 outline-none focus:border-blue-400 cursor-pointer border-b border-gray-600 text-[#343231] bg-white" ref={country} defaultValue="" name="country" id="country" disabled={!edit} >
                    <option value="" disabled hidden></option>
                    {countries.map((country, index) => <option value={country} key={index}>{country}</option>)}
                </select>
                <label className="font-semibold">Photo URL:</label>
                <input className="mb-3 outline-none focus:border-blue-400 border-b border-gray-600 text-[#343231]" ref={photo} type="url" name="photo" id="photo" disabled={!edit} />
                <img className="w-40 h-40 mt-6 object-cover m-auto rounded-full" src={user.photo || 'https://i.im.ge/2023/09/28/N6umIh.guest.png'} alt="profile pic" />
                {!edit ?
                    <input onClick={() => setEdit(!edit)} className="mt-4 w-28 py-2 px-4 rounded-full text-[#FAF9F6] font-bold bg-teal-500 hover:bg-teal-600 active:bg-teal-700 cursor-pointer" type="button" value="EDIT" />
                    :
                    <div className="flex gap-x-8 mt-4">
                        <input className="w-28 py-1 px-4 rounded-full text-[#FAF9F6] font-bold bg-teal-500 hover:bg-teal-600 active:bg-teal-700 cursor-pointer" type="submit" value="Save" />
                        <input onClick={() => cancel()} className="w-28 py-1 px-4 rounded-full border border-rose-600 text-rose-600 font-bold hover:bg-rose-600 hover:text-slate-50 active:bg-rose-700 cursor-pointer" type="button" value="Cancel" />
                    </div>
                }
            </form>
        </div>
    )
}
