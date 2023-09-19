import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
    const [imageSearch , setImageSearch] = useState(false);
    return(
        <Context.Provider value={{
            imageSearch,
            setImageSearch
        }}>
            {props.children}
        </Context.Provider>
    );
};
//AIzaSyAUtKe2Qpo0K20h8hfOPOd9UW-t-2aFV1A
//b00738f5a5fe9411a
//<script async src="https://cse.google.com/cse.js?cx=b00738f5a5fe9411a">
// </script>
// <div class="gcse-search"></div>

