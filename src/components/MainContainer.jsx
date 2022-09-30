import React, {useState, useEffect} from 'react'
import Search from './Search'
import axios from 'axios'

const MainContainer = () => {
    const perPage = 9;
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [sortField, setSortField] = useState('login');
    const [sortDirection, setSortDirection] = useState('asc');
    const [error, setError] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [total, setTotal] = useState();
    const [loading, setLoading] = useState(true);

    const handleClick = () => {
        fetchGithubAccount(inputValue)
            .then((response) => {
                setData(response.data.items);
                setTotal(response.data.total_count);
                setLoading(false);
            });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (data.length !== 0) {
            fetchGithubAccount(inputValue)
                .then((response) => {
                    setData(response.data.items);
                    setTotal(response.data.total_count);
                })
                .catch((response) => {
                    setError(true);
                });
        }
    }, [page, sortField, sortDirection]); // eslint-disable-line react-hooks/exhaustive-deps

    const nextPage = () => {
        setPage(page + 1);
    }

    const prevPage = () => {
        setPage(page - 1);
    }

    const fetchGithubAccount = (inputValue) => {
        return axios
        .get(`https://api.github.com/search/users?q=${inputValue}&per_page=${perPage}&page=${page}&sort=${sortField}&direction=${sortDirection}`)
    }

    const makeFilter = (e) => {
        let target = e.target.id;

        if (target === 'direction') {
            setSortDirection(e.target.value);
        }
        if (target === 'field') {
            setSortField(e.target.value);
        }
    }

  return (
    <div>
            <Search 
                error={error}
                handleClick={handleClick}
                inputValue={inputValue}
                setInputValue={setInputValue}
                makeFilter={makeFilter}
                page={page}
                total={total}
                loading={loading}
                nextPage={nextPage}
                prevPage={prevPage}
                data={data}
                setPage={setPage}
                perPage={perPage}
                onFormSubmit={onFormSubmit}
            />
    </div>
  )
}

export default MainContainer