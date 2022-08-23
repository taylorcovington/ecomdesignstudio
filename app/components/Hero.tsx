export default function Hero() {
  return(
    <div
    className="relative bg-gray-800 overflow-hidden flex justify-center"
    style={{ height: "37rem" }}
  >
    <div
      className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
      aria-hidden="true"
    >
      <div className="relative h-full max-w-7xl mx-auto">
        <svg
          className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-700"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
          />
        </svg>
        <svg
          className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-700"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </svg>
      </div>
    </div>

    <div className="relative pt-10 pb-16 sm:pb-24">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
            <div className="md:block mb-2">E-Comm Design Studio</div>{" "}
            <div className="text-[#00AEEF] md:block"></div>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Do do one thing very well, make your e-commerce store exactly how you want it.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div
                  className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
                >
                  <a
                    href={
                      "#contactMe"
                    }
                    className={
                      "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00AEEF] hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    }
                  >
                    Get Started
                  </a>
                </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}