import React from "react";
import { Link } from "react-router-dom";

export default function CompleteRoom({ data }) {
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
          {data.map((item, index) => {
            return (
              <div key={item.id} className="px-3 w-full md:w-3/12 mb-4 card">
                <div className="rounded-xl p-4 pb-8 relative bg-white">
                  <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                    <img
                      src={`/images/content/${item.imageUrl}`}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">
                    {item.title}
                  </h5>
                  <span className="">IDR {item.price}</span>
                  <Link to={`details/${item.idc}`}className="stretched-link"></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    /* <!-- END: complete your room --> */
  );
}
