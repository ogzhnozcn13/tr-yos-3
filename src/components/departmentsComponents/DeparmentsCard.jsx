import DeparmentsIntro from "./DeparmentsIntro";
import { HomeContext } from "../../context/HomeContext";
import {useContext}  from  'react'

const DeparmentsCard = () => {
  const {allDepartments,filteredDepartments}=useContext(HomeContext)
  const someDeps = allDepartments.slice(0, 12);
  return (


    <div className="container m-auto flex justify-center items-center flex-wrap  gap-5">
      
      { filteredDepartments.length? (filteredDepartments?.map((item, index) => (
        <DeparmentsIntro {...item} key={index} />
      ))):(
        someDeps?.map((item,index)=>(
          <DeparmentsIntro {...item} key={index} />
        )
        )
      )}
    </div>
  );
};

export default DeparmentsCard;
