const SearchedImageItemTemplate = ({ data }) => {
    // Access the image URL from the API response directly
    const imageUrl = data.link;
  
    return (
      <div className="group flex flex-col py-3 cursor-pointer" onClick={() => window.open(data.link)}>
        <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] lg-[40px] group-hover:shadow-c">
          {imageUrl && (
            <img className="h-full w-full object-contain" src={imageUrl} alt="" onError={(e) => {
              console.error("Error loading image:", e);
            }} />
          )}
        </div>
      </div>
    );
  };
  
  export default SearchedImageItemTemplate;
  