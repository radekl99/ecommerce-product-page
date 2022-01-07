const Thumbnails = (props) => {
  const { thumbnails, setActivePhoto, activePhoto } = props;

  return (
    <div className="hidden md:flex justify-between">
      {thumbnails.map((thumbnail, index) => (
        <div
          className={`rounded-lg w-20 overflow-hidden ${
            activePhoto === index && "outline outline-3 outline-orange"
          }`}
          key={index}
        >
          <img
            src={thumbnail}
            className={`transition  cursor-pointer hover:opacity-50 ${
              activePhoto === index && "opacity-50"
            }`}
            onClick={() => setActivePhoto(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
