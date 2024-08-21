import "./App.css"
import img1 from "../public/1.jpg"
import img2 from "../public/2.jpg"
import img3 from "../public/3.jpg"
import img4 from "../public/4.jpg"
import img5 from "../public/5.jpg"
import img6 from "../public/6.jpg"
import img7 from "../public/7.jpg"






function App() {


  return (
    <div className="main flex flex-col items-center align overflow-hidden">
    <h1 className="text-white text-[67px] text-center font-[700] leading-[87px] p-[20px]">Image Gallery</h1>
    <div className="h-[1000px]"></div>


    <div className="flex overflow-hidden lg:mb-[44px] mb-4 cursor-pointer"  >
     <div className="flex gap-5 pl-2.5 pr-2.5 " >
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow 1s">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
     </div>
     <div className="flex gap-5 pl-2.5 pr-2.5 " >
     <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow 1s">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        
     </div>
    </div>
    <div className="flex overflow-hidden lg:mb-[44px] mb-4 cursor-pointer "  id="slideContainer2">
     <div className="flex gap-5 pl-2.5 pr-2.5 " >
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow 1s">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
     </div>
     <div className="flex gap-5 pl-2.5 pr-2.5 " >
     <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow 1s">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        <div className="img3 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img3} alt="" />
        </div>
        <div className="img4 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img4} alt="" />
        </div>
        <div className="img5 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img5} alt="" />
        </div>
        <div className="img6 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img6} alt="" />
        </div>
        <div className="img7 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img7} alt="" />
        </div>
        <div className="img1 w-[172px] hover:w-[368px] h-[368px] hover:z-10   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img1} alt="" />
        </div>
        <div className="img2 w-[172px] hover:w-[368px] h-[368px]   rounded-[20px] p-[10px] bg-white bg-opacity-30 ease-in-out transition-all grayscale hover:filter-none relative overflow-hidden group flex-shrink-0 hover:flex-grow">
          <div className="hidden absolute  bottom-[2%] special p-[10px] w-[347px] rounded-b-[15px] group-hover:block">
            <h1 className="text-white font-[500] text-[18px] leading-7">Event Name</h1>
            <h1 className="text-white font-[400] text-[14px] leading-[21px]">Short description of the event, may be add date, location and other information.</h1>
          </div>
          <img className="w-[368px] h-[350px] rounded-[16px] object-cover" src={img2} alt="" />
        </div>
        
     </div>
    </div>
    {/* </Carousel>; */}






    </div>
  )
}

export default App
