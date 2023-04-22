export const Delegationstap = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="">
        <div className="lg:py-6 lg:pr-16">
          <div className="grid grid-cols-3">
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Step 1</p>
              <p className="text-gray-700">
                All recipes are written using certain conventions, which define
                the characteristics of commo. The rusdsdfsles vary from place to
                place.
              </p>
            </div>
            <div className="flex flex-col items-center mr-4">
            <div className="w-px h-full bg-gray-300" />
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Step 3</p>
              <p className="text-gray-700">
                All recipes are written using certain conventions, which define
                the characteristics of common ingredients. The rules vary from
                place to place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
