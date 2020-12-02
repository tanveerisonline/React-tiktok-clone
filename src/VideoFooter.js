import React from 'react';
import "./VideoFooter.css";
//import "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@tanveer@tiktok</h3>
                <p>This is dummy test</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />

                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>

                                <p>A Song is being played</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
        </div>
    );
}

export default VideoFooter;
