import './team.css'
import TeamGenerator from './teamGenerator'
export default function Team() {
    const team = [
        { id: 1, image: 'image/team/team-1.jpg', title: 'Manager', detail: 'Default Lorem Function' },
        { id: 2, image: 'image/team/team-2.jpg', title: 'Developer', detail: 'Default Lorem Function' },
        { id: 3, image: 'image/team/team-3.jpg', title: 'Programmer', detail: 'Default Lorem Function' },
        { id: 4, image: 'image/team/team-4.jpg', title: 'Designer', detail: 'Default Lorem Function' }
    ]
    return (
        <div>
            <div className='team-container1'>
                <TeamGenerator {...team[0]}></TeamGenerator>
                <TeamGenerator {...team[1]}></TeamGenerator>
            </div>
            <div className='team-container2'>
                <TeamGenerator {...team[2]}></TeamGenerator>
                <TeamGenerator {...team[3]}></TeamGenerator>
            </div>
        </div>
    )
}