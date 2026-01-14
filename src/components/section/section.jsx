import "./style.css"

export default function Section({ item }) {
    const {header, data} = item;
    return(
        <div className="section-container">
            <div className="section-header header">
                <h3>{header}</h3>
            </div>

            <div className="section-body">
                {data.map((item, itemID) => (
                    <div key={itemID} className="section-card">
                        <div className="card-top">
                            <div>{item?.title}</div>
                            <div>{item?.date}</div>
                        </div>

                        <div className="card-notes">
                            {item?.notes?.map((note, noteID) => (
                                <div key={noteID}>{note}</div>
                            ))}
                        </div>
                        
                        <ul className="card-description">
                            {item?.description?.map((desc, descID) => (
                                <li key={descID}>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}