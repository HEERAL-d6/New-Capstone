import React, { useEffect, useState } from 'react';
import Sidebar2 from './Sidebar2';
import Cookies from 'js-cookie';
import axios from 'axios';

import { useNavigate } from 'react-router';

function Editdead({ number, setNumber }) {
    const navigate = useNavigate();
    function Logout() {

        // Clear the accessToken cookie

        Cookies.remove('accessToken');



        // Redirect the user to the home page or wherever you want

        navigate('/'); }
    const [deadlines, setDeadlines] = useState([]);
    const [editableDates, setEditableDates] = useState({});

    useEffect(() => {
        getDeadline();
    }, []);

    function getDeadline() {
        const yourConfig = {
            headers: {
                Authorization: "Bearer " + Cookies.get('accessToken')
            }
        };

        axios.get("https://daluvnubla.execute-api.us-west-2.amazonaws.com/dev/api/hack", yourConfig)
            .then((res) => {
                setDeadlines(res.data);
                setEditableDates({});
            })
            .catch((error) => {
                console.error('Error fetching deadlines:', error);
            });
    }

    const handleDateChange = (deadlineId, field, value) => {
        setEditableDates({
            ...editableDates,
            [deadlineId]: {
                ...editableDates[deadlineId],
                [field]: value,
            },
        });
    };

    const saveChanges = () => {
        const yourConfig = {
            headers: {
                Authorization: "Bearer " + Cookies.get('accessToken')
            }
        };

        const updatedDeadlines = deadlines.map((deadline) => ({
            ...deadline,
            startTimeStamp: editableDates[deadline.id]?.startTimeStamp || deadline.startTimeStamp,
            endTimeStamp: editableDates[deadline.id]?.endTimeStamp || deadline.endTimeStamp,
        }));
        console.log(updatedDeadlines)
        // axios.post("https://daluvnubla.execute-api.us-west-2.amazonaws.com/dev/api/hack", updatedDeadlines, yourConfig)
        //     .then(() => {
        //         // Data has been saved successfully. You can add any additional handling here.
        //     })
        //     .catch((error) => {
        //         console.error('Error saving changes:', error);
        //     });
    };

    return (

        <>
            <Sidebar2 number={number} setNumber={setNumber} />

            <button

                    className=" col-auto btn btn-dark "

                    onClick={Logout}

                    type="button"

                    style={{ fontSize: "1rem", height: "2rem", width: "7rem", padding: "0rem", position: 'absolute', top: '3vh', left: '80vw' }}

                >

                    Logout

                </button>


            <div style={{ width: "60%" }}>
                {/* Rest of your component */}
                <div style={{ marginTop: "10rem", marginLeft: "12rem" }}>
                    <div>
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">START DATE</th>
                                    <th scope="col">END DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deadlines.map((deadline) => (
                                    <tr key={deadline.id}>
                                        <th scope="row">
                                            <span className="fw-semibold">{deadline.statusName}</span>
                                        </th>
                                        <td>
                                            <input
                                                style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }}
                                                type="date"
                                                value={editableDates[deadline.id]?.startTimeStamp || new Date(Number(deadline.startTimeStamp)).toISOString().split('T')[0]}
                                                onChange={(e) => handleDateChange(deadline.id, 'startTimeStamp', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                style={{ fontSize: "0.7rem", height: "1.5rem", width: "8rem" }}
                                                type="date"
                                                value={editableDates[deadline.id]?.endTimeStamp || new Date(Number(deadline.endTimeStamp)).toISOString().split('T')[0]}
                                                onChange={(e) => handleDateChange(deadline.id, 'endTimeStamp', e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <button
                                type="button"
                                onClick={saveChanges}
                                style={{ fontSize: "0.7rem", height: "2rem", width: "7rem", marginTop: "2rem" }}
                                className="float-end btn btn-dark btn-sm"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Editdead;
