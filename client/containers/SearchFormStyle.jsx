import styled from 'styled-components';

const SearchFormStyle = styled.form`
    display: flex;
    align-items: center;
    color : #F1ECE6;
    border: 1px solid #F1ECE6;
    box-shadow: inset 0 0 5px 1px rgba(51,48,44,0.15);
    border-radius: 30px
    font-family: 'Avenir Next', 'Avenir', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1em;
    line-height: 1em;
    padding: 0.75em 1em;
    margin-bottom: 1em;
    width: 25em;
    height: 2em;
    transition: all 0.2s ease-in-out;
    &:focus {
      outline: 1;
      box-shadow: inset 0 1px 5px 1px rgba(0,0,0,0.15),
                        0 0 0 2px #A69E91;
    }
`;

export default SearchFormStyle;