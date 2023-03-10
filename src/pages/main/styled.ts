import styled from 'styled-components';
import { BLACK40, HOVER, WHITE } from '../../constants/styles';
import search from '../../assets/icons/search.svg';

export const MainPageContainer = styled.section`
display: flex'
flex-direction: column;
width: 100%;
`;

export const MainPageHeader = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 800px) {
    margin-bottom: 24px;
  }
  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
  @media (max-width: 370px) {
    margin-bottom: 16px;
  }
`;

export const SeacrSortContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 16px;
  position: relative;
`;

interface SearchBarProps {
  isInputOpened: boolean;
  isDESC?: boolean;
  isInputFocused?: boolean;
}

export const SearchBar = styled.div<SearchBarProps>`
display: flex;
flex-direction: row;
width: 100%;
gap: 8px;
padding: 10px 8px 10px 17px;
max-width: 350px;
height: 38px
background: ${WHITE};
box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 
0px 3px 4px rgba(191, 196, 201, 0.18),
0px 1px 5px rgba(191, 196, 201, 0.24);
border-radius: 599px; 
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { display: none; }
input[type=text]::-ms-clear {  display: none; width : 0; height: 0; }
input[type=text]::-ms-reveal {  display: none; width : 0; height: 0; }

input {
  border: 0; 
  width: 100%;
  ::placeholder { 
       color: ${BLACK40};
      }
      
  :focus {
      outline: none;
    }
};

img{
  width: 16px;
height: 16px;
};

  @media (max-width: 800px) {
    max-width: 274px;
  }

  @media (max-width: 580px) {
    max-width: 230px;
  }
@media (max-width: 600px) {
   
      ${({ isInputOpened }) =>
        isInputOpened
          ? 'max-width: 288px; :focus {outline: #ffffff;} '
          : `   width: 32px;
      height: 32px;
      padding: 0px;
      gap: 0;
      border-radius: 50%;
      justify-content: center;
      align-items: center;

      input {
          display:none;
      }
    
      ::placeholder { 
          color: transparent;
      }`}
    }
`;
export const SvgWrapper = styled.span<SearchBarProps>`
  // svg {
  //   fill: #a7a7a7;
  // }
  ${({ isInputFocused }) => (isInputFocused ? 'svg {fill: #f83600;}' : 'svg {fill: #a7a7a7;}')}
  ${({ isInputOpened }) => (isInputOpened ? ' ' : 'display: none;')}
`;

export const StyledInput = styled.input<SearchBarProps>`
  caret-color: #f83600;
  :focus {
    outline: #ffffff;
  }
  @media (max-width: 800px) {
    max-width: 274px;
  }
  @media (max-width: 600px) {
    input {
      display: none;
    }
  }

  @media (max-width: 600px) {
    ${({ isInputOpened }) => (isInputOpened ? 'max-width: 288px; display: block;  outline: #ffffff; ' : `   `)};
  }
`;

export const CrossWrapper = styled.span<SearchBarProps>`
  svg {
    fill: #f83600;
  }
  ${({ isInputOpened }) => (isInputOpened ? ' ' : 'display: none;')}
`;

export const BookSort = styled.div<SearchBarProps>`
  cursor: pointer;
  @media (max-width: 600px) {
    ${({ isInputOpened }) => (isInputOpened ? 'display: none;' : '')}
  }
  ${({ isDESC }) =>
    !isDESC
      ? `img {
    transform: rotate(180deg);
  }`
      : ``}

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${WHITE};
  box-shadow: 0px 2px 4px rgba(191, 196, 201, 0.2), 0px 3px 4px rgba(191, 196, 201, 0.18),
    0px 1px 5px rgba(191, 196, 201, 0.24);
  border-radius: 599px;

  span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: 0.1px;
    color: ${BLACK40};
  }

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    gap: 0px;
    padding: 0px;
    span {
      display: none;
    }
  }
`;

export const ViewButtonsContainer = styled.div<SearchBarProps>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media (max-width: 600px) {
    ${({ isInputOpened }) => (isInputOpened ? 'display: none;' : '')}
  }
`;

export const ViewButton = styled.p`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${WHITE};
  color: ${BLACK40};

  svg {
    fill: ${BLACK40};
  }

  filter: drop-shadow(0px 2px 4px rgba(191, 196, 201, 0.2)) drop-shadow(0px 3px 4px rgba(191, 196, 201, 0.18))
    drop-shadow(0px 1px 5px rgba(191, 196, 201, 0.24));

  :hover {
    filter: drop-shadow(0px 2px 5px rgba(54, 54, 54, 0.1));
    cursor: pointer;
  }

  :active {
    filter: drop-shadow(0px 3px 4px rgba(222, 125, 11, 0.2)) drop-shadow(0px 1px 10px rgba(249, 89, 8, 0.2));
  }

  &.current-view {
    background: ${HOVER};

    color: ${WHITE};

    svg {
      fill: ${WHITE};
    }
  }

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;
