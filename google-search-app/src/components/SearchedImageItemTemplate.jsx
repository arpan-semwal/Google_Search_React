const SearchedImageItemTemplate = ({ data }) => {
  // Check if 'data' is defined and contains the expected structure
  if (!data || !data.items || !Array.isArray(data.items) || data.items.length === 0 || !data.items[0].pagemap || !data.items[0].pagemap.cse_image) {
    // Handle the case when 'data' is not as expected
    return (
      <div className="group flex flex-col py-3 cursor-pointer">
        <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] lg-[40px] group-hover:shadow-c">
          {/* Display a placeholder or error message */}
          <p>Error: Data structure is not as expected</p>
        </div>
      </div>
    );
  }

  // Access the image URL from the API response directly
  const imageUrl = data.items[0].pagemap.cse_image.src;

  return (
    <div className="group flex flex-col py-3 cursor-pointer">
      <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] lg-[40px] group-hover:shadow-c">
        {/* Display the image */}
        <img className="h-full w-full object-contain" src={imageUrl} alt="Image" />
      </div>
      console.log(data);

    </div>
  );
};

export default SearchedImageItemTemplate;
