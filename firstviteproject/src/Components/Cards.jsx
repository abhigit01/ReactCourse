import React from "react";

function Cards() {
  return (
    <div className="bg-black w-full h-screen">
        <div className="bg-blue w-80 h-80 flex justify-center items-center flex-col gap-4">
            <div className="flex gap-3 text-white">
            <p>Name</p>
            <input type="text" placeholder="Enter Your Name" />
            </div>
            <div className="flex gap-6 text-white">
            <p>Email-id</p>
            <input type="Email" placeholder="Enter Your Email" />
            </div>
            <div className="flex gap-6 text-white">
            <p>Number</p>
            <input type="text" placeholder="Enter Your Phone Number" />
            </div>
            <div className="flex gap-6 text-white">
            <p>Address</p>
            <input type="text" placeholder="Enter Your Address" />
            </div>
        </div>
    </div>
  );
}

export default Cards;
