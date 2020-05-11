import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setPlayingState } from "../actions";

import "../assets/styles/components/Player.scss";

const Player = (props) => {

    const { id } = props.match.params;

    useLayoutEffect(() => {
        props.setPlayingState(id);
    }, []);

    return (
        props.playing ? (
            <div className="player">
                <video controls autoPlay>
                    <source src={props.playing.source} type="video/mp4" />
                </video>
                <div className="player--back">
                    <button type="button" onClick={() => props.history.goBack()}>
                        Regresar
                    </button>
                </div>
            </div>
        ) :
            (<Redirect to="/NotFound" />)
    );
};

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
    };
};

const mapDispatchToProps = {
    setPlayingState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);