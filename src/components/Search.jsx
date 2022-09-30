import React from "react";
import Result from './Result'
import Alert from '@mui/material/Alert';
import Pagination from '@mui/material/Pagination';
import CircularProgress from '@mui/material/CircularProgress';

const Search = (props) => {

    return (
        <div>
            <div className='app'>
                {
                    props.error
                        ?
                    <Alert severity="error">Error, pleas reload the page</Alert>
                        :
                    null
                }
                <div className="login">
                    <h1 className="text-primary">Login</h1>
                        <input onChange={(e) => props.setInputValue(e.target.value)} id="myInput" value={props.nputValue} className="auth" placeholder='Enter login' />
                        <button  onClick={props.handleClick} className="btn_sumbit" >Submit</button>
                            <div className="filters">
                                <h3>Sorting for field:
                                    <select id='field' className="field" onChange={props.makeFilter.bind(this)}>
                                        <option value='login'>Login</option>
                                        <option value='avatar_url'>Avatar_url</option>
                                        <option value='login'>type</option>
                                    </select>
                                </h3>
                                <h3>Direction for sorting:
                                    <select id='direction' className = 'direction' onChange={props.makeFilter.bind(this)}>
                                        <option value='asc'>ASC</option>
                                        <option value='desc'>DESC</option>
                                    </select>
                                </h3>
                            </div>
                        <div>
                            {props.data.length > 0 ? <Result items={props.data}  /> : ''}
                        </div>
                        <div className="CircularProgress">
                            {props.loading ? <CircularProgress /> : null}
                        </div>
                    </div>
                    <div className="MuiPagination">
                        {
                            props.total > 0 
                            ?
                                <Pagination
                                    count={Math.trunc(props.total / props.perPage)}
                                    page={props.page}
                                    onChange={(e, page) => props.setPage(page)}
                                />
                            :
                            null
                        }
                    </div>
                    <div className="pagination">
                    {
                        props.page > 1 && <button className = "btn_prev" onClick={props.prevPage}>Prev</button>
                    }

                    {
                        props.data.length > 0 && <button className = "btn_next" onClick={props.nextPage}>Next</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;