import React from "react";
import Grid from "@material-ui/core/Grid"
import "./ContentBox.scss"

export default function ContentBox(props) {
    return(
        <div className="ContentBox">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    { props.children }
                </Grid>       
            </Grid>
        </div>
    )
}