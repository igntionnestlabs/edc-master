import Image from "next/image";

export const ParulImage = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full">
            <Image src='/assets/parulImage.jpg' alt='hero' layout='fill' className='absolute  top-0 left-0  object-cover' />
        </div>
    );
};