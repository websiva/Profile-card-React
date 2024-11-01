import './UserCard.css';

interface UserProps {
    name: string;
    city: string;
    description: string;
    skills: string[];
    profile: string;
    online: boolean;
}

const userData:UserProps[] = [
    {
        name: "John",
        city: "Los Angeles",
        description: "front-end developer",
        skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Sass", "Bootstrap"],
        profile: "1.jpg",
        online: true
    },
    {
        name: "Ahmed",
        city: "Dubai",
        description: "software engineer",
        skills: ["Python", "Django", "Flask", "PostgreSQL", "JavaScript","HTML","CSS"],
        profile: "2.jpg",
        online: false
    },
    {
        name: "Carlos",
        city: "Madrid",
        description: "data analyst",
        skills: ["SQL", "Excel", "Python", "Power BI", "Tableau","Java",".NET"],
        profile: "3.jpg",
        online: true
    }
]
const User: React.FC<UserProps> = (props) => {
    return (
        <div className="card-container">
            <span className={props.online?"pro online":"pro offline"}>
                {props.online?"ONLINE":"OFFLINE"}
            </span>
            <img src={props.profile} alt="user" className='img' />
            <h3 className="fullname">{props.name}</h3>
            <h3 className="city">{props.city}</h3>
            <p className="designation">{props.description}</p>
            <div className='buttons'>
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export const UserCard:React.FC = () => {
    return (
        userData.map((user,index)=>(
            <User key={index} name={user.name} city={user.city} description={user.description} profile={user.profile} skills={user.skills} online={user.online} />
        ))
    )
}
