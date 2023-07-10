import React, { useState } from 'react';
import style from './search.module.scss';
import { motion } from 'framer-motion';

interface SearchProps {
  name: string;
  value: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ onChange, value, name, type }: SearchProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <motion.div
      onFocus={handleFocus}
      onBlur={handleBlur}
      animate={{ borderColor: isFocused ? 'var(--primary-btn-hover-color)' : '#ccc' }}
      transition={{ duration: 0.3 }}
      className={style['search']}
    >
      <input type={type} name={name} placeholder="Tìm kiếm..." onChange={onChange} value={value} />
      <button></button>
    </motion.div>
  );
};

export default Search;
