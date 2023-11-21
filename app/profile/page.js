

export default function Home() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden">
      {/* <div
        className="w-full h-40 bg-cover"
        style={{
          backgroundImage: 'url("https://marketplace.canva.com/EAFA8zrhjME/1/0/1600w/canva-green-corporate-business-card-C4543WeoAGs.jpg")',
        }}
      ></div> */}

      <div className="p-6">
        <div className="text-center">
          <img
            className="w-30 h-30 rounded-full mx-auto mb-4"
            src="http://res.cloudinary.com/dav4htlfu/image/upload/v1700390291/menu/pobvxeqccy0imvzowcxz.png" // Replace with your actual profile picture
            alt="Profile"
          />
          <h2 className="text-xl font-bold text-gray-800">Hassan Omar Mohamed</h2>
          <p className="text-gray-600">MERN Stack Developer</p>
        </div>
      </div>
    </div>

  )
}
