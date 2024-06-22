const Carousel = ({ data }) => {
  return (
    <div className="carousel-wrapper">
      <div className="card">
        <div className="card_second">
            <p className="card-title">Name :</p>
            <p className="card-content">{data.first_name + " " + data.last_name}</p>
        </div>
      

        <p className="card-title">Email :</p>
        <p className="card-content">{data.email}</p>

        <p className="card-title">Gender :</p>
        <p className="card-content">{data.gender}</p>
      </div>
    </div>
  );
};

export default Carousel;
