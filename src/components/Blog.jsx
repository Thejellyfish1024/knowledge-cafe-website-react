
const Blog = ({ blog , handleReadingTime, handleMarkAsRead}) => {
    const { id, cover, title, author_img, author, hashtags, posted_date, reading_time } = blog;
    return (
        <div className="border-b-2 mb-7">
            <div>
                <img className="w-full rounded-xl" src={cover} alt="" />
            </div>
            <div className="space-y-4 mt-6 flex justify-between">
                <div className="flex gap-4">
                    <div>
                        <img className="h-14" src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold">{author}</h4>
                        <p className="font-semibold">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <a className='text-red-500' onClick={() => handleReadingTime( blog)}> icon</a>
                </div>
            </div>
            <h1 className="text-4xl font-bold my-5">{title}</h1>
            <p>{hashtags.map((hash, idx) => <span className="font-medium" key={idx}>#{hash}</span>)}</p>
            <button className="underline my-7" onClick={() => handleMarkAsRead(reading_time, id)}>Mark as read</button>
        </div>
    );
};

export default Blog;