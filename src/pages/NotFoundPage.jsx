import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, I haven't created that page yet.</p>
            <Link to ={'/'}>
                <button>Home</button>
            </Link>
        </div>
    );
}

export default NotFoundPage;