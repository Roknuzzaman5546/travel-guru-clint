import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseaxiosPublic from "../../Hooks/UseaxiosPublic";
import React, { useState } from "react";
import SearchDropdown from "../../Shared/SearchDropdown";

const AddBus = () => {
  const [inputValue, setInputValue] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const axiosPublic = UseaxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setDataArray([...dataArray, inputValue.trim()]);
      setInputValue("");
    }
  };
  console.log(dataArray);

  const onSubmit = (data) => {
    console.log(data);
    // axiosPublic.post("/place", data).then((res) => {
    //   console.log(res.data);
    //   if (res.data) {
    //     Swal.fire(`${data.name} is added surely`);
    //   }
    // });
    reset();
  };

  return (
    <div className="md:max-w-screen-2xl w-[95%] mx-auto">
      <h2 className=" text-4xl text-center font-bold font-mono my-5">
        Add your new Bus with all Requerments
       </h2>
      <div className=" bg-[#eae8e8] px-8 py-10 rounded space-y-2 text-black">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="text-xl font-mono">Bus name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              {...register("name", { required: true })}
              className="py-2 px-2 rounded-md text-xl font-mono w-full"
            />
          </div>
          {/* title & couch */}
          <div className=" flex items-center gap-6 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl font-mono">Bus Ttiel*</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                {...register("title", { required: true })}
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl font-mono">Coach*</span>
              </label>
              <input
                type="text"
                {...register("coach", { required: true })}
                placeholder="Coach"
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
              />
            </div>
          </div>
          {/* start and end time */}
          <div className=" flex items-center gap-6 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl font-mono">Start time*</span>
              </label>
              <input
                type="text"
                placeholder="Start Time"
                {...register("start-time", { required: true })}
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl font-mono">Arr Time*</span>
              </label>
              <input
                type="text"
                {...register("arr-time", { required: true })}
                placeholder="Arr time"
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
              />
            </div>
          </div>
          <label className="label">
            <span className="text-xl font-mono">Route *</span>
          </label>
          {/* route feild */}
          <div>
            <div className=" flex items-center ">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
                placeholder="Enter data"
              />
              <button
                className="-ml-16 bg-[#adacac] px-2.5 py-1 rounded-md"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
            <ul className=" flex justify-start items-center gap-2 mt-2">
              {dataArray.map((item, index) => (
                <li className=" text-sm font-mono" key={`${item} asdf`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <label className="label">
            <span className="text-xl font-mono">Fare with Route *</span>
          </label>
          {/* Fare-route */}
          <div>
            <div className=" flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
                placeholder="from"
              />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
                placeholder="to"
              />
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
                placeholder="Fare"
              />
              <button className=" bg-[#adacac] px-2.5 py-1 rounded-md">
                Add
              </button>
            </div>
            <ul className=" flex justify-start items-center gap-2 mt-2">
              {dataArray.map((item, index) => (
                <li className=" text-sm font-mono" key={`${item} asdf`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex items-center gap-6 w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl font-mono">Start From</span>
              </label>
              <input
                type="text"
                placeholder="Start From"
                {...register("start-from", { required: true })}
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl font-mono">Ending Poent</span>
              </label>
              <input
                type="text"
                {...register("end-poent", { required: true })}
                placeholder="Ending Poent"
                className="py-2 px-2 rounded-md text-xl font-mono w-full"
              />
            </div>
          </div>

                    <div className=" flex items-center gap-6 w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Couche</span>
                            </label>
                            <input type="text" placeholder="Image url" {...register("couche", { required: true })} className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Title</span>
                            </label>
                            <input type="text" {...register("cost", { required: true })} placeholder="title" className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                    </div>

                    <div className=" flex flex-row-reverse items-center gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-xl font-mono">Title?</span>
                            </label>
                            <input type="text" placeholder="Type title" {...register("title", { required: true })} className="py-2 px-2 rounded-md text-xl font-mono w-full" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-xl font-mono">Rating*</span>
                            </label>
                            <input type="text" {...register("rating", { required: true })} placeholder="Type here" className="py-2 px-2 rounded-md text-xl font-mono w-full max-w-xs" />
                        </div>
                    </div>
                    <button className="bg-[#000] hover:bg-[#ff9c1c] text-white px-6 py-4 rounded-md text-xl font-bold font-mono mt-3 flex justify-between gap-2 items-center">
                        Add items <FaLocationArrow className="text-xl"></FaLocationArrow>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBus;
