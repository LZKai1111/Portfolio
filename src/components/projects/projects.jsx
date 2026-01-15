
export default function SectionProjects({ arr }) {
    return(
        <>
            <div className="section-container">
                <div className="section-header header">
                    <h3>PROJECTS</h3>
                </div>

                <div className="section-body section-projects">     
                    {arr.map((data, id) => {
                        const {url, picture, title, description, tags} = data;

                        return (    
                            <div key={id} className="section-card flex">
                                <div className="project-image mg-rg-1">
                                    <img src={picture} />
                                </div>

                                <div className="project-content">
                                    <div className="card-top">
                                        <a 
                                            href={url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="url-link animated-link"
                                        >{title} &rarr;</a>
                                    </div>

                                    <div className="card-notes">{description}</div>

                                    <div className="card-tags">
                                        {tags.map((tag, tagID) => (
                                            <span key={tagID} className="card-tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}