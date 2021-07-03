import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../globalState'


export default function History() {
    const state = useContext(GlobalState)
    const [history] = state.UserAPI.history
    return (
        <div className="history-page">
            <h2>History</h2>
            <h4>You have {history.length} orders</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Date of Purchase</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            history.map(items => (
                                <tr key={items._id}>
                                    <td>{items.paymentID}</td>
                                    <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                    <td><Link to={`/history/${items._id}`}>View</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
    )
}
