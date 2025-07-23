import Navbar from "@/components/shared/Navbar";


const CommonLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default CommonLayout;