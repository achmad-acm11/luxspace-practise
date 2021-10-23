import Breadcrumbs from "components/Breadcrumbs";
import fetch from "helpers/fetch";
import useAsync from "helpers/hooks/useAsync";
import CompleteRoom from "parts/DetailPage/CompleteRoom";
import Detail from "parts/DetailPage/Detail";
import Document from "parts/Document";
import Footer from "parts/Footer";
import Header from "parts/Header";
import React from "react";
import { useParams } from "react-router-dom";

function LoadingProductDetails() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-3 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {Array(5)
                .fill()
                .map((_, index) => {
                  return (
                    <div className="px-2" key={index}>
                      <div
                        className="rounded-xl item bg-gray-300 animate-pulse"
                        style={{ width: 106, height: 106 }}
                      ></div>
                    </div>
                  );
                })}
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <div className="rounded-lg h-pull overflow-hidden item bg-gray-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-6 md:p-6">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>

          <div className="w-44 h-10 mt-8 bg-gray-300 animate-pulse rounded-full"></div>

          <hr className="my-8" />

          <div className="w-36 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-96 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-64 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-88 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
function LoadingCompleteRoom() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div key={index} className="px-3 w-full md:w-3/12 mb-4 card">
                  <div className="rounded-xl p-4 pb-8 relative bg-white">
                    <div className="rounded-xl overflow-hidden card-shadow w-full h-48">
                      <div
                        className="bg-gray-300 animate-pulse rounded-lg h-full overflow-hidden"
                        style={{ width: 287, height: 150 }}
                      ></div>
                    </div>
                    <div className="w-56 mt-6 h-4 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-40 mt-3 h-4 bg-gray-300 animate-pulse rounded-full"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
export default function DetailPage() {
  const { productId } = useParams();
  const { data, error, run, isLoading, isError } = useAsync();

  React.useEffect(() => {
    run(fetch({ url: `/api/products/${productId}` }));
  }, [run, productId]);
  return (
    <Document>
      <Header theme="black" />
      <Breadcrumbs
        list={[
          { url: "/", name: "Home" },
          { url: "/categories", name: "Office Room" },
          { url: `/details/${productId}`, name: "Details" },
        ]}
      />
      {isError ? (
        console.log(error.errors.message)
      ) : (
        <>
          {isLoading ? <LoadingProductDetails /> : <Detail data={data} />}
          {isLoading ? (
            <LoadingCompleteRoom />
          ) : (
            <CompleteRoom data={data?.relatedProducts || {}} />
          )}
        </>
      )}
      <Footer />
    </Document>
  );
}
