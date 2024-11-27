import {CircleLoader} from "react-spinners"
const Loader = () => {
  return (
    <div className=" loader">
      <CircleLoader
       color="#104d61" 
       size={50} 
       aria-label="Loading Spinner"
       data-testid="loader"
       />
    </div>
  );
};

export default Loader;
