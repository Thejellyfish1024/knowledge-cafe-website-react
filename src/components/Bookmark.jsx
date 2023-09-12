const Bookmark = ({blog}) => {
    return (
        <div className="text-2xl font-semibold mt-3 p-5 rounded-lg bg-slate-100">
            {blog.title}
        </div>
    );
};

export default Bookmark;