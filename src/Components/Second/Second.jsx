import React from 'react';
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation,Grid } from "swiper/modules";

const Second = () => {
  return (
    <div id="Service">
      <div className="text-4xl ">OUR SERVICE</div>
      <div className="grid grid-cols-4 ">
        <div className="card rounded-none min-w-fit bg-orange-100 text-black ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Success Rate</h2>
            <p className="text-4xl font-bold">
              <CountUp end={95} duration={5} />%
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card min-w-fit rounded-none bg-orange-100  text-black">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Personal Trainer</h2>
            <p>
              <p className="text-4xl font-bold">
                <CountUp end={20} duration={6} />+
              </p>
            </p>
          </div>
        </div>

        <div className="card min-w-fit rounded-none bg-orange-100  text-black">
          <div className="card-body items-center text-center text-black">
            <h2 className="card-title">Expert Nutritionist</h2>
            <p>
              <p className="text-4xl font-bold">
                <CountUp end={25} duration={7} />+
              </p>
            </p>
          </div>
        </div>

        <div className="card min-w-fit rounded-none bg-orange-100  text-black ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Health Food Blog</h2>

            <p className="text-4xl font-bold">
              <CountUp end={1000} duration={6} />+
            </p>
          </div>
        </div>
      </div>

      {/* SWIPER FROM HERE */}

      <div className="mt-3">
        <Swiper
          slidesPerView={"3"}
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <div className="  bg-base-100 shadow-xl ">
              <figure>
                <img
                  className="h-40 ml-20 "
                  src="/public/plan_8515625 (1).png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Nutrition Strategies</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  bg-base-100 shadow-xl ">
              <figure>
                <img
                  className="h-40 ml-20 "
                  src="/public/workout_3281870.png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Workout Routines</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="  bg-base-100 shadow-xl ">
              <figure>
                <img
                  className="h-40 ml-20 "
                  src="/public/advice_10550632.png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">First Hand Advice</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-base-100 shadow-xl ">
              <figure>
                <img
                  className="h-40 ml-20 "
                  src="/public/achieving-goals_10345683.png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Support Motivation</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="  bg-base-100 shadow-xl ">
              <figure>
                <img
                  className="h-40 ml-20 "
                  src="/public/building_753615.png"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Certified Company</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-base-100 shadow-xl ">
              <figure>
                <img className="h-40 ml-20 " src="/public/team_3310147.png" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Strong Community</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Second;