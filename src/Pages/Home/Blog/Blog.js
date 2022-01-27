import React from 'react';

const Blog = ({sBlog}) => {
    return (
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{sBlog.title}</h5>
                    <p class="card-text">{sBlog.desc.slice(0, 100)}</p>
                    <p class="card-text"><small class="text-muted">{sBlog.date}</small></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;