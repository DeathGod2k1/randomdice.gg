import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sanitize } from 'dompurify';
import Main from '../../../Components/Main/main';
import Error from '../../../Components/Error/error';
import LoadingScreen from '../../../Components/Loading/loading';
import replaceAnchorWithHistory from '../../../Misc/HTMLAnchorNavigation';
import { RootState } from '../../../Misc/Redux Storage/store';
import { fetchWiki } from '../../../Misc/Firebase/fetchData';
import { CLEAR_ERRORS } from '../../../Misc/Redux Storage/Fetch Firebase/types';
import './patchNote.less';

export default function PatchNote(): JSX.Element {
    const history = useHistory();
    const dispatch = useDispatch();
    const selection = useSelector((state: RootState) => state.fetchWikiReducer);
    const { error, wiki } = selection;

    useEffect(() => {
        return replaceAnchorWithHistory(history);
    }, []);

    let jsx;

    if (wiki) {
        jsx = ReactHtmlParser(sanitize(wiki.patch_note));
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
        <Main title='Patch Note' className='wiki patch-note'>
            {jsx}
        </Main>
    );
}
