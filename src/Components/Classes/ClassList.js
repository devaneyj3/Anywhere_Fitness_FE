import React from "react";

const ClassList = () => {
    return (
        <tbody>
            {classes.map((session, index) => (
                <tr key={session.id}>
                    {reserve ? (
                        <Button
                            name={session.id}
                            onClick={(e) => reserveClass(session, e)}
                            color="success"
                        >
                            Reserve
                        </Button>
                    ) : (
                        <th scope="row">{index + 1}</th>
                    )}
                    <td>{session.name}</td>
                    <td>{session.type}</td>
                    <td style={{ textTransform: "capitalize" }}>
                        {session.instructor_name}
                    </td>
                    <td>{session.duration} hr</td>
                    <td>{session.startTime} PM</td>
                    <td>{session.intensityLevel}</td>
                    <td>{session.location}</td>
                    <td>{session.attendees}</td>
                    <td>{session.maxClassSize}</td>
                </tr>
            ))}
        </tbody>
    );
};

export default ClassList;
