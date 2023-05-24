import React, {useState, useEffect} from 'react'

function App (){


    const [initialData, setInitialData] = useState([{}]);
    useEffect(() => {
        fetch('http://127.0.0.1:5000/members').then(
            response => response.json()
        ).then(data => setInitialData(data))
    }, []);

    return (
        <div className="App">
            <h1 className="header">Twitter Sentiment Analysis</h1>
            <form action="http://127.0.0.1:5000/members" method = "POST">
                <div className="forms">
                    <label>
                        Enter Twitter Handle:
                        <input type="text" name="handle" />
                    </label>
                    <label>
                        Enter Number of Tweets (200 Limit):
                        <input type="text" name="tCount"/>
                    </label>
                </div>
                <div className = "button">
                    <input type="submit" />
                </div>
            </form>

        </div>
    );

}
export default App;
