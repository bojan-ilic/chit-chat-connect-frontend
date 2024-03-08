// Import the 'useState' hook from React to manage the input state
import { useState } from 'react';
// Import 'useSearchParams' hook from react-router-dom to manipulate URL search parameters
import { useSearchParams } from 'react-router-dom';

/**
 * PostSearch Component
 *
 * Provides a search component for filtering posts based on user input.
 * This component renders an input field for entering search terms and a button to initiate the search.
 * When a search is conducted, it updates the URL's search parameters to reflect the current search query
 * and informs the parent component to fetch and display the filtered posts accordingly.
 * It supports initiating searches both by clicking the search button and pressing the Enter key.
 *
 * @returns {JSX.Element} A search input field and button within a styled div container.
 */

// Define the PostSearch component that receives setSearchQuery as a prop
// 'setSearchQuery' is a function prop for updating the parent component's state with the new search query
const PostSearch = ({ setSearchQuery }) => {
    // State for storing the current value of the search input field
    const [searchTitleInput, setSearchTitleInput] = useState('');

    // Hook to read and set URL search parameters; the unused return value is ignored with '_'
    const [_, setSearchParams] = useSearchParams();

    // Function to handle changes in the search input field, updating the search input state with the new value
    const handleInputSearch = (e) => {
        setSearchTitleInput(e.target.value);
    };

    // Triggers search functionality, updating URL's search parameters and informing parent component
    const handleSearch = () => {
        setSearchParams({ search: searchTitleInput }); // Update the URL's search parameters to reflect the current search input, facilitating bookmarking and sharing of searches
        setSearchQuery(searchTitleInput); // Updates the parent component's search state with the current search input value
    };

    // Allows initiating search by pressing the Enter key
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // The rendered component: a div containing the search input and button
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

// Export PostSearch component for accessibility throughout the application
export default PostSearch;
