import './facilities.css';
import hostel from '../assets/hostel.png';
import FacilityCard from './FacilityCard';

function Facilities() {
    const facilities = [
        { id: 1, name: 'Hostel', img: hostel },
        { id: 2, name: 'Library', img: hostel },
        { id: 3, name: 'Gym', img: hostel },
        { id: 4, name: 'Cafeteria', img: hostel },
        { id: 5, name: 'Sports Facilities', img: hostel },
     
    ];

    return (
        <>
            <h2 className='sub-heading'>Facilities</h2>
            <div className="facilities-div">
                {facilities.map(facility => (
                    <FacilityCard
                        key={facility.id}
                        name={facility.name}
                        img={facility.img}
                    />
                ))}
            </div>
        </>
    );
}

export default Facilities;
