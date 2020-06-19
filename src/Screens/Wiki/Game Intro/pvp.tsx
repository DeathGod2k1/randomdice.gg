import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { sanitize } from 'dompurify';
import Main from '../../../Components/Main/main';
import Error from '../../../Components/Error/error';
import LoadingScreen from '../../../Components/Loading/loading';
import replaceAnchorWithHistory from '../../../Misc/HTMLAnchorNavigation';
import { RootState } from '../../../Misc/Redux Storage/store';
import { fetchWiki } from '../../../Misc/Firebase/fetchData';
import { CLEAR_ERRORS } from '../../../Misc/Redux Storage/Fetch Firebase/types';
import './pvp.less';

export default function PVP(): JSX.Element {
    replaceAnchorWithHistory();
    const dispatch = useDispatch();
    const selection = useSelector((state: RootState) => state.fetchWikiReducer);
    const { error, wiki } = selection;

    let jsx;

    if (wiki) {
        jsx = ReactHtmlParser(sanitize(wiki.pvp));
    } else if (error) {
        jsx = (
            <Error
                error={error}
                retryFn={(): void => {
                    dispatch({ type: CLEAR_ERRORS });
                    fetchWiki(dispatch);
                }}
            />
        );
    } else {
        jsx = <LoadingScreen />;
    }
    return (
        <Main title='PvP Introduction' className='pvp-intro'>
            {jsx}
        </Main>
    );
}
