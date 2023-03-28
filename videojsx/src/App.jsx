import { useState } from 'react';
import './App.css';


function App() {
    const [price, setPrice] = useState(0);
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [camera, setCamera] = useState(1);
    const [resolution, setResolution] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountPrice, setDiscountPrice] = useState(0);



    const handleChecked = (e) => {
        setChecked(e.target.checked)
        if (e.target.checked) {
            setPrice(price + 120);
        }
        else {
            setPrice(price - 120)
        }
        discount();

    }
    const handleChecked2 = (e) => {
        setChecked2(e.target.checked)
        if (e.target.checked) {
            setPrice(price + 100)

        }
        else {
            setPrice(price - 100)
        }
        discount();
    }
    const handleChecked3 = (e) => {
        setChecked3(e.target.checked)
        if (e.target.checked) {
            setPrice(price + 80)

        }
        else {
            setPrice(price - 80)
        }
        discount();

    }
    const handleChecked4 = (e) => {
        setChecked4(e.target.checked)
        if (e.target.checked) {
            setPrice(price + 100);

        }
        else {
            setPrice(price - 100)
        }
        discount();
    }

    const handleResolution = (e) => {
        if (price){
            setResolution(e.target.value)
            if (e.target.value === "4k") {
                setPrice(price + 80)
            }
            else {
                setPrice(price-80)
            }
        }
    }

    const wedding = (e) => {
        if (price) {
            if (e.target.value === "wedding") {
                setPrice(price + 20)
            }
            else {
                setPrice(price - 20)
            }
        }

    }



    const handleCamera = (e) => {
        setCamera(e.target.value)
        let value1 = 0;
        if (price){
            if (e.target.value==="1") {
                value1 = 0;
            }
            else if (e.target.value==="2") {
                value1 = 140;
            }
            else if (e.target.value==="3") {
                value1 = 380;
            }
            else if (e.target.value==="4") {
                value1 = 620;
            }
        }
        setTotalPrice(value1);
        discount();
    }

    function discount ()  {
        let discount = 0;
        let counts= document.querySelectorAll('input[type="checkbox"]:checked').length;
        console.log(counts);
        if (counts >= 2) {
            discount = 25;
        }

        setDiscountPrice((totalPrice + price) * (discount / 100));

    }







  return (
      <>
        <div className="container bg-gray-100">
          <h1 className="text-3xl"> <span className="text-black font-bold ">Price</span> Calculator</h1>
            <div className="line w-20 bg-blue-900 h-0.5 "></div>
          <form action=""  className="w-full h-auto border-2 rounded mt-3.5">
                <div className="m-3 justify-start items-center border rounded p-2">
                <span className="font-medium block my-2">Event type:</span>
               <label htmlFor="wedding" className="bg-gray-300  justify-start align-baseline border rounded p-1.5  " onChange={wedding}>

                   Wedding

                   <input type="radio" className="align-middle ml-1" id="wedding" name="price" value="wedding" checked/>
               </label>
                <label htmlFor="maz" className="bg-gray-300 justify-start mx-2 align-baseline border rounded p-1.5 " onChange={wedding}>

                    Bar Mitzvah

                    <input type="radio" className="align-middle ml-1" id="maz" name="price" value="bar"/>
                </label>
            </div>
                <div className="duration  m-3 ">
                  <label htmlFor="checked" className="block p-2 text-lg font-semibold border hover:bg-gray-200" onChange={handleChecked}>
                        <input type="checkbox" id="checked" className="mr-2 h-4 w-4 "/>

                         Full film

                      <span className="text-xs">(1-3 hours)</span>
                  </label>
                  <label htmlFor="checked2" className="block p-2 text-lg font-semibold border border-t-0 hover:bg-gray-200" onChange={handleChecked2}>
                      <input type="checkbox" id="checked2" className="mr-2 h-4 w-4 "  />
                        Highlight

                      <span className="text-xs">(5-7 minutes)</span>
                  </label>
                  <label htmlFor="checked3" className="block p-2 text-lg font-semibold border border-t-0 hover:bg-gray-200" onChange={handleChecked3}>
                      <input type="checkbox" id="checked3" className="mr-2 h-4 w-4 "/>

                         Social film

                      <span className="text-xs">(1-2 minutes)</span>
                  </label>
                  <label htmlFor="checked4" className="block p-2 text-lg font-semibold border border-t-0 hover:bg-gray-200" onChange={handleChecked4}>
                      <input type="checkbox" id="checked4" className="mr-2 h-4 w-4 "/>

                        Feature film

                      <span className="text-xs">(10-30 minutes)</span>
                  </label>

              </div>
                <div className="resolution m-3">
                  <span className="font-semibold block my-2 ">Video resolution:</span>
                    <label htmlFor="hd" className="bg-gray-300 justify-start  align-baseline border rounded p-1.5 " onChange={handleResolution}>

                            Full HD

                        <span className="text-xs">(1080p)</span>
                        <input type="radio" className="align-middle ml-1" id="hd" name="quality"   />
                    </label>
                    <label htmlFor="4k" className="bg-gray-300 mx-2 justify-start align-baseline border rounded p-1.5 " onChange={handleResolution} >

                            4K

                        <span className="text-xs">(2160p)</span>
                        <input type="radio" className="align-middle ml-1" id="4k" name="quality" onChange={handleResolution} value="4k"/>
                    </label>

                </div>
                <div className="cameras m-3 border p-2 rounded">
                    <span className="font-semibold  my-2 ">

                        How many cameras worked?

                    </span>
                    <select name="camera" id="" className="mx-3 border-2 rounded bg-white" onChange={handleCamera}>
                        <option value="1" >1 camera</option>
                        <option value="2" >2 camera</option>
                        <option value="3" >3 camera</option>
                        <option value="4" >4 camera</option>
                    </select>
                </div>
                <div className="total-price flex flex-col align-baseline justify-between m-3">
                        <span className="font-medium text-lg block my-2 text-red-600 text-2xl">

                            Price without discount: ${price+totalPrice}

                        </span>
                    <span className="font-medium text-lg block my-2 text-green-600 text-2xl">
                        Discount: ${discountPrice}
                    </span>
                    <div className="flex justify-between">
                        <span className="font-bold text-xl block my-2 text-blue-600 text-2xl">

                            Total: ${totalPrice+price-discountPrice}

                        </span>
                        <div className="order-button">
                            <button className="bg-blue-900 text-white font-bold py-2 px-4 rounded mt-3 hover:bg-blue-600">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>

          </form>

        </div>

      </>
  )
}

export default App
