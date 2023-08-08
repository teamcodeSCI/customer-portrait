import { useEffect } from 'react';

export const useOutside = (ref: any, func: any) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        func();
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, func]);
};
export const gender = (str: string): string => {
  let gender: string;
  switch (str) {
    case 'male':
      gender = 'Nam';
      break;
    case 'female':
      gender = 'Nữ';
      break;
    default:
      gender = str;
      break;
  }
  return gender;
};
export const setAddress = ({
  street,
  district_name,
  state_name,
  country_name,
}: {
  street: string;
  district_name: string;
  state_name: string;
  country_name: string;
}) => {
  return `${street !== '' ? `${street}, ` : ''}${district_name !== '' ? `${district_name}, ` : ''}${
    state_name !== '' ? `${state_name}, ` : ''
  }${country_name}`;
};
