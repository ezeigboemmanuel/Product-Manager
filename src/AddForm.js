import React from "react";

const AddForm = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Add a new product
          </h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="Type product name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="brand"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
                  placeholder="Product brand"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  for="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
                  placeholder="$2999"
                  required
                />
              </div>
              <div>
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected="">Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div>
                <label
                  for="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Item Weight (kg)
                </label>
                <input
                  type="number"
                  name="item-weight"
                  id="item-weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
                  placeholder="12"
                  required
                />
              </div>
              <div>
                <label
                  for="color"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Color
                </label>
                <select
                  id="color"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected="">Select color</option>
                  <option value="TV">Black</option>
                  <option value="PC">White</option>
                  <option value="GA">Silver</option>
                  <option value="PH">Blue</option>
                  <option value="PH">Other</option>
                </select>
              </div>
              <div>
                <label
                  for="available"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Available
                </label>
                <select
                  id="available"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option value="TV">Yes</option>
                  <option value="PC">No</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddForm;
