

const DashboardLayout = ({children}) => {
    return (
        <div>
            <navbar>Navbar</navbar>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default DashboardLayout;