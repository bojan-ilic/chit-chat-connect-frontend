// Import the 'useSelector' hook from Redux to enable component access to the Redux store state
import { useSelector } from 'react-redux';
// Import the useSearchParams hook from react-router-dom to manipulate URL query parameters for pagination
import { useSearchParams } from 'react-router-dom';
// Import the 'useEffect' hook from React to perform side effects in response to changes in the component lifecycle
import { useEffect } from 'react';
// Import specific icons from 'react-icons' for visually representing navigation to the next and previous pages
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from 'react-icons/bs';

/**
 * Pagination component for navigating through pages of posts.
 * Utilizes URL search parameters to control the current page and number of items per page.
 * Reacts to changes in the total count of items (provided by the Redux store) to adjust the available navigation options.
 * @returns {JSX.Element} A flex container with navigation arrows and page number buttons for pagination.
 */

const Pagination = () => {
    // Retrieve the total count of paginated items from the Redux store to calculate the number of pages
    const { count } = useSelector((state) => state.postsStore);

    // Hook to read and set URL search parameters for current page and limit
    const [searchParams, setSearchParams] = useSearchParams();

    // Extract the current page number from URL search parameters, ensuring it's interpreted as an integer
    let page = searchParams.get('page')
        ? parseInt(searchParams.get('page'))
        : 1;

    // Extract the items per page limit from URL search parameters, ensuring it's interpreted as an integer
    let limit = searchParams.get('limit')
        ? parseInt(searchParams.get('limit'))
        : 9;

    // Update URL search parameters whenever the 'searchParams' dependency changes
    useEffect(() => {
        handleSearchParams(page); // Update search parameters to reflect the current page
    }, [searchParams]);

    // Update URL search parameters to reflect the current page and items per page, facilitating bookmarking and sharing
    const handleSearchParams = (page) => {
        setSearchParams({ page, limit }); // Set the new search parameters in the URL
    };

    // Increment the page number in URL search parameters if there are more items to view, enabling navigation to the next page
    const handleNextPage = () => {
        // Check if more pages are available
        if (page < Math.ceil(count / limit)) {
            handleSearchParams(page + 1); // Navigate to the next page
        }
    };

    // Generate page number buttons based on the total item count and items per page, offering direct navigation to specific pages
    const pageOfPagination = () => {
        // Calculate the total number of pages based on the count of items and the limit per page
        let numberOfPages = Math.max(1, Math.ceil(count / limit));

        // Generate an array of page numbers and map over it to create button elements for each page
        return Array(numberOfPages)
            .fill(1)
            .map((_, index) => {
                const pageNumber = index + 1; // Increase the zero-based index by 1 to align with user-friendly page numbering starting at 1
                return (
                    <button
                        className={`${
                            page === pageNumber ? 'bg-primary' : ''
                        } rounded-lg p-2.5 `}
                        key={index}
                        name={pageNumber}
                        onClick={handleCurrentPage}
                    >
                        {pageNumber}
                    </button>
                );
            });
    };

    // Handle the selection of a specific page number, updating the current page in URL search parameters
    const handleCurrentPage = (e) => {
        // Call 'handleSearchParams' with the page number of the clicked button to update the URL search parameters
        handleSearchParams(e.target.name);
    };

    // Decrement the page number in URL search parameters if not on the first page, enabling navigation to the previous page
    const handlePreviousPage = () => {
        // Check if the current page is greater than 1 to enable going to the previous page
        if (page > 1) {
            // Decrement the current page number by 1 and update the URL search parameters
            handleSearchParams(page - 1);
        }
    };

    // Render the pagination component with navigation arrows and page buttons
    return (
        <div className="my-[25px] flex w-full items-center justify-center gap-3">
            <BsFillArrowLeftCircleFill
                className="mr-[5px] h-[30px] w-[30px] cursor-pointer"
                onClick={handlePreviousPage}
            />
            {pageOfPagination()}
            <BsFillArrowRightCircleFill
                className=" mr-[5px] h-[30px] w-[30px] cursor-pointer"
                onClick={handleNextPage}
            />
        </div>
    );
};

// Export Pagination component for accessibility throughout the application
export default Pagination;
