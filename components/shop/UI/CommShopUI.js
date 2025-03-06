const CommonShopUI = ({products}) => {
    return  <div className=" container mx-auto pt-5">
    {products.map((service, index) => <div key={index} className="max-w-4xl mx-auto bg-white shadow-md p-5 rounded-lg border border-gray-300 md:p-8 mb-16 relative">
       
       <div className="absolute inset-0 bg-gray-700 py-10 rounded-lg shadow-md transform skew-y-6"></div>

       
       <div className="relative mb-20 text-white">
       <div className="asolute top-0 right-0 papers">
     
     <div className="paper"></div>
     <div className="paper"></div>
     
   </div>
         <h2 className="text-3xl font-bold text-center mb-6 md:text-4xl">
           {service.title}
         </h2>
         {/* <p className="text-white mb-6">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
           amet sodales ipsum. Nulla facilisi.
         </p> */}
        <ul className="text-white mypapers bg-black-50 px-3 py-7 space-y-5 text-base md:px-4 md:text-lg">{service.info.map((serviceDetails, index) => 
           <li  key={index}><span className="mr-2">&#8658;</span>{serviceDetails}</li>
           
        )} </ul>
       </div>
     </div>)}
   </div>
}

export default CommonShopUI;