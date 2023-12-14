import PropTypes from 'prop-types';
import axios from 'axios'

function Booking(props) {


    return (
        
        <tr>
            <td>{props.buyername}</td>
            <td>{props.date}</td>
            <td>{props.time}</td>
            <td><button className='btn btn-danger ' type="button" onClick={() => {
                        axios.delete("http://localhost:3030/bookings/" + props.id)
                            .then(res => { props.getBookings() })
                            
                            .catch(err => console.error(err));
                    }}>DELETE</button></td>
        </tr>
    );
}

Booking.propTypes = {
    time: PropTypes.string,
    date: PropTypes.string,
    buyername: PropTypes.string,
    id: PropTypes.number,
}

export default Booking;