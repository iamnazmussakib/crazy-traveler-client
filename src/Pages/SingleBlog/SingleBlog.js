import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './SingleBlog.css'

const SingleBlog = () => {
    const { user } = useAuth();
    const [singleBlog, setSingldata] = useState({});
    const { blogId } = useParams();
    useEffect(() => {
        fetch(`https://vast-inlet-83299.herokuapp.com/blogs/${blogId}`)
            .then(res => res.json())
            .then(data => setSingldata(data));
    }, [])
    return (
        <>
        <Navigation></Navigation>
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img src={`data:image/png;base64,${singleBlog.image}`} alt="" className="singlePostImg" />
                    <h1 className="singlePostTitle">
                        {singleBlog.title}
                    </h1>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">
                            Author:
                            
                            <b> {user.displayName}</b>
                        </span>
                        <span className="singlePostDate">
                            {singleBlog.date}
                        </span>
                    </div>
                    <p className="singlePostDesc">{singleBlog.desc}</p>
                </div>
                </div>
            <Footer></Footer>
        </>
    );
};

export default SingleBlog;