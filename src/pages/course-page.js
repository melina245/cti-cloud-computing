import React from 'react';
import Course from '../components/course';
import {useOvermind} from '../overmind';
import { Dimmer, Loader } from 'semantic-ui-react';

const Page = ({}) => {
    const { state, actions } = useOvermind();

    return (
        <div>
            <Dimmer active={state.ui.isLoadingCourse}>
                <Loader />
            </Dimmer>
            <Course {...state.course} />
        </div>
    );
};

export default Page;