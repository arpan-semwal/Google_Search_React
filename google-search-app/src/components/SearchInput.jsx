import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {IoMdClose} from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = () => {
    if (searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  const clearSearchQuery = () => { //here we are ensuring taht we clearing the 
    setSearchQuery("");
  };

  return (
    <div
      id="searchbox"
      className="h-[48px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            searchQueryHandler();
          }
        }}
        value={searchQuery}
        autoFocus
        className="grow outline-0 text-black"
      />

      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={clearSearchQuery}
          />
        )}
        <img
          className="h-6 w-6 cursor-pointer"
          src={MicIcon}
          alt=""
          onClick={searchQueryHandler}
        />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="" />
      </div>
    </div>
  );
};

export default SearchInput;
