import React from 'react';

const Result = (props) => {
    return (
        <div>
            <div>
            </div>
            <table>
                    <thead>
                        <tr>
                            <th>avatar_url</th>
                            <th>login</th>
                            <th>type</th>
                        </tr>
                    </thead>
                <tbody>{props.items.map((item) => {
                    return(
                        <tr key={item.id}>
                            <td>{item.avatar_url}</td>
                            <td>{item.login}</td>
                            <td>{item.type}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Result;