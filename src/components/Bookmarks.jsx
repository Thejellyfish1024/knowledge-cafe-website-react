import Bookmark from "./Bookmark";

const Bookmarks = ({readingTime, blogs}) => {
    return (
        <div className="ml-6">
            <div className="text-2xl font-bold text-center bg-slate-300 py-4 rounded-lg">Spent time on read : {readingTime} min</div>
            <div className="text-center bg-slate-300 mt-5 py-4 rounded-lg min-h-screen">
                <h3 className="text-2xl font-bold">Bookmarked Blogs : {blogs.length}</h3>
                <div className="p-4">
                {
                    blogs.map((blog,idx) => <Bookmark key={idx} blog={blog}></Bookmark>)
                }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;