import React from "react";

const Form = ({ interaction_type, setInteractionType, description, setDescription, loading, handleSubmit }) => {
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
          Interaction Type
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <select 
            id="underline_select"
            value={interaction_type}
            onChange={e => setInteractionType(Number(e.target.value))}
            className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
              <option value={0}>Video</option>
              <option value={1}>Text</option>
              <option value={2}>Audio</option>
              <option value={3}>Inperson</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label
          className="block text-sm font-medium
              leading-5 text-bb-gray-700"
        >
          Description
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <textarea
            type="text"
            required={true}
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="description of the interaction"
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