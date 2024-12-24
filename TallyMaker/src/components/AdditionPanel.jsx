import React from 'react'

function AdditionPanel() {
  return (
    <>
    <div className='w-full h-16 flex'>  
    <input type='text' className='m-0 p-5 border-green-500  border-2 h-16 rounded-lg grow bg-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset focus:border-green-500 caret-green-500 text-green-500' placeholder="Enter text "></input>
    <button className="btn hover:bg-green-600 h-16 mx-1 bg-green-500 border-none text-slate-800 ">Add</button>
     
     <button className="btn h-16 hover:bg-green-600 bg-green-500 border-none text-slate-800" onClick={()=>document.getElementById('my_modal_1').showModal()}>Generate Graph</button>
<dialog id="my_modal_1" className="modal m-1">
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
    
    </>
   
  )
}

export default AdditionPanel