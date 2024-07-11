/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { 
    SearchContainer,
    SearchInput,
    SearchIcon,
    SpinerWrapper,
    SearchIconWrapper,
    SearchInpiutWrapper,
} from './searchInputComponents';
import {searchSvg} from '../../assets';
import Spiner from '../../components/Spiner';


const SearchComponent = ({ onSearch, isLoading }) => {
  const [keyword, setKeyword] = useState('');
//   const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    // setLoading(true);
    await onSearch(keyword);
    // setLoading(false);
  };

  useEffect(() => {
    if(keyword.length >= 3){
      handleSearch();
    }
  },[keyword])

  return (
    <SearchContainer>
        <SearchIconWrapper>
            <SearchIcon src={searchSvg} alt={'searchSvg'}/>
        </SearchIconWrapper>
        <SearchInpiutWrapper>
            <SearchInput
                type="text"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
            />
        </SearchInpiutWrapper>
        <SpinerWrapper>
          {isLoading &&
            <Spiner size={20} color={'secondary'}/>

          }
        </SpinerWrapper>
    </SearchContainer>
  );
};

SearchComponent.propTypes = {
    onSearch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

export default SearchComponent;
