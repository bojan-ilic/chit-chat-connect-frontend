import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const PostSearch = ({ setSearchQuery }) => {
    const [searchTitleInput, setSearchTitleInput] = useState('');

    const [_, setSearchParams] = useSearchParams();

    const handleInputSearch = (e) => {
        setSearchTitleInput(e.target.value);
    };

    const handleSearch = () => {
        setSearchParams({ search: searchTitleInput });
        setSearchQuery(searchTitleInput);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="border-primary flex flex-col rounded-lg border p-[20px]">
            <input
                type="text"
                placeholder="Search post..."
                className="mb-[10px] rounded-lg border-2 px-[16px] py-[8px]"
                value={searchTitleInput}
                onChange={handleInputSearch}
                onKeyDown={handleKeyDown}
            />
            <button
                className="bg-primary rounded-md py-[3px] text-white"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default PostSearch;
