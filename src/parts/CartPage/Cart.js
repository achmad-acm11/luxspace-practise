import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    /* <!-- START: Cart --> */
    <section className="md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 flex-wrap">
          {/* <!-- START: shipping cart --> */}
          <div
            className="w-full px-4 mb-4 md:w-8/12 md:mb-0"
            id="shopping-cart"
          >
            <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
              <h3 className="text-2xl">Shopping Cart</h3>
            </div>
            {/* <!-- START: Table Title --> */}
            <div className="border-b border-gray-200 mb-4 hidden md:block">
              <div className="flex flex-start items-center pb-2 -mx-4">
                <div className="px-4 flex-none">
                  <div className="" style={{"width": "90px"}}>
                    <h6>Photo</h6>
                  </div>
                </div>
                <div className="px-4 w-5/12">
                  <div className="">
                    <h6>Product</h6>
                  </div>
                </div>
                <div className="px-4 w-5/12">
                  <div className="">
                    <h6>Price</h6>
                  </div>
                </div>
                <div className="px-4 w-2/12">
                  <div className="text-center">
                    <h6>Action</h6>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END: Table Title --> */}

            {/* <!-- START: Cart empty wrapper --> */}
            <p id="cart-empty" className="hidden text-center py-8">
              Ooops... Cart is empty
              <Link href="details/1" className="underline">
                Shop Now!
              </Link>
            </p>
            {/* <!-- END: Cart empty wrapper --> */}

            {/* <!-- START: Table Item 1 --> */}
            <div
              className="flex flex-start flex-wrap items-center mb-4 -mx-4"
              data-row="1"
            >
              <div className="px-4 flex-none">
                <div className="" style={{"width": "90px","height": "90px"}}>
                  <img
                    src="/images/content/chair-office-1.jpg"
                    alt="chair office 1"
                  />
                </div>
              </div>
              <div className="px-4 w-auto md:w-5/12 flex-1">
                <div className="">
                  <h6 className="font-semibold text-lg md:text-xl leading-8">
                    Saman Kakka
                  </h6>
                  <span className="text-sm md:text-lg">Office Room</span>
                  <h6 className="font-semibold text-base md:text-lg block md:hidden">
                    IDR 28.000.000
                  </h6>
                </div>
              </div>
              <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
                <div className="">
                  <h6 className="font-semibold text-lg">IDR 29.000.000</h6>
                </div>
              </div>
              <div className="px-4 w-2/12">
                <div className="text-center">
                  <button
                    data-delete-item="1"
                    className="text-red-600 border-none focus:outline-none px-3 py-1"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- END: Table Item 1 --> */}

            {/* <!-- START: Table Item 2 --> */}
            <div
              className="flex flex-start flex-wrap items-center mb-4 -mx-4"
              data-row="2"
            >
              <div className="px-4 flex-none">
                <div className="" style={{"width": "90px", "height": "90px"}}>
                  <img
                    src="/images/content/chair-office-2.jpg"
                    alt="chair office 3"
                  />
                </div>
              </div>
              <div className="px-4 w-auto md:w-5/12 flex-1">
                <div className="">
                  <h6 className="font-semibold text-lg md:text-xl leading-8">
                    Green Seat
                  </h6>
                  <span className="text-sm md:text-lg">Office Room</span>
                  <h6 className="font-semibold text-base md:text-lg block md:hidden">
                    IDR 12.500.000
                  </h6>
                </div>
              </div>
              <div className="px-4 w-auto md:w-5/12 float-none md:flex-1 hidden md:block">
                <div className="">
                  <h6 className="font-semibold text-lg">IDR 21.500.000</h6>
                </div>
              </div>
              <div className="px-4 w-2/12">
                <div className="text-center">
                  <button
                    data-delete-item="2"
                    className="text-red-600 border-none focus:outline-none px-3 py-1"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- END: Table Item 2 --> */}

            {/* <!-- START: Table Item 3 --> */}
            <div
              className="flex flex-start flex-wrap items-center mb-4 -mx-4"
              data-row="3"
            >
              <div className="px-4 flex-none">
                <div className="" style={{"width": "90px", "height": "90px"}}>
                  <img
                    src="/images/content/chair-office-3.jpg"
                    alt="chair office 3"
                  />
                </div>
              </div>
              <div className="px-4 w-auto md:w-5/12 flex-1">
                <div className="">
                  <h6 className="font-semibold text-lg md:text-xl leading-8">
                    Pasific
                  </h6>
                  <span className="text-sm md:text-lg">Office Room</span>
                  <h6 className="font-semibold text-base md:text-lg block md:hidden">
                    IDR 88.000.000
                  </h6>
                </div>
              </div>
              <div className="px-4 w-auto md:w-5/12 float-none md:flex-1 hidden md:block">
                <div className="">
                  <h6 className="font-semibold text-lg">IDR 88.000.000</h6>
                </div>
              </div>
              <div className="px-4 w-2/12">
                <div className="text-center">
                  <button
                    data-delete-item="3"
                    className="text-red-600 border-none focus:outline-none px-3 py-1"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- END: Table Item 3 --> */}
          </div>
          {/* <!-- END: shipping cart --> */}

          {/* <!-- START: shipping details --> */}
          <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
            <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
              <form action="success.html">
                <div className="flex flex-start mb-6">
                  <h3 className="text-2xl">Shipping Details</h3>
                </div>

                {/* <!-- START: input complete name --> */}
                <div className="flex flex-col mb-4">
                  <label for="complete-name" className="text-sm mb-2">
                    Complete Name
                  </label>
                  <input
                    data-input
                    type="text"
                    name=""
                    id="complete-name"
                    className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input Your Name"
                  />
                </div>
                {/* <!-- END: input complete name --> */}

                {/* <!-- START: input email address --> */}
                <div className="flex flex-col mb-4">
                  <label for="email-address" className="text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    data-input
                    type="email"
                    name=""
                    id="email-address"
                    className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input Your Email Address"
                  />
                </div>
                {/* <!-- END: input email address --> */}

                {/* <!-- START: input address --> */}
                <div className="flex flex-col mb-4">
                  <label for="address" className="text-sm mb-2">
                    Address
                  </label>
                  <input
                    data-input
                    type="text"
                    name=""
                    id="address"
                    className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input Your Address"
                  />
                </div>
                {/* <!-- END: input address --> */}

                {/* <!-- START: input phone number --> */}
                <div className="flex flex-col mb-4">
                  <label for="phone-number" className="text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    data-input
                    type="tel"
                    name=""
                    id="phone-number"
                    className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input Your Phone Number"
                  />
                </div>
                {/* <!-- END: input phone number --> */}

                {/* <!-- START: Choose courier --> */}
                <div className="flex flex-col mb-4">
                  <label className="text-sm mb-2">Choose Courier</label>

                  <div className="flex -mx-2 flex-wrap">
                    {/* <!-- START: courier 1 --> */}
                    <div className="px-2 w-6/12 h-24 mb-4">
                      <button
                        type="button"
                        className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="/images/content/courier/logo-fedex.png"
                          alt="fedex"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    {/* <!-- END: courier 1 --> */}

                    {/* <!-- START: courier 2 --> */}
                    <div className="px-2 w-6/12 h-24 mb-4">
                      <button
                        type="button"
                        className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="/images/content/courier/logo-dhl.png"
                          alt="fedex"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    {/* <!-- END: courier 2 --> */}
                  </div>
                </div>
                {/* <!-- END: Choose courier --> */}

                {/* <!-- START: payment --> */}
                <div className="flex flex-col mb-4">
                  <label className="text-sm mb-2">Choose Payment</label>

                  <div className="flex -mx-2 flex-wrap">
                    {/* <!-- START: payment 1 --> */}
                    <div className="px-2 w-6/12 h-24 mb-4">
                      <button
                        data-value="midtrans"
                        data-name="payment"
                        type="button"
                        className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="/images/content/payment/logo-midtrans.png"
                          alt="midtrans"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    {/* <!-- END: payment 1 --> */}

                    {/* <!-- START: payment 2 --> */}
                    <div className="px-2 w-6/12 h-24 mb-4">
                      <button
                        data-value="mastercard"
                        data-name="payment"
                        type="button"
                        className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="/images/content/payment/logo-mastercard.png"
                          alt="mastercard"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    {/* <!-- END: payment 2 --> */}

                    {/* <!-- START: payment 3 --> */}
                    <div className="px-2 w-6/12 h-24 mb-4">
                      <button
                        data-value="bitcoin"
                        data-name="payment"
                        type="button"
                        className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="/images/content/payment/logo-bitcoin.png"
                          alt="bitcoin"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    {/* <!-- END: payment 3 --> */}

                    {/* <!-- START: payment 4 --> */}
                    <div className="px-2 w-6/12 h-24 mb-4">
                      <button
                        data-value="american-express"
                        data-name="payment"
                        type="button"
                        className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src="/images/content/payment/logo-american-express.png"
                          alt="american-express"
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                    {/* <!-- END: payment 4 --> */}
                  </div>
                </div>
                {/* <!-- END: payment --> */}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled
                    className="bg-pink-400 text-black focus:bg-black focus:outline-none w-full py-3 rounded-full text-lg focus:text-pink-400 transition-all duration-200 px-6"
                  >
                    Checkout Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- END: shipping details --> */}
        </div>
      </div>
    </section>
    /* <!-- END: Cart --> */
  );
}
