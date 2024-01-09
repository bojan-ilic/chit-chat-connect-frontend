const HeaderAccount = () => {
    return (
        <div className="flex gap-3">
            <div className="bg-primary flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full">
                <span className="text-white">B</span>
            </div>
            <button>Logout</button>
        </div>
    );
};

export default HeaderAccount;
