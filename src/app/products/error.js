"use client";

const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h1 className="text-center text-red-500 text-xl">
        Something went wrong!!!
      </h1>
      <p className="text-center text-red-500 text-xl">{error.message}</p>

      <div className="text-center ">
        <button
          onClick={() => reset()}
          className="bg-red-500 text-white py-2 px-5 rounded-md"
        >
          Try Again
        </button> 
      </div>
    </div>
  );
};

export default ErrorPage;
