import React from 'react';
import style from './search.module.scss';

interface SearchProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ onChange, value }: SearchProps) => {
  return (
    <div className={style['search']}>
      <input type="text" placeholder="Tìm kiếm..." onChange={onChange} value={value} />
      <button></button>
    </div>
  );
};

export default Search;
