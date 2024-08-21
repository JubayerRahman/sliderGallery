import "./App.css"
import Marquee from "react-fast-marquee";
import img1 from "../public/1.jpg"
import { useEffect, useState } from "react";
// import img2 from "../public/2.jpg"
// import img3 from "../public/3.jpg"
// import img4 from "../public/4.jpg"
// import img5 from "../public/5.jpg"
// import img6 from "../public/6.jpg"
// import img7 from "../public/7.jpg"






function App() {

  const [image, setImage] = useState([])
  const [image2, setImage2] = useState([])

  useEffect(()=>{
    fetch("./image.json")
    .then(response => response.json())
    .then(data => setImage(data.images))
  },[])
  useEffect(()=>{
    fetch("./image.json")
    .then(response => response.json())
    .then(data => setImage2(data.images2))
  },[])

  console.log(image);
  


  return (
    <div className="main flex flex-col items-center align overflow-hidden">
    <h1 className="text-white text-[67px] text-center font-[700] leading-[87px] p-[20px]">Image Gallery</h1>

    <Marquee pauseOnHover={true}  >
      {
        image.map(data =>(
              <div 
              onClick={()=>document.getElementById('my_modal_1').showModal()}
              className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] mr-[10px] cursor-pointer   p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow 1s mt-[50px] ">
                    <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
                      <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
                      <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
                    </div>
                    <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={data.url} alt="" />
          </div>
        ))
      }
    </Marquee>
    
    <Marquee pauseOnHover={true} direction="right"  >
      {
        image2.map(data =>(
              <div 
              onClick={()=>document.getElementById('my_modal_1').showModal()}
              className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] mr-[10px] cursor-pointer   p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow 1s mt-[50px] mb-[50px] ">
                    <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
                      <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
                      <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
                    </div>
                    <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={data.url} alt="" />
          </div>
        ))
      }
    </Marquee>

    <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>






    </div>
  )
}

export default App
