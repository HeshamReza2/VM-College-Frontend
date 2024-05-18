import React, { useState } from 'react'
import { useLocation } from 'react-router'

function SamplePage() {
    const location = useLocation()

    const [data, setData] = useState(location.state)
    console.log(data);
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Segment</th>
                <th>Country</th>
            </tr>
        </thead>

        <tbody>
            {data && data.map((item, index) => {
                if(index<10){
                    return(
                        <tr key={index}>
                            <td>{item.Segment}</td>
                            <td>{item.Country}</td>
                        </tr>
                    )
                }
            })}
        </tbody>
      </table>
    </div>
  )
}

export default SamplePage
