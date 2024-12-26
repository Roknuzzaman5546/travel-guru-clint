// Blog writing page is created by Shajib and responsive design implementation by Tanbir
import { useForm } from 'react-hook-form';
import './Writeblogs.css'
import Swal from 'sweetalert2';
import { useContext, useRef, useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import { AuthContext } from '../../Authprovider/Authprovider';
import UseaxiosPublic from '../../Hooks/UseaxiosPublic';

const WriteBlogs = () => {
    const axiosPublic = UseaxiosPublic()
    const { user } = useContext(AuthContext)
    const [blogImages, setBlogImages] = useState([])
    const [showBlogImages, setShowBlogImages] = useState([])
    const [isBlogDragging, setIsBlogDragging] = useState(false)
    const fileBlogInputRef = useRef(null)
    // console.log(showBlogImages)
    const image_hosting_api =
        "https://api.imgbb.com/1/upload?key=041c88632a7cf1ed57bab64c7c558177";

    const onBlogFileSelect = (event) => {
        event.preventDefault();
        const files = event.target.files;
        setBlogImages(files[0])
        // console.log(files)
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!showBlogImages.some((e) => e.name === files[i].name)) {
                setShowBlogImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i])
                    }
                ])
            }
        }
    }

    function selectBlogFiles() {
        fileBlogInputRef.current.click();
    }

    const onBlogDragOver = (event) => {
        event.preventDefault();
        setIsBlogDragging(true)
        event.dataTransfer.dropEffect = "copy"
    }

    const onBlogDragLeave = (event) => {
        event.preventDefault();
        setIsBlogDragging(false)
    }

    const onBlogDrop = async (event) => {
        event.preventDefault();
        setIsBlogDragging(false)
        const files = event.dataTransfer.files;
        setBlogImages(files[0])

        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!showBlogImages.some((e) => e.name === files[i].name)) {
                setShowBlogImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i])
                    }
                ])
            }
        }
    }


    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const onSubmit = async (data) => {
        const imageBlogFile = { image: blogImages };
        const resBlog = await axiosPublic.post(image_hosting_api, imageBlogFile, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        const blogIMG = resBlog.data.data.url;
        console.log("imgbb", blogIMG)
        if (resBlog.data) {
            // console.log(res.data.data)
            setBlogImages(blogIMG)
        }
        const newBlog = {
            img: blogIMG,
            title: data.title,
            date: new Date().toLocaleDateString("en-GB"),
            details: data.details,
            facebookId: data.facebook,
            instagramId: data.instagram,
            linkedinID: data.linkedin,
            bloggerInfo: {
                bloggerName: user?.displayName,
                bloggerEmail: user?.email,
                bloggerImg: user?.photoURL
            }
        }
        console.log(newBlog)
        axiosPublic.post("/blogs", newBlog)
            .then(res => {
                console.log(res.data)
                Swal.fire(`Hey ${user.displayName} Your blog successfully added`)
                reset();
                setShowBlogImages([])
            })
    }

    return (
        <div>
            <div className="writeBlogBG">
                <div className=" bg-[#000000B2] rounded-lg">
                    <div className="max-w-full lg:w-fit xl:max-w-screen-2xl mx-auto lg:ml-5 xl:ml-12 py-24 w-[1350px] ">
                        <h2 className="text-6xl font-bold text-white font-serif pl-4">Write Blogs</h2>
                        <p className="text-lg font-normal text-gray-200 font-serif pl-4 pt-4">Your blogs Added here</p>
                    </div>
                </div>
            </div>
            <div className='py-1 bg-[#f3f3f3] w-full'>
                {/* blogs header */}
                <div className=" bg-white w-[93%] mx-auto shadow-md pl-6 py-3 mt-4 rounded-lg">
                    <ol className=" flex items-center gap-1">
                        <p>Blogs</p>
                        <p className=" font-bold text-[#002172]">/ Write blog</p>
                    </ol>
                </div>
                <div className=' w-[93%] bg-white  px-6 mx-auto mt-6 mb-20 shadow-lg rounded-lg pt-5'>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                            <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
                                <div className=' w-full'>
                                    <label className="label ">
                                        <span className="label-text text-lg font-semibold">
                                            Blog Title
                                        </span>
                                    </label>
                                    <input
                                        {...register("title", { required: true })}
                                        placeholder="Blog title*"
                                        className="input form-border input-bordered w-full"
                                    />
                                </div>
                            </div>
                            {/* socile media section */}
                            <div className='flex flex-col lg:flex-row justify-between items-center gap-3'>
                                <div className=' w-full'>
                                    <label className="label ">
                                        <span className="label-text text-lg font-semibold">
                                            Facebook Id
                                        </span>
                                    </label>
                                    <input
                                        {...register("facebook", { required: true })}
                                        placeholder="Facebook*"
                                        className="input form-border input-bordered w-full"
                                    />
                                </div>
                                <div className=' w-full'>
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">
                                            Instagram Id
                                        </span>
                                    </label>
                                    <input
                                        {...register("instagram", { required: true })}
                                        placeholder="Instagram*"
                                        className="input form-border input-bordered w-full"
                                    />
                                </div>
                                <div className=' w-full'>
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">
                                            Linkedin Id
                                        </span>
                                    </label>
                                    <input
                                        {...register("linkedin", { required: true })}
                                        placeholder="Linkedin*"
                                        className="input form-border input-bordered w-full"
                                    />
                                </div>
                            </div>
                            {/* write blog field  */}
                            <div className=' my-2'>
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">
                                        Write your blog
                                    </span>
                                </label>
                                <textarea
                                    {...register("details", { required: true })}
                                    className="textarea h-48 rounded-md px-5 w-full py-2  input-bordered"
                                    placeholder="Wrrite your blog"
                                ></textarea>
                            </div>
                            {/* blog images */}
                            <div className='flex flex-col lg:flex-row justify-between items-center gap-3 mb-5'>
                                <div className="form-control w-full">
                                    <label className="label ">
                                        <span className="label-text text-lg font-semibold">
                                            Blog image
                                        </span>
                                    </label>
                                    {/* this field updated to drag and drop option */}

                                    {showBlogImages[0] ?
                                        <div className=" flex justify-center flex-wrap items-center gap-2 border-2 rounded-md p-3 ">
                                            {
                                                showBlogImages.map((item, index) =>
                                                    <div key={index}>
                                                        <img  className=" w-[100px] h-[100px]" src={item.url} alt="Drop img" />
                                                    </div>)
                                            }
                                        </div> :
                                        <div className=" border-2 rounded-md p-3 flex flex-col justify-center items-center h-[130px]">
                                            <label className="drag-area text-center flex flex-col items-center" onDragOver={onBlogDragOver} onDragLeave={onBlogDragLeave} onDrop={onBlogDrop}>
                                                {isBlogDragging ? (<span>Drop imag here</span>) : (<>
                                                    <span role="button" onClick={selectBlogFiles}>
                                                        <FaPhotoVideo className="text-7xl font-bold"></FaPhotoVideo>
                                                    </span>
                                                </>)}
                                                <div className="">
                                                    <p className=" font-bold">Drop here files or click to upload Blog images</p>
                                                    <input
                                                        {...register("filesBlog")}
                                                        type="file"
                                                        placeholder="Drag and drop your image or url"
                                                        name="files"
                                                        className="file-input w-full h-[140px]"
                                                        multiple
                                                        ref={fileBlogInputRef}
                                                        onChange={onBlogFileSelect}
                                                        style={{ display: 'none' }}
                                                        required={true}
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className=' flex justify-end  pb-5'>
                                <button type="submit" className=" bg-[#ff9c1c] hover:bg-[#000] text-white px-6 py-4 rounded-md text-xl font-bold font-mono">Submit blog</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteBlogs;