import fetch from "helpers/fetch";
import useAsync from "helpers/hooks/useAsync";
import useForm from "helpers/hooks/useForm";
import { useGlobalContext } from "helpers/hooks/useGlobalContext";
import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Cart() {
  const history = useHistory();
  const { data, run, isLoading } = useAsync();
  const { state, dispatch } = useGlobalContext();

  const { state: payload, fnUpdateState } = useForm({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    courier: "",
    payment: "",
  });
  const isSubmitDisabled =
    Object.keys(payload).filter((key) => {
      return payload[key] !== "";
    }).length === Object.keys(payload).length;

  React.useEffect(() => {
    run(fetch({ url: "/api/checkout/meta" }));
  }, [run]);

  async function fnSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch({
        url: "/api/checkout",
        method: "POST",
        body: JSON.stringify({
          ...payload,
          cart: Object.keys(state.cart).map((key) => state.cart[key]),
        }),
      });

      if (res) {
        history.push("/success");
        dispatch({
          type: "RESET_CART",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
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
                  <div className="" style={{ width: "90px" }}>
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
            {Object.keys(state.cart).length === 0 ? (
              // <!-- START: Cart empty wrapper -->
              <p id="cart-empty" className="text-center py-8">
                Ooops... Cart is empty
                <Link to="/details/1" className="underline">
                  Shop Now!
                </Link>
              </p>
            ) : (
              // <!-- END: Cart empty wrapper -->
              Object.keys(state.cart).map((key) => {
                const item = state.cart[key];

                return (
                  <div
                    key={item.id}
                    className="flex flex-start flex-wrap items-center mb-4 -mx-4"
                    data-row="1"
                  >
                    <div className="px-4 flex-none">
                      <div
                        className=""
                        style={{ width: "90px", height: "90px" }}
                      >
                        <img
                          src={`/images/content/${item.imgUrls[0]}`}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div className="px-4 w-auto md:w-5/12 flex-1">
                      <div className="">
                        <h6 className="font-semibold text-lg md:text-xl leading-8">
                          {item.title}
                        </h6>
                        <span className="text-sm md:text-lg">
                          {item.category.title}
                        </span>
                        <h6 className="font-semibold text-base md:text-lg block md:hidden">
                          IDR {item.price}
                        </h6>
                      </div>
                    </div>
                    <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
                      <div className="">
                        <h6 className="font-semibold text-lg">
                          IDR {item.price}
                        </h6>
                      </div>
                    </div>
                    <div className="px-4 w-2/12">
                      <div className="text-center">
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              id: item.id,
                            })
                          }
                          className="text-red-600 border-none focus:outline-none px-3 py-1"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          {/* <!-- END: shipping cart --> */}

          {/* <!-- START: shipping details --> */}
          <div className="w-full md:px-4 md:w-4/12" id="shipping-detail">
            <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
              <form onSubmit={fnSubmit}>
                <div className="flex flex-start mb-6">
                  <h3 className="text-2xl">Shipping Details</h3>
                </div>

                {/* <!-- START: input complete name --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="complete-name" className="text-sm mb-2">
                    Complete Name
                  </label>
                  <input
                    onChange={fnUpdateState}
                    value={payload.completeName}
                    type="text"
                    name="completeName"
                    id="complete-name"
                    className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input Your Name"
                  />
                </div>
                {/* <!-- END: input complete name --> */}

                {/* <!-- START: input email address --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="email-address" className="text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    onChange={fnUpdateState}
                    value={payload.emailAddress}
                    type="email"
                    name="emailAddress"
                    id="email-address"
                    className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input Your Email Address"
                  />
                </div>
                {/* <!-- END: input email address --> */}

                {/* <!-- START: input address --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="address" className="text-sm mb-2">
                    Address
                  </label>
                  <input
                    onChange={fnUpdateState}
                    value={payload.address}
                    type="text"
                    name="address"
                    id="address"
                    className="border border-gray-200 rounded-lg px-4 py-2 bg-white text-sm focus:border-blue-200 focus:outline-none"
                    placeholder="Input Your Address"
                  />
                </div>
                {/* <!-- END: input address --> */}

                {/* <!-- START: input phone number --> */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="phone-number" className="text-sm mb-2">
                    Phone Number
                  </label>
                  <input
                    onChange={fnUpdateState}
                    value={payload.phoneNumber}
                    type="tel"
                    name="phoneNumber"
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
                    {isLoading
                      ? Array(2)
                          .fill()
                          .map((_, index) => {
                            return (
                              <div
                                key={`Courier${index}`}
                                className="px-2 w-6/12 h-24 mb-4"
                              >
                                <div className="bg-gray-300 w-full h-full animate-pulse rounded-lg mx-2"></div>
                              </div>
                            );
                          })
                      : data.couriers.map((item) => {
                          // <!-- START: courier 1 -->
                          return (
                            <div
                              key={`courier${item.id}`}
                              className="px-2 w-6/12 h-24 mb-4"
                            >
                              <button
                                onClick={() => {
                                  fnUpdateState({
                                    target: {
                                      name: "courier",
                                      value: item.id,
                                    },
                                  });
                                }}
                                type="button"
                                className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                              >
                                <img
                                  src={`/images/content/courier/${item.imgUrl}`}
                                  alt={item.name}
                                  className="object-contain max-h-full"
                                />
                              </button>
                            </div>
                          );
                          // <!-- END: courier 1 -->
                        })}
                  </div>
                </div>
                {/* <!-- END: Choose courier --> */}

                {/* <!-- START: payment --> */}
                <div className="flex flex-col mb-4">
                  <label className="text-sm mb-2">Choose Payment</label>

                  <div className="flex -mx-2 flex-wrap">
                    {isLoading
                      ? Array(4)
                          .fill()
                          .map((_, index) => {
                            return (
                              <div
                                key={`Paymant${index}`}
                                className="px-2 w-6/12 h-24 mb-4"
                              >
                                <div className="bg-gray-300 w-full h-full animate-pulse rounded-lg mx-2"></div>
                              </div>
                            );
                          })
                      : data.payments.map((item) => {
                          return (
                            //  <!-- START: payment 1 -->
                            <div
                              key={`payment${item.id}`}
                              className="px-2 w-6/12 h-24 mb-4"
                            >
                              <button
                                onClick={() => {
                                  fnUpdateState({
                                    target: {
                                      name: "payment",
                                      value: item.id,
                                    },
                                  });
                                }}
                                data-value="midtrans"
                                data-name="payment"
                                type="button"
                                className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                              >
                                <img
                                  src={`/images/content/payment/${item.imgUrl}`}
                                  alt={item.name}
                                  className="object-contain max-h-full"
                                />
                              </button>
                            </div>
                            //  <!-- END: payment 1 -->
                          );
                        })}
                  </div>
                </div>
                {/* <!-- END: payment --> */}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={!isSubmitDisabled}
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
