import React from "react";

//third-party
import { faClock, faLeaf, faShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureProducts = () => {
  return (
    <div className="mx-4 md:mx-12 my-10 shadow-md rounded-xl bg-gray-50 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 lg:gap-32 p-6 md:p-8 lg:p-10">
      {/* Feature 1 */}
      <div className="flex flex-col justify-center items-center text-center max-w-[240px]">
        <FontAwesomeIcon
          icon={faClock}
          className="text-gray-700 w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
        />
        <p className="mt-4 text-lg md:text-xl font-bold">Fast Delivery</p>
        <p className="mt-1 text-sm md:text-base text-gray-600">
          Essentials delivered in hours.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col justify-center items-center text-center max-w-[240px]">
        <FontAwesomeIcon
          icon={faLeaf}
          className="text-gray-700 w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
        />
        <p className="mt-4 text-lg md:text-xl font-bold">Fresh, Authentic Products</p>
        <p className="mt-1 text-sm md:text-base text-gray-600">
          Groceries, skincare, and more.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col justify-center items-center text-center max-w-[240px]">
        <FontAwesomeIcon
          icon={faShield}
          className="text-gray-700 w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
        />
        <p className="mt-4 text-lg md:text-xl font-bold">Trusted Quality</p>
        <p className="mt-1 text-sm md:text-base text-gray-600">
          Verified items. Easy returns.
        </p>
      </div>
    </div>
  );
};

export default FeatureProducts;

