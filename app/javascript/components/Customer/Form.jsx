import React from "react";

const Form = ({ name, setName, website, setWebsite, country, setCountry, loading, handleSubmit }) => {
  const handleClick = e => {

    return null;
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mt-6">
        <label
          className="block text-sm font-medium
              leading-5 text-bb-gray-700"
        >
          Name
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type="text"
            required={true}
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name of the Customer"
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          className="block text-sm font-medium
              leading-5 text-bb-gray-700"
        >
          Website
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type="text"
            required={true}
            value={website}
            onChange={e => setWebsite(e.target.value)}
            placeholder="Website of the Customer"
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          className="block text-sm font-medium
              leading-5 text-bb-gray-700"
        >
          Country
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type="text"
            required={true}
            value={country}
            onChange={e => setCountry(e.target.value)}
            placeholder="Country"
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          onClick={handleClick}
          disabled={loading}
          className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}
        >
          {loading ? "Loading..." : "Create"}
        </button>
      </div>
    </form>
  );
};

export default Form;