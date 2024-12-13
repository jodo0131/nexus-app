import { createGlobalStyle } from 'styled-components';

import { BorderRadius, Color, FontWeight } from './styles';

import 'assets/styles/switzer.css';

const DefaultStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Switzer-Variable', sans-serif !important;
    }

    #root{
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }

    p {
        font-weight: ${FontWeight.REGULAR};
    }

    ::-webkit-scrollbar {
        width: 4px;
        height: 6px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 8px;
        background: ${Color.SCROLLBAR_TRACK};
    }

    ::-webkit-scrollbar-thumb {
        background: ${Color.SCROLLBAR_THUMB};
        border-radius: 8px;
    }

    .ant-select-dropdown {
        border-radius: ${BorderRadius.SM}px;
    }
`;

export default DefaultStyles;
