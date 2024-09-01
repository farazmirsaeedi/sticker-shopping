
const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-s">
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;
