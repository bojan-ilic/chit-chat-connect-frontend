import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="container mx-auto mt-[20px] px-4">
            <h1>APP</h1>
            <Outlet />
        </div>
    );
}

export default App;
