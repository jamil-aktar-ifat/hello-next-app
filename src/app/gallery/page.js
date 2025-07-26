import Image from "next/image";
import nextImage from "../../assets/nextjs-image.webp"

const GalleryPage = () => {
    return (
        <div className="text-center">
            <h1 className="text-2xl text-center pt-10">Regular Image Tag</h1>
            <img src="https://nextjs.org/api/docs-og?title=Optimizing:%20Images" alt="" className="mx-auto" width={500} height={500}></img>

            <h1 className="text-2xl text-center pt-10">NextJS Image Tag</h1>
            <Image src="https://nextjs.org/api/docs-og?title=Optimizing:%20Images" alt="" width={500} height={500} className="mx-auto"></Image>


            <h1 className="text-2xl text-center pt-10">Local Image Tag</h1>
            <Image src={nextImage} alt="" width={500} height={500} className="mx-auto"></Image>

        </div>
    );
};

export default GalleryPage;