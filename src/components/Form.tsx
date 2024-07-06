import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../redux/actions';

const Form: React.FC = () => {
    const dispatch = useDispatch();

    const handleFetchData = () => {
        let data : any = document.getElementById("myHeader");
        dispatch(fetchData(data));
    };

    return (

        <html>
            <head>
                <style>

                </style>
            </head>
            <body>

                <h2>The id Attribute</h2>
                <p>Use CSS to style an element with the id "myHeader":</p>

                <h1 id="myHeader">My Header</h1>
                <div>
                    <h1>Form Component</h1>
                    {/* Example button to fetch data by ID */}
                    <button onClick={() => handleFetchData()}>Fetch Data</button>
                </div>
            </body>
        </html>

    );
};

export default Form;
