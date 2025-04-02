const App = () => {
  return (
    <>
      <div className="flex w-5/6 m-auto">
        <div  className="w-full bg-amber-50">
          <img src="https://www.instagram.com/images/instagram/xig/homepage/screenshots_v3/instagram-web-lox-image-2x.png" alt="" className="w-full object-cover"/>
        </div>
        <div className="w-full p-10 ">
          <h1 className="text-4xl text-center mb-10 ">INSTAGRAM</h1>
          <input type="text" placeholder="enter username" className="w-full p-2 mt-2 mb-3 border border-gray-200" />
          <input type="text" placeholder="password" className="w-full p-2 mt-2 mb-3 border border-gray-200" />
          <button className="bg-blue-300 p-3 text-white rounded-md text-md mt-3  w-full">login</button>
        <div className="p-5 relative border-b"> 
          <p className="absolute mt-2 z-10 bg-white ml-[40%]">OR</p>
        </div>
        </div>
      </div>
    </>
  )
}
export default App;