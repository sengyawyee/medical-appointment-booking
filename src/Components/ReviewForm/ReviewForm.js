import React, { useEffect, useState } from 'react';
import GiveReviews from './GiveFeedback';

const ReviewForm = () => {
    return (
        <center>
            <div>
                <h1>Review</h1>
                <table>
                    <tr style={{backgroundColor: "#dddddd"}}>
                        <th style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}><strong>Serial Number</strong></th>
                        <th style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}><strong>Doctor Name</strong></th>
                        <th style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}><strong>Doctor speciality</strong></th>
                        <th style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}><strong>Provide feedback</strong></th>
                        <th style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px"}}><strong>Review Given</strong></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Dr. John Doe</td>
                        <td>Cardialogy</td>
                        <td><GiveReviews /></td>
                        <td>   </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Dr. John Doe</td>
                        <td>Cardialogy</td>
                        <td><GiveReviews /></td>
                        <td>   </td>
                    </tr>
                </table>
                <br />
            </div>
        </center>
    );
}

// border: 1px solid #dddddd;
//   text-align: left;
//   padding: 8px;

export default ReviewForm;