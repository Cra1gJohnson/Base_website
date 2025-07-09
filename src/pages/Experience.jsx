
import './Experience.css';


// I am going about this all wrong.
// Tabs needs to be a seperate component that is imported into the Experience page.
// That way it can be used in other pages and have the same format.
export default function Experience() {
    return (
        <div className="background">
            <div className="main-body">
                <div className="tabs-bar">
                    <h1>test</h1>
                </div>
                <h1>Project Experience</h1>
            </div>
        </div>
    )
}