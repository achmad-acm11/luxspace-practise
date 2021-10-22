import React from 'react'
import { Link } from 'react-router-dom'

export default function Success() {
    return (
        /* <!-- START: Success --> */
        <section className="py-4 md:py-16">
          <div className="container mx-auto min-h-screen px-4">
            <div className="flex flex-col items-center justify-center">
              <div className="w-full md:w-4/12 text-center">
                <img src="/images/content/illustration-success.png" alt="illustration success" />
                <h2 className="text-3xl font-semibold mb-6">Ah yes it's success!</h2>
                <p className="text-lg mb-12">
                  Furniture yang anda beli akan kami kirimkan saat ini juga so now
                  please sit tight and be ready for it
                </p>
                <Link to="/" className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition duration-200 px-8">Back to Shop</Link>
              </div>
            </div>
          </div>
        </section>
        /* <!-- END: Success --> */
    )
}
