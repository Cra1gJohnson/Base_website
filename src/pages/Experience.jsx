
import './Experience.css';
import TabsBar from '../assets/components/tabsbar.jsx';


// I am going about this all wrong.
// Tabs needs to be a seperate component that is imported into the Experience page.
// That way it can be used in other pages and have the same format.
export default function Experience() {
    return (
        <div className="background">
            <div className="main-body">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <TabsBar />
                </div>
                <h1>Project Experience</h1>
            </div>
        </div>
    )
}