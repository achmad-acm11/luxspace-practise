import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    /* <!-- START: Success --> */
    <section class="py-4 md:py-16">
      <div class="container mx-auto min-h-screen px-4">
        <div class="flex flex-col items-center justify-center">
          <div class="w-full md:w-4/12 text-center">
            <h2 class="text-3xl font-semibold mb-6">404 Not Found</h2>
            <p class="text-lg mb-12">
              Ooops Something when wrong.
            </p>
            <Link
              to="/"
              class="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition duration-200 px-8"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
    /* <!-- END: Success --> */
  );
}
