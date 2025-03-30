const ProductInfoSection = () => {
    return (
        <div className="flex justify-between items-center my-16 px-8 lg:px-52">
            <div>
                <img src="https://images.unsplash.com/photo-1656407410275-e63e689bcd90?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="hidden sm:block rounded-lg sm:w-full md:w-[370px] md:max-w-[370px] lg:w-[490px] lg:max-w-[490px]"/>
            </div>
            <div className="sm:pl-8 lg:w-[490px]">
                <h2 className="text-3xl font-bold mb-5 text-agro-green md:text-4xl">Nossa solução</h2>
                <p className="text-sm mb-7 mt-30 font-light md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum rerum corporis eveniet voluptas nesciunt iure reiciendis. Perspiciatis perferendis quibusdam ullam corrupti voluptate! Perspiciatis perferendis quibusdam ullam corrupti voluptate!</p>
            </div>
        </div>
    )
}

export default ProductInfoSection;