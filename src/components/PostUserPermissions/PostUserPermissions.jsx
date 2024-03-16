/**
 * PostUserPermissions.jsx
 *
 * Displays information about user permissions and post interactions.
 * @returns {JSX.Element} A notice with concise information about user permissions and post interactions.
 */
const PostUserPermissions = () => {
    return (
        <div className="border-primary mt-[20px] rounded-lg border p-[20px]">
            <p className="mb-[10px] text-center">
                <strong className="font-bold text-gray-600 ">
                    Quick Guide for Users
                </strong>
            </p>

            <ul className="list-disc pl-5 text-gray-600 ">
                <li className="pt-1">All users can browse and like posts</li>
                <li className="pt-1">
                    Users can delete only their own posts, while admins can
                    remove any
                </li>
                <li>
                    New posts await admin approval before being visible to all
                </li>
            </ul>
        </div>
    );
};

// Export 'PostUserPermissions' component for accessibility throughout the application
export default PostUserPermissions;
