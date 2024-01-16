const BlogCardComponent = ({ imgURL, title, date,description,id}) => {
    return (
        <>
            <div class="rounded overflow-hidden shadow-lg">
                <a href="#"></a>
                <div class="relative">
                    <a href="#">
                        <img class="w-full"
                            src={imgURL}
                        />
                        <div
                            class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </a>
                    <a href="!#">
                        <div
                            class="text-sm absolute top-0 right-0 bg-[#326EBD] px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-[#326EBD] transition duration-500 ease-in-out">
                            <span class="font-bold">{date}</span>
                            {/* <small>March</small> */}
                        </div>
                    </a>
                </div>
                <div class="px-6 py-4">

                    <a href={`/blogs/${id}`}
                        class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                        {title}</a>
                    <p class="text-gray-500 text-sm">
                        {description}
                    </p>
                </div>
                <div class="px-6 py-4 flex flex-row items-center">
                    <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">

                        <span class="ml-1">6 mins ago</span></span>
                </div>
            </div>
        </>
    )
}

export default BlogCardComponent