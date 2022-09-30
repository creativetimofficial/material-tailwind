export default function ComponentCarousel() {
  return (
    <div className="carousel">
      <div className="slide">
        <img
          src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-1-min.jpg"
          alt=""
        />
      </div>

      <div className="slide">
        <img
          src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-2-min.jpg"
          alt=""
        />
      </div>

      <div className="slide">
        <img
          src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/products/product-3-min.jpg"
          alt=""
        />
      </div>

      <button className="button-next">
        <i className="material-icons text-white">chevron_right</i>
      </button>
      <button className="button-prev">
        <i className="material-icons text-white">chevron_left</i>
      </button>
    </div>
  )
}