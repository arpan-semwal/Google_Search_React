import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";
import {useSpeechRecognition} from "react-speech-recognition";

const SearchInput = () => {
    const {query} = useParams();

    const [searchQuery , setSearchQuery] = useState(query || "");

    const navigate = useNavigate();

   const{
    transcript,
    resetTranscript,
    startListening,
    stopListening,
    listening
   } = useSpeechRecognition();


    const searchQueryHandler = () => {
        if(event.key === "Enter" && searchQuery.length > 0){
            navigate(`${searchQuery}/${1}`);
        }
    }

    const voiceSearchHandler = () => {
        if (listening) {
            // If currently listening, stop listening
            stopListening();
        } else {
            // If not listening, start listening
            startListening();
        }
    };



    return <div id="searchbox" className="h-[48px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
        <AiOutlineSearch size={18} color="#9aa0a6"/>
        <input type="text" onChange={(e) =>setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery} autoFocus className="grow outline-0 text-black"
    />

    <div className="flex items-center gap-3">
        {searchQuery && (
            <IoMdClose size={24} color="#70757a" className="cursor-pointer"
            onClick={() => setSearchQuery("")}
            
            />
        )}
        <img
                    className="h-6 w-6 cursor-pointer"
                    src={listening ? ImageIcon : MicIcon} // Toggle between MicIcon and ImageIcon based on listening state
                    alt=""
                    onClick={voiceSearchHandler} // Call voiceSearchHandler on click
                />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="" />
    </div>
</div>;
};

export default SearchInput;
