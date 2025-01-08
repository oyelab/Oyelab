import { foundersData } from "../../utils/fackData/foundersData"; // Adjust the path as needed
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import SlideUp from "@utils/animations/slideUp";

const About = () => {
  return (
    <section className="funder-says-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SlideUp className="founder-say-part text-center">
              <Swiper
                loop
                autoplay={{
                  delay: 3500, // 3.5 seconds
                  disableOnInteraction: false,
                }}
                speed={1000}
                spaceBetween={30}
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }} // Enable clickable dots
              >
                {foundersData.map((data) => (
                  <SwiperSlide key={data.id}>
                    <div className="founder-say-content">
                      <h3>{data.title}</h3>
					  <h3><span>{data.description}</span></h3>
                     
                      <div className="founder-name-part">
                        <img
                          src={data.img}
                          className="img-fluid rounded-circle"
                          alt="founder"
                          title="founder"
                        />
                        <h2>{data.name}</h2>
                        <p>{data.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;