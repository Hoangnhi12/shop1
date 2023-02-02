import FormRow from "../../../components/common/FormRow";
import { useForm } from "react-hook-form";

const AdminProductsNew = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className=" py-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* fields */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Title */}
              <FormRow label="Title" className="col-span-full">
                <input
                  type="text"
                  placeholder="enter your product name here..."
                  className="input input-bordered w-full"
                  {...register("title")}
                />
              </FormRow>
              {/* Category */}
              <FormRow label="Category">
                <select
                  className="select select-bordered w-full"
                  defaultValue="default"
                  {...register("category")}
                >
                  <option disabled value="default">
                    Choose a Category
                  </option>
                  <option value="laptop">Laptop</option>
                  <option value="car">Car</option>
                </select>
              </FormRow>

              {/* Price */}
              <FormRow label="Price">
                <input
                  type="text"
                  placeholder="0"
                  className="input input-bordered w-full"
                  {...register("price")}
                />
              </FormRow>

              {/* ImageUrl */}
              <FormRow label="Image Url" className="col-span-full">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  {...register("imageurl")}
                />
              </FormRow>

              {/* Description */}
              <FormRow label="Description" className="col-span-full">
                <textarea
                  className="textarea textarea-bordered resize-none h-30"
                  {...register("descripition")}
                  placeholder="Bio"
                ></textarea>
              </FormRow>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary"
              {...register("submitbutton")}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsNew;
