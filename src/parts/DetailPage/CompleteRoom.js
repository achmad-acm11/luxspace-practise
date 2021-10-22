import React from "react";
import { Link } from "react-router-dom";

export default function CompleteRoom() {
  return (
    /* <!-- START: complete your room --> */
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          {/* <!-- START: item 1 --> */}
          <div className="px-3 w-full md:w-3/12 mb-4 card">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-1.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span className="">IDR 89.300.000</span>
              <Link to="details/1" className="stretched-link"></Link>
            </div>
          </div>
          {/* <!-- END: item 1 --> */}

          {/* <!-- START: item 2 --> */}
          <div className="px-3 w-full md:w-3/12 mb-4 card">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-2.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span className="">IDR 89.300.000</span>
              <Link to="details/1" className="stretched-link"></Link>
            </div>
          </div>
          {/* <!-- END: item 2 --> */}

          {/* <!-- START: item 3 --> */}
          <div className="px-3 w-full md:w-3/12 mb-4 card">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-3.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span className="">IDR 89.300.000</span>
              <Link to="details/1" className="stretched-link"></Link>
            </div>
          </div>
          {/* <!-- END: item 3 --> */}

          {/* <!-- START: item 4 --> */}
          <div className="px-3 w-full md:w-3/12 mb-4 card">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                <img
                  src="/images/content/chair-office-4.jpg"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2xl</h5>
              <span className="">IDR 89.300.000</span>
              <Link to="details/1" className="stretched-link"></Link>
            </div>
          </div>
          {/* <!-- END: item 4 --> */}
        </div>
      </div>
    </section>
    /* <!-- END: complete your room --> */
  );
}
